import { Link } from 'react-router-dom'
import Logo from '../assets/logo-de-lovie.ico'

export default function Devices() {

    return (
        <main className="font-pop">
            <div className='flex items-center justify-center border-b-2 my-2 min-w-max'>
                <Link className='transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-darkblue focus:rounded
                hover:outline-none hover:ring-2 hover:ring-offset-4 hover:ring-darkblue hover:rounded' to="/">
                    <img src={Logo} alt="Delovie_logo" className='h-14 '/>
                    <h1 className='text-lg font-medium'>De lovie</h1>
                </Link>
            </div>
        </main>
    )
}