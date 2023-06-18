import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowRight } from "react-icons/md" 

const App = ({ results } : any) => {

  
    return (
        <section className="flex overflow-x-hidden max-w-sm mt-12
        md:max-w-xl lg:max-w-screen-2xl lg:px-8 lg:max-h-[500px] lg:overflow-x-hidden lg:overflow-y-scroll
        ">  
            <div>
                <h1 className="px-8 py-4 font-semibold text-2xl sticky top-0 bg-white">Naam</h1>
                {results.length > 0 && (
                <ul>
                    {results.map(user => (
                        <li key={user.id} className="odd:bg-green/40 text-xl px-8 py-4 whitespace-nowrap md:pr-16 lg:pr-24 xl:pr-48" >
                            {user.id === 0 ?
                                <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={``}>{user.name}</Link>
                                :
                                <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={`/user/${user.id}`}>{user.name}</Link>
                            }
                        </li>
                    ))}
                </ul>
                )}
            </div>
            <div className="lg:flex lg:flex-col hidden">
                <h1 className="px-8 py-4 font-semibold text-2xl sticky top-0 bg-white">Status</h1>
                {results.length > 0 && (
                    <ul>
                        {results.map(user => (
                            <li key={user.id} className="odd:bg-green/40 text-xl px-8 py-4 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={``}>{user.status}</Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={`/user/${user.id}`}>{user.status}</Link>
                                }
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="md:flex md:flex-col hidden">
                <h1 className="px-8 py-4 font-semibold text-2xl sticky top-0 bg-white">Service</h1>
                {results.length > 0 && (
                <ul>
                    {results.map(user => {
                        if (user.service === 0) {
                            return <li key={user.id} className="odd:bg-green/40 text-xl px-8 whitespace-nowrap py-4 md:pr-16 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={``}>Geen service</Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={`/user/${user.id}`}>Live - tv</Link>
                                }
                                </li>
                        } else if(user.service === 1) {
                            return <li key={user.id} className="odd:bg-green/40 text-xl px-8 whitespace-nowrap py-4 md:pr-16 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={``}>Geen service</Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={`/user/${user.id}`}>Plex muziek</Link>
                                }
                                </li>
                        }
                        else if(user.service === 2){
                            return <li key={user.id} className="odd:bg-green/40 text-xl px-8 whitespace-nowrap py-4 md:pr-16 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={``}>Geen service</Link>    
                                    :
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={`/user/${user.id}`}>Plex film</Link>
                                }
                                </li>
                        }
                        else if(user.service === 3){
                            return <li key={user.id} className="odd:bg-green/40 text-xl px-8 whitespace-nowrap py-4 md:pr-16 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={``}>Geen service</Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={`/user/${user.id}`}>Plex foto&#39;s</Link>
                                }
                                </li>
                        }
                    })}
                </ul>
                )}
            </div>
            <div>
                <h1 className="px-8 py-4 font-semibold text-2xl sticky top-0 bg-white">Detail</h1>
                {results.length > 0 && (
                    <ul>
                        {results.map(user => (
                            <li key={user.id} className="odd:bg-green/40 px-8 text-6xl text-textBlack/80 xl:pr-28">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={``}><MdOutlineKeyboardArrowRight /></Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out rounded focus:outline-2 focus:outline-darkblue focus:outline-offset-4' to={`/user/${user.id}`}><MdOutlineKeyboardArrowRight /></Link>
                                }
                                </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default App;