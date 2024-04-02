
export interface IProduct {
    id: string,
    name: string,
    description: string,
    price: string,
    grade: string,
    selected: string,
    addCount: string
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
