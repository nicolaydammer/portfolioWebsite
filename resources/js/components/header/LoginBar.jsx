import {router, usePage} from "@inertiajs/react";

export default function LoginBar() {

    const { auth } = usePage().props

    function logout(e) {
        e.preventDefault()
        router.post('/logout')
    }

    if (auth.user) {
        return <div className="dropdown">
            <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i>
            </a>

            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                <li><a className="dropdown-item" href="#" onClick={logout}>Logout</a></li>
            </ul>
        </div>
    }


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
