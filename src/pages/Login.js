import Header from "../components/layout/Header";

export default function Login(){
    return (
        <div className="h-full">
            <Header />

            <main className="w-full">
                <div className="container mx-auto mt-8">
                    <div className="w-11/12 lg:w-5/12 mx-auto">
                        <div className="card px-5 py-5">
                            <h1 className="text-center mt-5 text-gray-500 text-3xl">تسجيل الدخول</h1>
                            <form className="mt-10 px-2 lg:px-10">
                                <div className="mb-5">
                                    <label className="block text-gray-500">البريد الإلكتروني</label>
                                    <input type="email" className="block w-full mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500"/>
                                </div>

                                <div className="mb-5">
                                    <label className="block text-gray-500">كلمة المرور</label>
                                    <input type="password" className="block w-full mt-3 px-3 py-2 border border-solid rounded focus:shadow focus:outline-none text-gray-500"/>
                                </div>

                                <div className="text-center pt-3">
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