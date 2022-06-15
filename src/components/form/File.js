import {ErrorMessage, useFormikContext} from "formik";

export default function File({label, ...props}) {

    const {name, ...rest} = props;
    const { setFieldValue } = useFormikContext()

    return (
        <>
            <label className="block text-gray-500">{label}</label>
            <input {...rest} className="input mt-1" onChange={(event) => {
                setFieldValue(name, event.target.files[0])
            }}/>
            <ErrorMessage name={name}>{msg => <p className="text-red-500">{msg}</p>}</ErrorMessage>
        </>
    );
}