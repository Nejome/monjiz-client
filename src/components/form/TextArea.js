import {useField, ErrorMessage} from "formik";
import PropTypes from 'prop-types';

export default function TextArea({label, ...props}){

    const [field] = useField(props);

    return (
        <>
            <label className="block text-gray-500">{label}</label>
            <textarea {...field} {...props} style={{minHeight: 80+'px'}} className="input mt-1" />
            <ErrorMessage name={props.name}>{msg => <p className="text-red-500">{msg}</p>}</ErrorMessage>
        </>
    )
}

TextArea.prototype = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}