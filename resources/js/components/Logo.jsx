export default function Logo({src}) {
    return <a href={"/"} className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
        <img className="bi me-2" id="logo" src={src}  alt="logo of the site"/>
    </a>
}
