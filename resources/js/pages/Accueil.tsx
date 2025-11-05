// import '@/components/header';
import Header from '@/components/header';
// import '@/components/Main';
import Main from '@/components/Main';
import { Head } from '@inertiajs/react';

export default function Accueil(){
    return (
        <>
         <Head title='Fagnampy'/>
         <Header />
         <Main />
        </>

    )
}