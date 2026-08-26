import React, { useState } from "react";

const ManualForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
    });

    const [errors, SetErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function set(field) {
        return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
    }

    function validate(v) {
        const e = {};
        if (!v.name.trim()) e.name = "Name is required";
        if (!v.email.trim()) e.email = "Email is required";

        return e;
    }

    function submit(ev) {
        ev.preventDefault();
        const e = validate(values);
        SetErrors(e);
        if (Object.keys(e).length !== 0) {
            return;
        } else {
            setSubmitted(true);
        }
    }

    if (submitted) {
        return (
            <div>
                <h1>Form submitted successully {values.name}</h1>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={submit} noValidate>
                <label>
                    Full Name
                    <input required value={values.name} onChange={set("name")} />
                    {errors.name && <span>{errors.name}</span>}
                </label>
                <label>
                    Email
                    <input value={values.email} onChange={set("email")} />
                    {errors.email && <span>{errors.email}</span>}
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ManualForm;
