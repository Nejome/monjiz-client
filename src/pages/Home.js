import Header from "../components/layout/Header";
import Categories from "../components/Categories";
import Providers from "../components/Providers"

export default function Home(){

    return (
        <div className="h-full">
            <Header />

            <div className="container mx-auto mt-8">
                <div className="flex flex-col lg:flex-row gap-2">
                    <aside className="w-full lg:w-3/12 mt-4 px-5 lg:p-0">
                        <Categories />
                    </aside>

                    <main className="w-full lg:w-9/12 pl-1 pr-5 lg:px-5 pb-5">
                        <Providers />
                    </main>
                </div>
            </div>
        </div>
    );
}