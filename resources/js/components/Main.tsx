import Btninput from '@/components/btninput'
import icone from '../assets/iconesearch.png'
import iconeAbout from '../assets/About.png'
export default function Main() {
  return (
    <>
      <main>
         <div className="accueil" id='accueil'>
           <div className="contenu_accueil">
            <div className="description">
              <p>
                LE FOYER <br/>POUR LES ETUDIANTS EN MATHEMATIQUES & INFORMATIQUES
              </p>
            </div>
            <div id="description">
              <p>
              Posez des questions, partager des idées, 
              et partageons nos experiences acquis<br />
              Mais vous pouvez trouver des leçons et exercices ici.
              </p>
            </div>
            <div className="recherche">
              <form>
                <Btninput nom='search' type='text' placeholder='Rechercher...' />
                <button id='btnSearch'>
                   <img src={icone} alt="" />
                </button>
              </form>
            </div>
            <div className="fin">
              <p>
                Espace dédié à l'entraide.
              </p>
            </div>
           </div>
         </div>
         <div id='propos'>
          <div id="photodesc">
           <div className="photo">
              <img src={iconeAbout} alt="" />
           </div>
           <div className="description">
              <h1>A propos</h1>
           </div>
          </div>
         </div>
         <div id="contact">
            <div className="contact">

            </div>
            <form action="">

            </form>
         </div>
      </main>
    </>
  );
}
