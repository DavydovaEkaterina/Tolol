import { AsyncThunk } from "@reduxjs/toolkit"; 

import { TProducts, IProduct} from './productType'

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