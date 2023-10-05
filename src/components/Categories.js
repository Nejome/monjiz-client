import {useFetchCategoriesQuery} from "../store/slices/api/categoriesSlice";
import Loader from "./loader"

export default function Categories() {
    const {data: {data: categories}, isLoading} = useFetchCategoriesQuery();

    return (
        <div className="card">
            <div className="px-7 pb-6 pt-4">
                {isLoading &&
                    <div className="flex justify-center items-center h-full">
                        <Loader isGreen={true}/>
                    </div>
                }

                {categories &&
                    <ul>
                        {categories.map((category) => {return (
                            <li key={category.id} className="block mt-3">
                                <button className={`text-gray-500 w-full px-3 py-2 rounded-2xl flex justify-between hover:active`}> {/*${selectedCategory === category.id && `active`}*/}
                                    {category.title}
                                    <span className="bg-green-50 text-green-550 w-[30px] h-[30px] flex justify-center items-center text-sm rounded">{category.services_count}</span>
                                </button>
                            </li>
                        )})}
                    </ul>
                }
            </div>
        </div>
    );
}