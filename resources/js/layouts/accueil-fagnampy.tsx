import logoImage from '../assets/Logo1.png'
import logo from '../assets/FAGNAMPY.png'
import Navigation from '@/components/navigation'
import { Link } from '@inertiajs/react'
import { type ReactNode } from 'react';
import '../../css/footer.css';
const AppAccueilFagnampy = ({accueil,propos,contact,faqs,children}:{accueil:string,propos:string,contact:string,faqs:string,children:ReactNode}) => {
    const test :string = accueil
    const bool : boolean = test === "#accueil"
    return (
        <>
            <header>
                <nav>
                    <div className="log">
                        <img src={logoImage} alt="" id="logo1" />
                        <img src={logo} alt="" id="logo2" />
                    </div>
                    {
                        bool ? (
                        <>
                           <Navigation accueil={accueil} propos={propos} contact={contact} faqs={faqs}/>
                           <div className="btn">
                               <Link href="/inscrire" id="link">
                                         S'inscrire
                               </Link>
                               <Link href="" id="link">
                                         Se connecter
                               </Link>
                           </div> 
                        </>
                        )
                        : <Navigation accueil={accueil} propos={propos} contact={contact} faqs={faqs} />
                    }
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    );
};

export default AppAccueilFagnampy