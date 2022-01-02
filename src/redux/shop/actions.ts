import { Shop } from "./shop.data";
import {AnyAction, Dispatch} from "redux";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

export const FETCH_COLLECTIONS_START: string = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS: string = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE: string = 'FETCH_COLLECTIONS_FAILURE';

export interface FetchCollectionsStartAction {
    type: typeof FETCH_COLLECTIONS_START;
}

export interface FetchCollectionsSuccessAction {
    type: typeof FETCH_COLLECTIONS_SUCCESS;
    payload: Shop[];
}

export interface FetchCollectionsFailureAction {
    type: typeof FETCH_COLLECTIONS_FAILURE;
    payload: string;
}

export type ShopAction = FetchCollectionsStartAction | FetchCollectionsSuccessAction | FetchCollectionsFailureAction | AnyAction;

export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: { [key: string]: Shop }) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage: string) => ({
    type: FETCH_COLLECTIONS_START,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch: Dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};