import {useCategoriesValue, useSelectedCategoryValue} from "../context";
import Loader from "./loader"

export default function Categories(){

    const {categories, loading} = useCategoriesValue();
    const {selectedCategory, setSelectedCategory} = useSelectedCategoryValue();

    return (
        <>
            {loading
                ?
                <div className="flex justify-center items-center h-full">
                    <Loader isGreen={true}/>
                </div>
                :
                <div className="card">
                    <div className="px-7 pb-6 pt-4">
                        <ul>
                            <li className="block mt-3">
                                <button onClick={() => setSelectedCategory(null)} className={`text-gray-500 block w-full px-3 py-2 rounded-2xl flex justify-between hover:active ${!selectedCategory && `active`}`}>
                                    الكل
                                </button>
                            </li>
                            {categories.map((category) => {return (
                                <li key={category.id} className="block mt-3">
                                    <button onClick={() => setSelectedCategory(category.id)} className={`text-gray-500 block w-full px-3 py-2 rounded-2xl flex justify-between hover:active ${selectedCategory == category.id && `active`}`}>
                                        {category.title}
                                        <span className="bg-green-50 text-green-550 block w-[30px] h-[30px] flex justify-center items-center text-sm rounded">{category.services_count}</span>
                                    </button>
                                </li>
                            )})}
                        </ul>
                    </div>
                </div>
            }
        </>
    );
}