import Header from "../components/layout/Header";

export default function Home(){
    return (
        <div className="h-full">

            <Header />

            <div className="container mx-auto mt-8">
                <div className="flex flex-col lg:flex-row gap-2">
                    <aside className="w-full lg:w-3/12 mt-4 px-5 lg:p-0">
                      <div className="card">
                          <div className="px-7 pb-6 pt-4">
                              <ul>
                                  <li className="block mt-3">
                                      <a href="#" className="text-gray-500 block px-3 py-2 rounded-2xl flex justify-between hover:active active">
                                          الكل
                                          <span className="bg-green-50 text-green-550 block px-1 py-1 text-sm rounded">50</span>
                                      </a>
                                  </li>
                                  <li className="block mt-3">
                                      <a href="#" className="text-gray-500 block px-3 py-2 rounded-2xl flex justify-between hover:active">
                                          البرمجة والتطوير
                                          <span className="bg-green-50 text-green-550 block px-1 py-1 text-sm rounded">10</span>
                                      </a>
                                  </li>
                                  <li className="block mt-3">
                                      <a href="#" className="text-gray-500 block px-3 py-2 rounded-2xl flex justify-between hover:active">
                                          التصميم
                                          <span className="bg-green-50 text-green-550 block px-1 py-1 text-sm rounded">10</span>
                                      </a>
                                  </li>
                                  <li className="block mt-3">
                                      <a href="#" className="text-gray-500 block px-3 py-2 rounded-2xl flex justify-between hover:active">
                                          التسويق الإلكتروني
                                          <span className="bg-green-50 text-green-550 block px-1 py-1 text-sm rounded">10</span>
                                      </a>
                                  </li>
                                  <li className="block mt-3">
                                      <a href="#" className="text-gray-500 block px-3 py-2 rounded-2xl flex justify-between hover:active">
                                          الكتابة والترجمة
                                          <span className="bg-green-50 text-green-550 block px-1 py-1 text-sm rounded">10</span>
                                      </a>
                                  </li>
                                  <li className="block mt-3">
                                      <a href="#" className="text-gray-500 block px-3 py-2 rounded-2xl flex justify-between hover:active">
                                          كتابة المحتوي
                                          <span className="bg-green-50 text-green-550 block px-1 py-1 text-sm rounded">10</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                    </aside>
                    <main className="w-full lg:w-9/12 pl-1 pr-5 lg:px-5 pb-5">
                        <div className="flex flex-wrap">
                            <div className="w-6/12 lg:w-4/12 mt-4 pl-4">
                                <div className="card">
                                    <div className="px-4 py-4">
                                        <div className="flex justify-start">
                                            <figure className="ml-3">
                                                <img className="w-[70px] height-[70px] rounded-full" src="https://www.upwork.com/profile-portraits/c1XxK-DjSVxsNRZf101uww7GuGwEogu4Fup7L7qXp1jA5JDfjZaFlxEzuIGthxq1o_" />
                                            </figure>
                                            <div className="flex flex-col">
                                                <h1 className="text-green-550">علي عمر</h1>
                                                <p className="text-sm">البرمجة والتطوير</p>
                                                <p className="text-xs">السودان</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 pr-5">
                                            <h1>انشاء وتصميم المواقع الإلكترونية</h1>
                                        </div>
                                        <div className="text-right mt-5">
                                            <a href="#" className="btn1 py-1 px-4 text-sm">عرض المزيد</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 lg:w-4/12 mt-4 pl-4">
                                <div className="card">
                                    <div className="px-4 py-4">
                                        <div className="flex justify-start">
                                            <figure className="ml-3">
                                                <img className="w-[70px] height-[70px] rounded-full" src="https://www.upwork.com/profile-portraits/c1XxK-DjSVxsNRZf101uww7GuGwEogu4Fup7L7qXp1jA5JDfjZaFlxEzuIGthxq1o_" />
                                            </figure>
                                            <div className="flex flex-col">
                                                <h1 className="text-green-550">علي عمر</h1>
                                                <p className="text-sm">البرمجة والتطوير</p>
                                                <p className="text-xs">السودان</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 pr-5">
                                            <h1>انشاء وتصميم المواقع الإلكترونية</h1>
                                        </div>
                                        <div className="text-right mt-5">
                                            <a href="#" className="btn1 py-1 px-4 text-sm">عرض المزيد</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 lg:w-4/12 mt-4 pl-4">
                                <div className="card">
                                    <div className="px-4 py-4">
                                        <div className="flex justify-start">
                                            <figure className="ml-3">
                                                <img className="w-[70px] height-[70px] rounded-full" src="https://www.upwork.com/profile-portraits/c1XxK-DjSVxsNRZf101uww7GuGwEogu4Fup7L7qXp1jA5JDfjZaFlxEzuIGthxq1o_" />
                                            </figure>
                                            <div className="flex flex-col">
                                                <h1 className="text-green-550">علي عمر</h1>
                                                <p className="text-sm">البرمجة والتطوير</p>
                                                <p className="text-xs">السودان</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 pr-5">
                                            <h1>انشاء وتصميم المواقع الإلكترونية</h1>
                                        </div>
                                        <div className="text-right mt-5">
                                            <a href="#" className="btn1 py-1 px-4 text-sm">عرض المزيد</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 lg:w-4/12 mt-4 pl-4">
                                <div className="card">
                                    <div className="px-4 py-4">
                                        <div className="flex justify-start">
                                            <figure className="ml-3">
                                                <img className="w-[70px] height-[70px] rounded-full" src="https://www.upwork.com/profile-portraits/c1XxK-DjSVxsNRZf101uww7GuGwEogu4Fup7L7qXp1jA5JDfjZaFlxEzuIGthxq1o_" />
                                            </figure>
                                            <div className="flex flex-col">
                                                <h1 className="text-green-550">علي عمر</h1>
                                                <p className="text-sm">البرمجة والتطوير</p>
                                                <p className="text-xs">السودان</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 pr-5">
                                            <h1>انشاء وتصميم المواقع الإلكترونية</h1>
                                        </div>
                                        <div className="text-right mt-5">
                                            <a href="#" className="btn1 py-1 px-4 text-sm">عرض المزيد</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 lg:w-4/12 mt-4 pl-4">
                                <div className="card">
                                    <div className="px-4 py-4">
                                        <div className="flex justify-start">
                                            <figure className="ml-3">
                                                <img className="w-[70px] height-[70px] rounded-full" src="https://www.upwork.com/profile-portraits/c1XxK-DjSVxsNRZf101uww7GuGwEogu4Fup7L7qXp1jA5JDfjZaFlxEzuIGthxq1o_" />
                                            </figure>
                                            <div className="flex flex-col">
                                                <h1 className="text-green-550">علي عمر</h1>
                                                <p className="text-sm">البرمجة والتطوير</p>
                                                <p className="text-xs">السودان</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 pr-5">
                                            <h1>انشاء وتصميم المواقع الإلكترونية</h1>
                                        </div>
                                        <div className="text-right mt-5">
                                            <a href="#" className="btn1 py-1 px-4 text-sm">عرض المزيد</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 lg:w-4/12 mt-4 pl-4">
                                <div className="card">
                                    <div className="px-4 py-4">
                                        <div className="flex justify-start">
                                            <figure className="ml-3">
                                                <img className="w-[70px] height-[70px] rounded-full" src="https://www.upwork.com/profile-portraits/c1XxK-DjSVxsNRZf101uww7GuGwEogu4Fup7L7qXp1jA5JDfjZaFlxEzuIGthxq1o_" />
                                            </figure>
                                            <div className="flex flex-col">
                                                <h1 className="text-green-550">علي عمر</h1>
                                                <p className="text-sm">البرمجة والتطوير</p>
                                                <p className="text-xs">السودان</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 pr-5">
                                            <h1>انشاء وتصميم المواقع الإلكترونية</h1>
                                        </div>
                                        <div className="text-right mt-5">
                                            <a href="#" className="btn1 py-1 px-4 text-sm">عرض المزيد</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 lg:w-4/12 mt-4 pl-4">
                                <div className="card">
                                    <div className="px-4 py-4">
                                        <div className="flex justify-start">
                                            <figure className="ml-3">
                                                <img className="w-[70px] height-[70px] rounded-full" src="https://www.upwork.com/profile-portraits/c1XxK-DjSVxsNRZf101uww7GuGwEogu4Fup7L7qXp1jA5JDfjZaFlxEzuIGthxq1o_" />
                                            </figure>
                                            <div className="flex flex-col">
                                                <h1 className="text-green-550">علي عمر</h1>
                                                <p className="text-sm">البرمجة والتطوير</p>
                                                <p className="text-xs">السودان</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 pr-5">
                                            <h1>انشاء وتصميم المواقع الإلكترونية</h1>
                                        </div>
                                        <div className="text-right mt-5">
                                            <a href="#" className="btn1 py-1 px-4 text-sm">عرض المزيد</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 lg:w-4/12 mt-4 pl-4">
                                <div className="card">
                                    <div className="px-4 py-4">
                                        <div className="flex justify-start">
                                            <figure className="ml-3">
                                                <img className="w-[70px] height-[70px] rounded-full" src="https://www.upwork.com/profile-portraits/c1XxK-DjSVxsNRZf101uww7GuGwEogu4Fup7L7qXp1jA5JDfjZaFlxEzuIGthxq1o_" />
                                            </figure>
                                            <div className="flex flex-col">
                                                <h1 className="text-green-550">علي عمر</h1>
                                                <p className="text-sm">البرمجة والتطوير</p>
                                                <p className="text-xs">السودان</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 pr-5">
                                            <h1>انشاء وتصميم المواقع الإلكترونية</h1>
                                        </div>
                                        <div className="text-right mt-5">
                                            <a href="#" className="btn1 py-1 px-4 text-sm">عرض المزيد</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 lg:w-4/12 mt-4 pl-4">
                                <div className="card">
                                    <div className="px-4 py-4">
                                        <div className="flex justify-start">
                                            <figure className="ml-3">
                                                <img className="w-[70px] height-[70px] rounded-full" src="https://www.upwork.com/profile-portraits/c1XxK-DjSVxsNRZf101uww7GuGwEogu4Fup7L7qXp1jA5JDfjZaFlxEzuIGthxq1o_" />
                                            </figure>
                                            <div className="flex flex-col">
                                                <h1 className="text-green-550">علي عمر</h1>
                                                <p className="text-sm">البرمجة والتطوير</p>
                                                <p className="text-xs">السودان</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 pr-5">
                                            <h1>انشاء وتصميم المواقع الإلكترونية</h1>
                                        </div>
                                        <div className="text-right mt-5">
                                            <a href="#" className="btn1 py-1 px-4 text-sm">عرض المزيد</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </div>
    );
}