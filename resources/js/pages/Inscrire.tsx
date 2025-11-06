import { Head } from '@inertiajs/react';
import AppAccueilFagnampy from '@/layouts/accueil-fagnampy'

export default function Inscrire({teste}:{teste:string}){
   
    return (        
          <AppAccueilFagnampy accueil='/#accueil' propos='/#propos' faqs='/#faqs' contact='/#contact'>
            <Head title='Inscription-fagnampy' />
            <p style={
                {
                    color:'gray',
                    margin:'20vw',
                    background:'blue'
                }
            }>{teste}</p>
          </AppAccueilFagnampy>
    )
}