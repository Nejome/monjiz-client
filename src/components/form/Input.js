import {useField, ErrorMessage} from "formik";
import PropTypes from 'prop-types';

export default function Input({label, ...props}) {

    const [field] = useField(props);

    return (
        <>
            <label className="block text-gray-500">{label}</label>
            <input {...field} {...props} className="input mt-1"/>
            <ErrorMessage name={props.name}>{msg => <p className="text-red-500">{msg}</p>}</ErrorMessage>
        </>
    );
}

Input.prototype = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}