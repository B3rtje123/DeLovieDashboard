/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useParams } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import LogoBar from '../components/LogoBar';
import DetailActivityLog from '../components/detailActivityLog';
import { useEffect, useState } from 'react';
import { utils, writeFile } from "xlsx";
import { BiDownload } from 'react-icons/bi';
import URL from '../components/url';

import { motion } from 'framer-motion'

export default function User() {
  const params = useParams()
  const [user, setUser] = useState([])
  const [movement, setMovement] = useState([])
  const [name, setName] = useState('')


  const fetchUserData = async () => {
    await fetch(`${URL}/users/${params.id}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        setUser(data)
    })
  }
  useEffect(() => {
    fetchUserData()
    activity()
  }, [])

  const nameUpdate = () => {
    if(name != '') {
      console.log(name)
      fetch(`${URL}/users/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          //@ts-expect-error
          service: user.service,
          //@ts-expect-error
          status: user.status
        })
      })
    }
  }

  const handleClick = () => {
    const worksheet = utils.json_to_sheet(movement);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Activity Log");
    //@ts-expect-error
    writeFile(workbook, `${user.name} - Activity Log.xlsx`);
  }

  const activity = async (  ) => {
    await fetch(`${URL}/activity/${params.id}`)
    .then(response => response.json())
    .then(data => {
      if(data == '') {

        setMovement([])
      }else{
        console.log(data)
        setMovement(data)
      }
    }
    )
  }

  const ServiceActiveStyle = (id : number) => {
    // @ts-expect-error
    if(id === user.service) {
      return 'p-8 bg-darkblue text-white font-semibold justify-center flex text-center cursor-default'
    }else{
      return 'p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold text-center cursor-default'
    }
  }

  return (
    <motion.main 
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{x: window.innerWidth, opacity: 0, transition: {duration: 0.2}}}
    className="relative min-h-screen font-pop overflow-hidden ">
      <Link to={'/'}><FaArrowLeft className='text-4xl absolute left-8 top-8 md:left-12 lg:left-16 xl:left-20 2xl:left-64'/></Link>
      <LogoBar />
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto pb-8">
        <h2 className='flex flex-row items-center gap-4 cursor-default'>
          <Link 
            className='transition-all duration-200 ease-in-out p-2 cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-darkblue
            hover:bg-lightblue' to="/">
            Dashboard
          </Link> 
          <ImArrowRight2/> 
          User detail
        </h2>

        <h1 className="flex items-center gap-4 text-4xl text-textBlack font-semibold mt-7">
          <input onChange={e => {setName(e.target.value);}} 
          type="text" 
          // @ts-expect-error
          defaultValue={user.name} 
          className='max-w-[15rem] transition-all duration-200 ease-in-out border-b-2 border-darkblue p-2
          focus:outline-none  focus:ring-2 focus:ring-offset-4 focus:ring-darkblue
          hover:bg-lightblue' />
          <button className='text-4xl p-4 transition-all duration-200 ease-in-out
            focus:outline-none  focus:ring-2 focus:ring-darkblue
            hover:bg-lightblue' type='submit' onClick={() => {nameUpdate(); alert('Naam is aangepast'); window.location.reload();}}><MdOutlineKeyboardArrowRight /></button>
        </h1>

        <div className='grid grid-cols-1 grid-rows-3 gap-8 
        lg:grid-cols-2 lg:grid-rows-2 mt-8'>
          {/* movement info */}
          <section className='mx-auto bg-cardGreen/40 p-4 overflow-x-scroll max-w-xs md:max-w-full md:overflow-hidden'>
            <h1 className="text-xl font-semibold mb-4 cursor-default">Bewegingen + functies</h1>
            <table className=''>
                <thead>
                    <tr className="text-left bg-white">
                        <th className="px-4 py-2 pr-16 font-bold cursor-default">Beweging</th>
                        <th className="px-4 py-2 pr-16 font-bold cursor-default">Effect</th>
                        <th className='px-4 py-2 pr-16 font-bold cursor-default'>Signaal</th>

                    </tr>
                </thead>
                <tbody className="">
                  {/* service = 0 */}
                  {
                    // @ts-expect-error
                    user.service === 0 ?
                    <tr className="">
                      <td className="px-4 py-2 pr-16 cursor-default">Rechter hand naar rechts</td>
                      <td className="px-4 py-2 pr-16 cursor-default">Volgende zender</td>
                      <td className='px-4 py-2 pr-16 cursor-default'>zender+</td>
                    </tr>
                    
                    :
                    <tr className="hidden">
                      <td className="px-4 py-2 pr-16"></td>
                      <td className="px-4 py-2 pr-16"></td>
                      <td className='px-4 py-2 pr-16'></td>
                    </tr>
                  }

                  {
                    // @ts-expect-error
                    user.service === 0 ?
                    <tr className="bg-green/40">
                      <td className="px-4 py-2 pr-16 cursor-default">linker hand naar links</td>
                      <td className="px-4 py-2 pr-16 cursor-default">Vorige zender</td>
                      <td className='px-4 py-2 pr-4 cursor-default'>zender-</td>
                    </tr>
                    
                    :
                    <tr className="hidden">
                      <td className="px-4 py-2 pr-16"></td>
                      <td className="px-4 py-2"></td>
                    </tr>
                  }

                  {/* service = 1 */}
                  {
                    // @ts-expect-error
                    user.service === 1 ?
                    <tr>
                      <td className="px-4 py-2 pr-16 cursor-default">Rechter hand naar rechts</td>
                      <td className="px-4 py-2 pr-16 cursor-default">Volgende nummer</td>
                      <td className='px-4 py-2 pr-16 cursor-default'>zender+</td>
                    </tr>
                    :
                    <tr className="hidden">
                      <td className="px-4 py-2 pr-16"></td>
                      <td className="px-4 py-2"></td>
                    </tr>
                  }

                  {/* service = 2 */}
                  {
                    // @ts-expect-error
                    user.service === 2 ?
                    <tr>
                      <td className="px-4 py-2 pr-16 cursor-default">Rechter hand naar rechts</td>
                      <td className="px-4 py-2 pr-16 cursor-default">Volgend filmpje</td>
                      <td className='px-4 py-2 pr-16 flex items-center gap-2 cursor-default'>OK <FaArrowRight /> OK</td>
                    </tr>
                    :
                    <tr className="hidden">
                      <td className="px-4 py-2 pr-16"></td>
                      <td className="px-4 py-2"></td>
                    </tr>
                  }

                  {/* service = 3 */}
                  {
                    // @ts-expect-error
                    user.service === 3 ?
                    <tr>
                      <td className="px-4 py-2 pr-16 cursor-default">Rechter hand naar rechts</td>
                      <td className="px-4 py-2 pr-16 cursor-default">Volgende foto</td>
                      <td className='px-4 py-2 pr-16 flex items-center gap-2 cursor-default'>zender+</td>
                    </tr>
                    :
                    <tr className="hidden">
                      <td className="px-4 py-2 pr-16"></td>
                      <td className="px-4 py-2"></td>
                    </tr>
                  }
                </tbody>
            </table>
          </section>
          
          <section className='mx-auto bg-cardGreen/40 max-w-xs p-4 max-h-min md:max-w-full'> 
            <div className=''>
              <h1 className="text-xl font-semibold mb-4 top-4 left-4 cursor-default">Geselecteerde service</h1>
                
              <div className="grid grid-rows-2 grid-cols-2 gap-4 mt-12">
                <h1 className={ServiceActiveStyle(0)}>Live - tv</h1>
                <h1 className={ServiceActiveStyle(1)}>Plex &#40;muziek&#41;</h1>
                <h1 className={ServiceActiveStyle(2)}>Plex &#40;film&#41;</h1>
                <h1 className={ServiceActiveStyle(3)}>Plex &#40;foto&#39;s&#41;</h1>
              </div>    
                
            </div>
          </section> 

          <section className='max-w-xs mx-auto p-4 max-h-72 lg:col-span-2 md:max-w-full bg-cardGreen/40'>
            <div className='flex items-center pb-4 gap-4'>
              <h1 className="text-xl font-semibold cursor-default">Activiteiten Log</h1>
              <button onClick={handleClick} className='text-md p-2 transition-all ease-in-out duration-200 flex items-center gap-2 text-opacity-75 bg-lightblue bg-opacity-50
                focus:outline-none focus:ring-offset-lightblue focus:ring-2 focus:ring-offset-4 focus:ring-darkblue focus:text-opacity-100 focus:bg-opacity-100
                hover:scale-105 hover:text-opacity-100 hover:bg-opacity-100'>Download <BiDownload /></button>
            </div>
            <DetailActivityLog data={movement} />
          </section>
        </div>
      </div>
    </motion.main>
  );
}
