import {
    ShopAction,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE,
    FetchCollectionsSuccessAction, FetchCollectionsFailureAction
} from "./actions";
import {Shop} from "./shop.data";

export type ShopState = {
    collections?: {[key: string]: Shop} | null;
    isFetching: boolean;
    errorMessage?: undefined;
}

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state: ShopState = INITIAL_STATE, action: ShopAction) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: (action as FetchCollectionsSuccessAction).payload,
            };
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: (action as FetchCollectionsFailureAction).payload,
            };
        default:
            return state;
    }
};

export default shopReducer;