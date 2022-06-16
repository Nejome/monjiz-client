import Header from "../components/layout/Header";
import {useState, Suspense} from "react";
import {Form, Formik} from "formik";
import {editProfileSchema} from "../schemas";
import Alert from "../components/Alert";
import {File, Input, Select, TextArea} from "../components/form";
import Loader from "../components/loader";
import {useCategoriesValue, useAuthValue, useProvidersValue} from "../context";
import {api} from "../api";
import {useGetProfile} from "../hooks";

export default function Profile(){
    const {categories} = useCategoriesValue();
    const {profile} = useGetProfile();
    const {auth} = useAuthValue();
    const {providers, setProviders} = useProvidersValue();
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    function submit(values, actions){
        var form = new FormData();
        for(const [key, value] of Object.entries(values)) {
            if(value !== ''){
                form.append(key, value)
            }
        }

        api.post('/api/providers/profile', form, {headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${auth.token}`}})
            .then((response) => {
                setSuccess(response.data.message);

                let updatedProviders = providers.map((provider) => {
                    if(provider.id === profile.id){
                        return response.data.data.provider;
                    }

                    return provider;
                })

                setProviders(updatedProviders)

                actions.resetForm();
            })
            .catch((error) => {
                actions.setSubmitting(false)

                if(error.response.status === 422){
                    for(const [key, value] of Object.entries(error.response.data.errors)) {
                        actions.setFieldError(key, value)
                    }
                }else{
                    setError('عفواً حدث خلال تعديل البيانات نرجو المحاولة لاحقاً')
                }
            })
    }

    return (
        <div>
            <Header />

            <Suspense fallback={<div className="w-full flex justify-center pt-44"><Loader isGreen={true}/></div>}>
                {profile &&
                    <main className="w-full">
                        <div className="container mx-auto mt-8">
                            <div className="w-11/12 lg:w-8/12 mx-auto lg:mb-10">
                                <div className="card px-5 py-5">
                                    <h1 className="text-center  text-gray-500 text-3xl">تعديل بيانات حسابي</h1>
                                    <Formik
                                        initialValues={{
                                            name: profile.user.name,
                                            email: profile.user.email,
                                            category_id: profile.category_id,
                                            title: profile.title,
                                            country: profile.country,
                                            description: profile.description,
                                            password: '',
                                            image: '', }}
                                        validationSchema={editProfileSchema}
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
                                                        <File label="الصورة الشخصية الجديدة (اختياري)" type="file" name="image" />
                                                    </div>

                                                    <div className="col-span-6  mb-1">
                                                        <TextArea label="الوصف" name="description"/>
                                                    </div>

                                                    <div className="col-span-6 lg:col-span-3 mb-1"></div>

                                                    <div className="col-span-6 mb-1"><hr /></div>

                                                    <div className="col-span-6 lg:col-span-3 mb-1">
                                                        <Input label="كلمة المرور الجديدة (اختياري)" name="password" type="password"/>
                                                    </div>

                                                    <div className="col-span-6 lg:col-span-3 mb-1">
                                                        <Input label="تأكيد كلمة المرور (اختياري)" name="password_confirmation" type="password"/>
                                                    </div>

                                                </div>

                                                <div className="mt-5">
                                                    <button type="submit" className="btn1 min-w-[135px] flex items-center justify-center mx-auto" disabled={isSubmitting}>
                                                        {isSubmitting ? <Loader w="25px" h="25px" /> :'تعديل'}
                                                    </button>
                                                </div>

                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </main>
                }
            </Suspense>
        </div>
    );
}