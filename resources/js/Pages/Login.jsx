import {useState} from 'react';
import {router, usePage} from "@inertiajs/react";

export default function login({user}) {

    const {errors} = usePage().props

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value

        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/login', values)
    }

    return <div>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card authCard shadow-2-strong">
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Sign in</h3>

                            {/* todo: improve */}
                            {errors[0] && (
                                <div className="alert alert-danger">{errors[0]}</div>
                            )}

                            <form id={"loginForm"} onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <input type="email" id="email" className="form-control form-control-lg"
                                           value={values.email} onChange={handleChange}/>
                                    <label className="form-label" htmlFor="email">Email</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="password"
                                           className="form-control form-control-lg" value={values.password}
                                           onChange={handleChange}/>
                                    <label className="form-label" htmlFor="password">Password</label>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
