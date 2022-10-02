import {useState} from "react";
import Header from "../components/layout/Header";
import {Formik, Form} from "formik";
import {api} from '../api';
import {loginSchema} from "../schemas";
import Loader from "../components/loader";
import {Input} from "../components/form";
import Alert from "../components/Alert";
import {useNavigate} from "react-router-dom";
import {useAuthValue} from "../context";

export default function Login(){

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const {setAuth} = useAuthValue();

    function submit(values, actions){
        api.post('/api/users/login', values)
            .then((response) => {
                setAuth({token: response.data.data.token});

                navigate('/')
            })
            .catch((error) => {
                actions.setSubmitting(false);

               setError(error.response.data.message)
            });
    }

    return (
        <div className="h-full">
            <Header />

            <main className="w-full">
                <div className="container mx-auto mt-8">
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
                </div>
            </main>
        </div>
    );
}