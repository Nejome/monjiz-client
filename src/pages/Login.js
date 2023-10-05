import { useState } from "react";
import { Formik, Form } from "formik";
import { loginSchema } from "../schemas";
import Loader from "../components/loader";
import { Input } from "../components/form";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios, {setAuthToken} from "../lib/axios";
import Layout from "../components/layout/Layout";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    function submit(values, actions) {
        axios.post('/api/users/login', values)
            .then((response) => {
                dispatch({type: 'auth/login', payload: response.data});

                setAuthToken(response.data.token);

                navigate('/');
            })
            .catch((error) => {
                actions.setSubmitting(false);

               setError(error.response.data);
            });
    }

    return (
        <Layout>
            <div className="w-11/12 lg:w-5/12 mx-auto">
                <div className="card px-5 py-5">
                    <h1 className="text-center mt-5 text-gray-500 text-3xl">تسجيل الدخول</h1>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={loginSchema}
                        onSubmit={submit}
                    >
                        {({isSubmitting}) => (
                            <Form className="mt-10 px-2 lg:px-10">
                                {error && <Alert type="danger" message={error}/>}
                                <div className="mb-5">
                                    <Input label="البريد الإلكتروني" name="email" type="text"/>
                                </div>

                                <div className="mb-5">
                                    <Input label="كلمة المرور" name="password" type="password"/>
                                </div>

                                <div className="text-center pt-3">
                                    <button type="submit" className="btn1 min-w-[135px] flex items-center justify-center mx-auto" disabled={isSubmitting}>
                                        {isSubmitting ? <Loader w="25px" h="25px" /> :'تسجيل الدخول'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Layout>
    );
}