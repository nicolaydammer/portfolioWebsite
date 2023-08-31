import Navbar from './header/Navbar.jsx'
import SearchBar from './header/SearchBar.jsx'
import Logo from "./Logo.jsx";

export default function Header() {
    return <div>
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Logo src={'img/logo.png'}></Logo>
                    <Navbar></Navbar>
                    <SearchBar></SearchBar>
                </div>
            </div>
        </header>
    </div>
}
