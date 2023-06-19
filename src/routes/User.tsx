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

export default function User() {
  const params = useParams()
  const [user, setUser] = useState([])
  const [motion, setMotion] = useState([])
  const [name, setName] = useState('')

  const fetchUserData = async () => {
    await fetch(`https://loviebackend03.azurewebsites.net/users/${params.id}`)
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
      fetch(`https://loviebackend03.azurewebsites.net/users/${params.id}`, {
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
    const worksheet = utils.json_to_sheet(motion);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Activity Log");
    //@ts-expect-error
    writeFile(workbook, `${user.name} - Activity Log.xlsx`);
  }

  const activity = async (  ) => {
    await fetch(`https://loviebackend03.azurewebsites.net/activity/${params.id}`)
    .then(response => response.json())
    .then(data => {
      if(data == '') {

        setMotion([])
      }else{
        console.log(data)
        setMotion(data)
      }
    }
    )
  }

  return (
    <main className="relative min-h-screen font-pop overflow-hidden ">
      <Link to={'/'}><FaArrowLeft className='text-4xl absolute left-8 top-8 md:left-12 lg:left-16 xl:left-20 2xl:left-64'/></Link>
      <LogoBar />
      <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto pb-8">
        <h2 className='flex flex-row mt-4 items-center gap-4'><Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-darkblue focus:rounded
              hover:outline-none hover:ring-2 hover:ring-offset-4 hover:ring-darkblue hover:rounded' to="/">Dashboard</Link> <ImArrowRight2/> User detail</h2>
        <h1 className="flex items-center gap-4 text-4xl text-textBlack font-semibold mt-7">
          <input onChange={e => {setName(e.target.value);}} 
          type="text" 
          // @ts-expect-error
          defaultValue={user.name} 
          className='max-w-[15rem] transition-all duration-200 ease-in-out border-b-2 border-darkblue p-2
          focus:outline-none  focus:ring-2 focus:ring-offset-4 focus:ring-darkblue
          hover:outline-none  hover:ring-2 hover:ring-offset-4 hover:ring-darkblue' />
          <button className='text-4xl p-4 transition-all duration-200 ease-in-out
            focus:outline-none  focus:ring-2 focus:ring-darkblue
            hover:outline-none  hover:ring-2 hover:ring-darkblue' type='submit' onClick={() => {nameUpdate(); alert('Naam is aangepast'); window.location.reload();}}><MdOutlineKeyboardArrowRight /></button>
        </h1>

        <div className='grid grid-cols-1 grid-rows-3 gap-8 
        lg:grid-cols-2 lg:grid-rows-2 mt-8'>
          {/* movement info */}
          <section className='mx-auto bg-cardGreen/40 p-4 overflow-x-scroll max-w-xs md:max-w-full md:overflow-hidden '>
            <h1 className="text-xl font-semibold mb-4">Bewegingen + functies</h1>
            <table className=''>
                <thead>
                    <tr className="text-left bg-white">
                        <th className="px-4 py-2 pr-16 font-bold">Beweging</th>
                        <th className="px-4 py-2 pr-16 font-bold">Effect</th>
                        <th className='px-4 py-2 pr-16 font-bold'>Signaal</th>

                    </tr>
                </thead>
                <tbody className="">
                  {/* service = 0 */}
                  {
                    // @ts-expect-error
                    user.service === 0 ?
                    <tr className="">
                      <td className="px-4 py-2 pr-16">Rechter hand naar rechts</td>
                      <td className="px-4 py-2 pr-16">Volgende zender</td>
                      <td className='px-4 py-2 pr-16'>zender+</td>
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
                      <td className="px-4 py-2 pr-16">linker hand naar links</td>
                      <td className="px-4 py-2 pr-16">Vorige zender</td>
                      <td className='px-4 py-2 pr-4'>zender-</td>
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
                      <td className="px-4 py-2 pr-16">Rechter hand naar rechts</td>
                      <td className="px-4 py-2 pr-16">Volgende nummer</td>
                      <td className='px-4 py-2 pr-16'>zender+</td>
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
                      <td className="px-4 py-2 pr-16">Rechter hand naar rechts</td>
                      <td className="px-4 py-2 pr-16">Volgend filmpje</td>
                      <td className='px-4 py-2 pr-16 flex items-center gap-2'>OK <FaArrowRight /> OK</td>
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
                      <td className="px-4 py-2 pr-16">Rechter hand naar rechts</td>
                      <td className="px-4 py-2 pr-16">Volgende foto</td>
                      <td className='px-4 py-2 pr-16 flex items-center gap-2'>zender+</td>
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
              <h1 className="text-xl font-semibold mb-4 top-4 left-4">Geselecteerde service</h1>
                {
                  // @ts-expect-error
                  user.service == 0 ? 
                  <div className="grid grid-rows-2 grid-cols-2 gap-4 mt-12">
                    <h1 className="p-8 bg-darkblue text-white font-semibold justify-center flex rounded text-center">Live - tv</h1>
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Plex &#40;muziek&#41;</h1>
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Plex &#40;film&#41;</h1>
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Plex &#40;foto&#39;s&#41;</h1>
                  </div>    
                  :
                  // @ts-expect-error 
                  user.service == 1 ?
                  <div className="items-center grid grid-cols-2 gap-4 mt-12">
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Live - tv</h1>
                    <h1 className="p-8 bg-darkblue text-white font-semibold justify-center flex rounded text-center">Plex &#40;muziek&#41;</h1>
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Plex &#40;film&#41;</h1>
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Plex &#40;foto&#39;s&#41;</h1>
                  </div>   
                  : 
                  // @ts-expect-error
                  user.service == 2 ?
                  <div className="items-center grid grid-cols-2 gap-4 mt-12">
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Live - tv</h1>
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Plex &#40;muziek&#41;</h1>
                    <h1 className="p-8 bg-darkblue text-white font-semibold justify-center flex rounded text-center">Plex &#40;film&#41;</h1>
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Plex &#40;foto&#39;s&#41;</h1>
                  </div>   
                  :
                  <div className="items-center grid grid-cols-2 gap-4 mt-12">
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Live - tv</h1>
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Plex &#40;muziek&#41;</h1>
                    <h1 className="p-8 whitespace-nowrap bg-darkblue/25 text-textBlack/75 justify-center flex font-semibold rounded text-center">Plex &#40;film&#41;</h1>
                    <h1 className="p-8 bg-darkblue text-white font-semibold justify-center flex rounded text-center">Plex &#40;foto&#39;s&#41;</h1>
                  </div>   
                }
            </div>
          </section> 

          <section className='max-w-xs mx-auto p-4 max-h-72 lg:col-span-2 md:max-w-full bg-cardGreen/40'>
            <div className='flex items-center pb-4 gap-4'>
              <h1 className="text-xl font-semibold ">Activiteiten Log</h1>
              <button onClick={handleClick} className='text-md p-2 rounded transition-all ease-in-out duration-200 flex items-center gap-2 text-opacity-75 bg-lightblue bg-opacity-50
                focus:outline-none focus:ring-offset-lightblue focus:ring-2 focus:ring-offset-4 focus:ring-darkblue focus:text-opacity-100 focus:bg-opacity-100
                hover:outline-none hover:ring-offset-lightblue hover:ring-2 hover:ring-offset-4 hover:ring-darkblue hover:text-opacity-100 hover:bg-opacity-100'>Download <BiDownload /></button>
            </div>
            <DetailActivityLog data={motion} />
          </section>
        </div>
      </div>
    </main>
  );
}
