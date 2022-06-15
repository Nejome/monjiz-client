import {useField, ErrorMessage} from "formik";

export default function Select({label, ...props}){

    const [field] = useField(props);

    return (
        <>
            <label className="block text-gray-500">{label}</label>
            <select {...field} {...props} className="input mt-1" />
            <ErrorMessage name={props.name}>{msg => <p className="text-red-500">{msg}</p>}</ErrorMessage>
        </>
    )
}