export default function LoginBar() {
    return <div className="dropdown">
        <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-user"></i>
        </a>

        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/login">Login</a></li>
            <li><a className="dropdown-item" href="/register">Create account</a></li>
        </ul>
    </div>
}
