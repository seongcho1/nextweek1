import Link from "next/link";
import { useRouter } from 'next/router';


export default function Navigation() {
  const router = useRouter();
  //console.log('router.pathname', router.pathname);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">

        <Link href="/">
          <a className="navbar-brand" href="#">Caffe Next.js</a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link ${router.pathname === '/' ? 'active' : ''}`} aria-current="page">
                  Home
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about">
                <a className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`} aria-current="page">
                  About
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/order">
                <a className={`nav-link ${router.pathname === '/order' ? 'active' : ''}`} aria-current=" page">
                  Order
                </a>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav >
  );
}