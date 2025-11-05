// import '@/components/header';
import Header from '@/components/header';
// import '@/components/Main';
import Main from '@/components/Main';
import { Head } from '@inertiajs/react';
//test
export default function Accueil(){
    const test : string ="valery"
    return (
        <>
         <Head title='Fagnampy'/>
         <Header />
         <Main />
        </>

    )
}