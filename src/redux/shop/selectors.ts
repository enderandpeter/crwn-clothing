import { createSelector } from 'reselect';
import {RootState} from "../root-reducer";
import memoize from 'lodash.memoize';
import {ShopData} from "./shop.data";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = memoize((collectionUrlParam: keyof ShopData) =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key as keyof ShopData])
);
