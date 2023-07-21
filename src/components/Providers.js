import Provider from "../components/Provider";
import {useProvidersValue} from "../context"
import Loader from "./loader";

export default function Providers(){
    const {providers, loading} = useProvidersValue();

    return (
        <>
            {loading &&
                <div className="flex justify-center items-center h-full">
                    <Loader isGreen={true}/>
                </div>
            }

            {providers.length > 0 &&
                <div className="flex flex-wrap">
                    {providers.map((provider) => {return (
                        <div key={provider.id} className="w-full sm:w-6/12 xl:w-4/12 mt-4 pl-4">
                            <Provider provider={provider} />
                        </div>
                    )})}
                </div>
            }
        </>
    );
}