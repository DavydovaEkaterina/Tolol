import { AsyncThunk } from "@reduxjs/toolkit"; 

export interface IProduct {
    id: string,
    name: string,
    description: string,
    price: string,
    grade: string
}

export type TProducts = IProduct[] | [];

export interface IStore {
    products: TProducts,
    productsLoadingStatus: string,
    totalProducts: number
}

export type IStateStore = {
    products: IStore
}


export interface IFetch {
    url: string;
    method: 'GET' | 'POST' | 'DELETE';
    body: [] | null;
    headers: {
        'Content-type': string
    }
}

export type TRequest = (url: string, method?: string, body?: null, headers?: {
    'Content-type': string;
}) => Promise<TProducts>

type AsyncThunkConfig = {
    state?: IProduct
}

export type TFetchProduct = AsyncThunk<IProduct[] | [], void, AsyncThunkConfig>;