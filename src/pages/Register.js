import Header from "../components/layout/Header";

export default function Register(){
    return (
        <div className="h-full">
            <Header />

            <main className="w-full">
                <div className="container mx-auto mt-8">
                    <div className="w-11/12 lg:w-8/12 mx-auto">
                        <div className="card px-5 py-5">
                            <h1 className="text-center mt-5 text-gray-500 text-3xl">انشاء حساب</h1>
                            <form className="mt-10 px-2 lg:px-10">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 lg:col-span-3 mb-2">
                                        <label className="block text-gray-500">الإسم</label>
                                        <input type="text" className="block w-full h-[43px] mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500"/>
                                    </div>

                                    <div className="col-span-6 lg:col-span-3 mb-2">
                                        <label className="block text-gray-500">البريد الإلكتروني</label>
                                        <input type="email" className="block w-full h-[43px] mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500"/>
                                    </div>

                                    <div className="col-span-6 lg:col-span-3 mb-2">
                                        <label className="block text-gray-500">القسم</label>
                                        <select className="block w-full h-[43px] mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500">
                                            <option>البرمجة والتطوير</option>
                                            <option>التصميم</option>
                                            <option>التسويق الإلكتروني</option>
                                            <option>الكتابة والترجمة</option>
                                            <option>كتابة المحتوي</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 lg:col-span-3 mb-2">
                                        <label className="block text-gray-500">عنوان الخدمة</label>
                                        <input type="text" className="block w-full h-[43px] mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500"/>
                                    </div>

                                    <div className="col-span-6 lg:col-span-3 mb-2">
                                        <label className="block text-gray-500">الدولة</label>
                                        <input type="text" className="block w-full h-[43px] mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500"/>
                                    </div>

                                    <div className="col-span-6 lg:col-span-3 mb-2">
                                        <label className="block text-gray-500">الصورة الشخصية</label>
                                        <input type="file" className="block w-full h-[43px] mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500"/>
                                    </div>

                                    <div className="col-span-6 lg:col-span-3 mb-2">
                                        <label className="block text-gray-500">كلمة المرور</label>
                                        <input type="password" className="block w-full h-[43px] mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500"/>
                                    </div>

                                    <div className="col-span-6 lg:col-span-3 mb-2">
                                        <label className="block text-gray-500">تأكيد كلمة المرور</label>
                                        <input type="password" className="block w-full h-[43px] mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500"/>
                                    </div>
                                </div>

                                <div className="text-center mt-10">
                                    <button type="submit" className="btn1">تسجيل الدخول</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}