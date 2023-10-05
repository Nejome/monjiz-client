import {apiSlice} from "./apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        fetchProviders: builder.query({
            query: (params = {}) => ({
                url: `/api/providers`,
                method: "GET",
                params,
            }),
            providesTags: (result) =>
                result
                    ? [...result.data.map(({id}) => ({type: "Providers", id}))]
                    : [{type: "Providers", id: "LIST"}],
        }),
    }),
});

export const {
    useFetchProvidersQuery,
} = extendedApiSlice;
