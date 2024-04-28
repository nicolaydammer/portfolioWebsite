import {Link} from "@inertiajs/react";

export default function Navbar() {
    return <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><Link href={'/'} className="nav-link px-2 link-dark">Homepage</Link></li>
        <li><Link href={'/aboutme'} className="nav-link px-2 link-dark">About me</Link></li>
        <li><Link href={'/cv'} className="nav-link px-2 link-dark">Curriculum Vitae</Link></li>
        <li><Link href={'/projects'} className="nav-link px-2 link-dark">Projecten</Link></li>
        <li><Link href={'/contact'} className="nav-link px-2 link-dark">Contact</Link></li>
    </ul>
}
