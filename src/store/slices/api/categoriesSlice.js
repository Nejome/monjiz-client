import {apiSlice} from "./apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        fetchCategories: builder.query({
            query: (params) => ({
                url: `/api/categories`,
                method: "GET",
                params,
            }),
            providesTags: (result) =>
                result
                    ? [...result.data.map(({id}) => ({type: "Categories", id}))]
                    : [{type: "Categories", id: "LIST"}],
        }),
    }),
});

export const {
    useFetchCategoriesQuery,
} = extendedApiSlice;
