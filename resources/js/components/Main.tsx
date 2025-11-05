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

              <h2 id='h2'>Equipe d'etudiants spéacialisée dans le  <span> domaine informatiques</span></h2>
              <p>
                Nous sommes un groupe d'étudiants qui a une grande envie d'aidé autrui.
                <br/>En les aidant à trouver des solutions dans leur probleme en informatiques,<br /> les guidant dans chaques étape.
                C'est pour cela que nous avons créer <br />
                ce site pour vous les étudiants en Mathématiques ,Informatiques et Applications.
              </p>
              <h2 className='h2'>Créer par l'équipe <span> 3DEV.</span></h2>
              <div className="icone3dev">

              </div>
           </div>
          </div>
         </div>
         <div id="contact">
          <div id="description">
            <h1>Contactez-nous</h1>
            <p>Si vous voulez contribuer à l'amélioration du site ou autre :</p>
          </div>
          <div className="contactFormulaire">
            <div className="contact">
              <div className="phone">
                <div className="img">

                </div>
                <p>+261  34  61  645  07</p>
              </div>
              <div className="lieu">
                <div className="imgL">

                </div>
                <p>Toamasina 501 Madagascar</p>
              </div>
              <div className="email">
                <div className="imgM">

                </div>
                <p>threedev@gmail.com</p>
              </div>
            </div>
            <form action="">
               <input type="text" id='input' placeholder='Nom et Prenom'/><br />
               <input type="email" id='input' placeholder='Exemple :xxxxxx@gmail.com'/><br />
               <textarea name="" id="area" placeholder='Rediger votre message...'></textarea><br />
               <button id='btn'>Envoyer</button>
            </form>
          </div>
         </div>
      </main>
    </>
  );
}
