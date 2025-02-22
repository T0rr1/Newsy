import React from 'react';
import { toast } from '../helpers/toast'

function useForm(initialState, validate, action) {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);

    React.useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                action();
                setValues(initialState);
                setSubmitting(false);
            } else {
                toast(Object.values(errors).join(''));
                setSubmitting(false);
            }
        }
    }, [errors]);
    function handleChange(e) {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    }
    function handleSubmit(e) {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    }
    return {
        handleSubmit, handleChange, values, setValues, isSubmitting
    }
}
export default useForm;