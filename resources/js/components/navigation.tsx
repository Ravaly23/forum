import { Link } from "@inertiajs/react";
function Navigation() {
  return (
    <div className="navigation">
      <li>
        <Link href="#accueil">Accueil</Link>
      </li>
      <li>
        <Link href="#propos">A propos</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
      <li>
        <Link href="#faqs">Faqs</Link>
      </li>
    </div>
  );
}

export default Navigation
