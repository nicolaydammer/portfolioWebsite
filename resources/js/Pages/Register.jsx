import {useState} from 'react';
import {router, usePage} from "@inertiajs/react";

export default function register() {

    const [values, setValues] = useState({
        name: "",
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
        router.post('/register', values)
    }

    return <div>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card authCard shadow-2-strong">
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Register</h3>

                            <form onSubmit={handleSubmit}>

                                <div className="form-outline mb-4">
                                    <input type="text" id="name" className="form-control"
                                           value={values.name} onChange={handleChange}/>
                                    <label className="form-label" htmlFor="username">Username</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="email" className="form-control"
                                           value={values.email} onChange={handleChange}/>
                                    <label className="form-label" htmlFor="email">Email</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="password"
                                           className="form-control" value={values.password}
                                           onChange={handleChange}/>
                                    <label className="form-label" htmlFor="password">Password</label>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}
