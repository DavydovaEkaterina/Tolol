export interface ICart {
    id: string,
    name: string,
    price: string,
    addCount: string
}

export type TCart = ICart[] | [];

export interface IStore {
    cart: TCart,
}

export interface IStore {
    cart: TCart,
}

export type IStateStore = {
    cart: IStore
}

export interface IChangeAction {
    id: string, 
    name: string,
    price: string, 
    addCount: "1"
}