import Provider from "../components/Provider";
import {useProvidersValue} from "../context"

export default function Providers(){
    const {providers} = useProvidersValue();

    return (
        <div className="flex flex-wrap">
            {providers.map((provider) => {return (
                <div key={provider.id} className="w-full sm:w-6/12 xl:w-4/12 mt-4 pl-4">
                    <Provider provider={provider} />
                </div>
            )})}
        </div>
    );
}