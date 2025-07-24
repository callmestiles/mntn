import { navLinks } from "../constants/nav-links";

function Navbar() {
  return (
    <nav>
      <div className="h-20 flex flex-row items-center justify-between text-white font-gilroy-medium">
        <a href="/" aria-label="homepage">
          <h3 className="font-chronicle text-3xl font-semibold">BTM</h3>
        </a>

        <ul className="flex flex-row items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
