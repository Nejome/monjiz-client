import Provider from "../components/Provider";
import Loader from "./loader";
import {useFetchProvidersQuery} from "../store/slices/api/providersSlice";
import { Link, useSearchParams } from "react-router-dom";

export default function Providers() {
    const [searchParams] = useSearchParams();
    const {data: providers, isLoading } = useFetchProvidersQuery({category_id: 1}); //Object.fromEntries([...searchParams])

    return (
        <>
            {isLoading &&
                <div className="flex justify-center items-center h-full">
                    <Loader isGreen={true}/>
                </div>
            }

            <div className="flex items-center gap-2">
                <h3 className="text-2xl text-gray-800">مقدمي الخدمات</h3>

                <Link to="/" className="text-[12px] text-green-550 underline">عرض الكل</Link>
            </div>

            {providers.data.length > 0 &&
                <div className="flex flex-wrap">
                    {providers.data.map((provider) => <Provider key={provider.id} provider={provider} />)}
                </div>
            }
        </>
    );
}