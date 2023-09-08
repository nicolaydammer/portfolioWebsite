import Logo from "./Logo.jsx";

export default function Footer() {
    return <div id={"footer"} className=" fixed-bottom border-top">
        <footer className="container d-flex flex-wrap justify-content-between align-items-center">
            <div className="col-md-4 d-flex align-items-center">
                <Logo src={"img/logo.png"}></Logo>
                <span className="text-muted">© 2023 nmdammer.com</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-muted" target="_blank"
                       href="https://www.linkedin.com/in/nicolay-dammer-aaba09160/">
                        <i className="fa-brands fa-linkedin fa-lg bi"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" target="_blank" href="https://www.facebook.com/nicolay.dammer/">
                        <i className="fa-brands fa-facebook fa-lg bi"></i>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
}
