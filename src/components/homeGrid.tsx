/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowRight } from "react-icons/md" 

const App = ({ results } : any) => {

  
    return (
        <section className="flex overflow-x-hidden max-w-sm mt-12
        md:max-w-xl lg:max-w-screen-2xl lg:px-8 lg:max-h-96 lg:overflow-x-hidden lg:overflow-y-scroll
        ">  
            <div>
                <h1 className="px-8 py-4 font-semibold text-2xl sticky top-0 bg-white cursor-default">Naam</h1>
                {results.length > 0 && (
                <ul>
                    {/* @ts-expect-error */}
                    {results.map(user => (
                        <li key={user.id} className="odd:bg-green/40 text-xl px-8 py-4 whitespace-nowrap md:pr-16 lg:pr-24 xl:pr-48" >
                            {user.id === 0 ?
                                <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={``}>{user.name}</Link>
                                :
                                <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={`/user/${user.id}`}>{user.name}</Link>
                            }
                        </li>
                    ))}
                </ul>
                )}
            </div>
            <div className="lg:flex lg:flex-col hidden">
                <h1 className="px-8 py-4 font-semibold text-2xl sticky top-0 bg-white cursor-default">Status</h1>
                {results.length > 0 && (
                    <ul>
                    {/* @ts-expect-error */}
                        {results.map(user => (
                            <li key={user.id} className="odd:bg-green/40 text-xl px-8 py-4 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={``}>{user.status}</Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={`/user/${user.id}`}>{user.status}</Link>
                                }
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="md:flex md:flex-col hidden">
                <h1 className="px-8 py-4 font-semibold text-2xl sticky top-0 bg-white cursor-default">Service</h1>
                {results.length > 0 && (
                <ul>
                {/* @ts-expect-error */}
                    {results.map(user => {
                        if (user.service === 0) {
                            return <li key={user.id} className="odd:bg-green/40 text-xl px-8 whitespace-nowrap py-4 md:pr-16 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={``}>Geen service</Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={`/user/${user.id}`}>Live - tv</Link>
                                }
                                </li>
                        } else if(user.service === 1) {
                            return <li key={user.id} className="odd:bg-green/40 text-xl px-8 whitespace-nowrap py-4 md:pr-16 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={``}>Geen service</Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={`/user/${user.id}`}>Plex muziek</Link>
                                }
                                </li>
                        }
                        else if(user.service === 2){
                            return <li key={user.id} className="odd:bg-green/40 text-xl px-8 whitespace-nowrap py-4 md:pr-16 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={``}>Geen service</Link>    
                                    :
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={`/user/${user.id}`}>Plex film</Link>
                                }
                                </li>
                        }
                        else if(user.service === 3){
                            return <li key={user.id} className="odd:bg-green/40 text-xl px-8 whitespace-nowrap py-4 md:pr-16 lg:pr-24 xl:pr-48">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={``}>Geen service</Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={`/user/${user.id}`}>Plex foto&#39;s</Link>
                                }
                                </li>
                        }
                    })}
                </ul>
                )}
            </div>
            <div>
                <h1 className="px-8 py-4 font-semibold text-2xl sticky top-0 bg-white cursor-default">Detail</h1>
                {results.length > 0 && (
                    <ul>
                    {/* @ts-expect-error */}
                        {results.map(user => (
                            <li key={user.id} className="odd:bg-green/40 px-8 text-6xl text-textBlack/80 xl:pr-28">
                                {user.id === 0 ?
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={``}><MdOutlineKeyboardArrowRight /></Link>
                                    :
                                    <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-4 focus:ring-offset-lightblue' to={`/user/${user.id}`}><MdOutlineKeyboardArrowRight /></Link>
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