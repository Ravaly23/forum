
// import Header from '@/components/header';
import Main from '@/components/Main';
import { Head } from '@inertiajs/react';
import AppAccueilFagnampy from '@/layouts/accueil-fagnampy'
export default function Accueil(){

    return (
          
          <AppAccueilFagnampy accueil='#accueil' propos='#propos' faqs='#faqs' contact='#contact'>
            <Head title='Accueil-fagnampy' />
             <Main />
          </AppAccueilFagnampy>
    )
}