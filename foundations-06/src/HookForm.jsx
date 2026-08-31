import React from "react";
import { useForm } from "react-hook-form";

function HookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({ defaultValues: { name: "Aman" }, mode: "onTouched" });

    function submit(data) {
        return newPromise((res, _) => console.log("Form Submitted", data));
    }

    if (isSubmitSuccessful) {
        return (
            <div>
                <h2>Form Submitted Successfully</h2>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    <input type="text" {...register("name", { required: "Name is Required" })} />
                    {errors.name && <span>{errors.name.message}</span>}
                </label>
                <label>
                    <input type="text" {...register("email", { required: "Email is Required" })} />
                    {errors.email && <span>{errors.email.message}</span>}
                </label>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting...." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default HookForm;
