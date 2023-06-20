import { Link } from 'react-router-dom'
import Logo from '../assets/logo-de-lovie.ico'

export default function Devices() {

    return (
        <main className="font-pop mb-4">
            <div className='flex items-center justify-center border-b-2 min-w-max'>
                <Link 
                className='transition-all duration-200 ease-in-out p-4
                focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-darkblue
                hover:bg-lightblue' to="/">
                    <img src={Logo} alt="Delovie_logo" className='h-14 hover:scale-125 transition-all duration-200 ease-in-out'/>
                    <h1 className='text-lg font-medium'>De lovie</h1>
                </Link>
            </div>
        </main>
    )
}