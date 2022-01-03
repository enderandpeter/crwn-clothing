import { takeLatest, call, all, put } from 'redux-saga/effects';
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from "./actions";

import {FETCH_COLLECTIONS_START} from "./actions";

export function* fetchCollectionsAsync(){
    yield console.log('This girl is on fire');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
    // dispatch(fetchCollectionsStart());
    //
    // collectionRef
    //     .get()
    //     .then(snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         dispatch(fetchCollectionsSuccess(collectionsMap));
    //     })
    //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}