import logoImage from '../assets/Logo1.png'
import logo from '../assets/FAGNAMPY.png'
import Navigation from '@/components/navigation'
import { Link } from '@inertiajs/react'

function Headeraccueil(){
    return (
        <header>
            <nav>
                <div className="log">
                    <img src={logoImage} alt="" id='logo1' />
                    <img src={logo} alt="" id='logo2'/>
                </div>
                <Navigation />
                <div className="btn">
                    <Link href='' id='link'>S'inscrire</Link>
                    <Link href='' id='link'>Se connecter</Link>
                </div>
            </nav>
        </header>
    )
}

export default Headeraccueil