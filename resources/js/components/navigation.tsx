import { Link } from "@inertiajs/react";
function Navigation({accueil,propos,contact,faqs}:{accueil:string,propos:string,contact:string,faqs:string}) {
  const bool : boolean = accueil ==='/#accueil'
  return (
    <div className="navigation">
    {
      bool ? (
     <>
          <li>
            <Link href={accueil}>Accueil</Link>
          </li>
          <li>
            <Link href={propos}>A propos</Link>
          </li>
          <li>
            <Link href={contact}>Contact</Link>
          </li>
          <li>
            <Link href={faqs}>Faqs</Link>
          </li>    
     </>
      ) :
      (
        <>
          <li>
            <a href={accueil}>Accueil</a>
          </li>
          <li>
            <a href={propos}>A propos</a>
          </li>
          <li>
            <a href={contact}>Contact</a>
          </li>
          <li>
            <a href={faqs}>Faqs</a>
          </li>       
        </>
      )
    }
    </div>
  );
}

export default Navigation
