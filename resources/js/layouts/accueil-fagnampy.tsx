import logoImage from '../assets/Logo1.png'
import logo from '../assets/FAGNAMPY.png'
import Navigation from '@/components/navigation'
import { Link } from '@inertiajs/react'
import { type ReactNode } from 'react';
import '../../css/footer.css';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import git from '../assets/github.png';
import whatsapp from '../assets/whatsapp.png';
import univ from '../assets/fst.png';
import dev from '../assets/icone3dev.png';
import retour from '../assets/retour.png';

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
               <div className="copyright">
                <p>Copyright &copy; 2025 ,le design de <span>3DEV</span></p>
               </div>
               <div className="navigation">
                <li><img src={git} alt=""  /></li>
                <li><img src={insta} alt=""  /></li>
                <li><img src={fb} alt="" /></li>
                <li><img src={whatsapp} alt=""  /></li>
               </div>
               <div className="remerciement">
                <p>Mes remerciement :</p>
                <div className="sponsor">
                    <li><img src={univ} alt=""  id='uni'/></li>
                    <li><img src={dev} alt=""  id='dev'/></li>
                </div>
               </div>
               <div className="retour">
                <a href="#accueil"><img src={retour} alt="" /></a>
               </div>
            </footer>
        </>
    );
};

export default AppAccueilFagnampy