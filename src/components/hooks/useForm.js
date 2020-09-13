
import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const submitHandler = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(values));
    }
    const changeHandler = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }



    return {
        values,
        errors,
        submitHandler,
        changeHandler
    }

}

export default useForm
