import { Shop } from "./shop.data";
import {AnyAction} from "redux";

export const UPDATE_COLLECTIONS: string = 'UPDATE_COLLECTIONS';

export interface UpdateShopAction {
    type: typeof UPDATE_COLLECTIONS;
    payload: Shop[]
}

export type ShopAction = UpdateShopAction | AnyAction;


export const updateCollections = (collectionsMap: {[key: string]: Shop}) => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap,
});