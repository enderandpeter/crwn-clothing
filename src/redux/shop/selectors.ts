import { createSelector } from 'reselect';
import {RootState} from "../root-reducer";
import memoize from 'lodash.memoize';
import {ShopData} from "./shop.data";
import {ShopState} from "./reducer";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop: ShopState) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam: keyof ShopData) =>
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key as keyof ShopData]) : []
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    (shop: ShopState) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    (shop: ShopState) => !!shop.collections
);