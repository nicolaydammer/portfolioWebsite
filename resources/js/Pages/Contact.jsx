import {useState} from 'react';
import {router, usePage} from "@inertiajs/react";

export default function contact() {

    const {errors} = usePage().props

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        message: "",
        email: "",
        phone_number: "",
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
        router.post('/contact', values)
    }

    return <div>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card authCard shadow-2-strong">
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-4">Contact form</h3>

                            <form id={"contactForm"} onSubmit={handleSubmit}>
                                {errors.firstname && (
                                    <div className="alert alert-danger">{errors.firstname}</div>
                                )}
                                <div className="form-outline mb-3">
                                    <input required={true} type="text" id="firstname" className="form-control"
                                           value={values.firstname} onChange={handleChange} placeholder={"Firstname"}/>
                                </div>

                                {errors.lastname && (
                                    <div className="alert alert-danger">{errors.lastname}</div>
                                )}
                                <div className="form-outline mb-3">
                                    <input required={true} type="text" id="lastname"
                                           className="form-control" value={values.lastname}
                                           onChange={handleChange} placeholder={"Lastname"}/>
                                </div>

                                {errors.message && (
                                    <div className="alert alert-danger">{errors.message}</div>
                                )}
                                <div className="form-outline mb-3">
                                    <textarea required={true} id="message"
                                           className="form-control" value={values.message}
                                           onChange={handleChange} placeholder={"message"}/>
                                </div>

                                {errors.email && (
                                    <div className="alert alert-danger">{errors.email}</div>
                                )}
                                <div className="form-outline mb-3">
                                    <input required={true} type="text" id="email"
                                           className="form-control" value={values.email}
                                           onChange={handleChange} placeholder={"Email"}/>
                                </div>

                                {errors.phone_number && (
                                    <div className="alert alert-danger">{errors.phone_number}</div>
                                )}
                                <div className="form-outline mb-3">
                                    <input required={true} type="tel" id="phone_number"
                                           className="form-control" value={values.phone_number}
                                           onChange={handleChange} placeholder={"Phone number"}/>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block" type="submit">Send</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
