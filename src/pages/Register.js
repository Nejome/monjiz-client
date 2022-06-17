import {useState} from "react";
import Header from "../components/layout/Header";
import {useCategoriesValue} from "../context";
import { Formik, Form } from 'formik';
import {registerSchema} from '../schemas';
import {Input, Select, TextArea, File} from '../components/form';
import Loader from '../components/loader'
import {api} from "../api";
import Alert from '../components/Alert';

export default function Register(){
    const {categories} = useCategoriesValue();
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    function submit(values, actions){
        var form = new FormData();
        for(const [key, value] of Object.entries(values)) {
            form.append(key, value)
        }

        api.post('/api/providers/register', form, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((response) => {
                setSuccess(response.data.message);

                actions.resetForm();
            })
            .catch((error) => {
                actions.setSubmitting(false)

                if(error.response.status === 422){
                    for(const [key, value] of Object.entries(error.response.data.errors)) {
                        actions.setFieldError(key, value)
                    }
                }else{
                    setError('عفواً حدث خطأ خلال التسجيل نرجو المحاولة لاحقاً')
                }
            })
    }

    return (
        <div className="h-full">
            <Header />

            <main className="w-full">
                <div className="container mx-auto mt-8">
                    <div className="w-11/12 lg:w-8/12 mx-auto lg:mb-10">
                        <div className="card px-5 py-5">
                            <h1 className="text-center  text-gray-500 text-3xl">انشاء حساب</h1>
                            <Formik
                                initialValues={{name: '', email: '', category_id: '', title: '', country: '', image: '', description: '', password: ''}}
                                validationSchema={registerSchema}
                                onSubmit={submit}
                                >
                                {({isSubmitting}) => (
                                    <Form className="mt-5 px-2 lg:px-10">
                                        {success && <Alert type="success" message={success} />}
                                        {error && <Alert type="danger" message={error} />}
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 lg:col-span-3 mb-1">
                                                <Input label="الإسم" name="name" type="text"/>
                                            </div>

                                            <div className="col-span-6 lg:col-span-3 mb-1">
                                                <Input label="البريد الإلكتروني" name="email" type="email"/>
                                            </div>

                                            <div className="col-span-6 lg:col-span-3 mb-1">
                                                <Input label="كلمة المرور" name="password" type="password"/>
                                            </div>

                                            <div className="col-span-6 lg:col-span-3 mb-1">
                                                <Input label="تأكيد كلمة المرور" name="password_confirmation" type="password"/>
                                            </div>

                                            <div className="col-span-6 lg:col-span-3 mb-1">
                                                <Select label="القسم" name="category_id">
                                                    <option></option>
                                                    {categories.map((category) => (
                                                        <option key={category.id} value={category.id}>{category.title}</option>
                                                    ))}
                                                </Select>
                                            </div>

                                            <div className="col-span-6 lg:col-span-3 mb-1">
                                                <Input label="عنوان الخدمة" name="title" type="text"/>
                                            </div>

                                            <div className="col-span-6 lg:col-span-3 mb-1">
                                                <Input label="الدولة" name="country" type="text"/>
                                            </div>

                                            <div className="col-span-6 lg:col-span-3 mb-1">
                                                <File label="الصورة الشخصية" type="file" name="image" />
                                            </div>

                                            <div className="col-span-6 mb-1">
                                                <TextArea label="الوصف" name="description"/>
                                            </div>

                                        </div>

                                        <div className="mt-5">
                                            <button type="submit" className="btn1 min-w-[135px] flex items-center justify-center mx-auto" disabled={isSubmitting}>
                                                {isSubmitting ? <Loader w="25px" h="25px" /> :'تسجيل'}
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