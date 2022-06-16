import {Suspense, lazy} from "react";
import Header from "../components/layout/Header";
import Loader from '../components/loader';

const Categories = lazy(() => import('../components/Categories'))
const Providers = lazy(() => import('../components/Providers'))

export default function Home(){

    return (
        <div className="h-full">
            <Header />

            <Suspense fallback={<div className="w-full flex justify-center pt-44"><Loader isGreen={true}/></div>}>
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
            </Suspense>
        </div>
    );
}