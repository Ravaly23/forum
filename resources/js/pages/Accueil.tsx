
// import Header from '@/components/header';
import MainFagnampy from '@/components/MainFagnampy'
import { Head } from '@inertiajs/react';
import AppAccueilFagnampy from '@/layouts/accueil-fagnampy'
export default function Accueil(){

    return (
          
          <AppAccueilFagnampy accueil='#accueil' propos='#propos' faqs='#faqs' contact='#contact'>
            <Head title='Accueil-fagnampy' />
             <MainFagnampy />
          </AppAccueilFagnampy>
    )
}