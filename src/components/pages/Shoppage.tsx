import React, {useEffect} from 'react';
import CollectionsOverviewContainer from "../CollectionsOverview/container";
import CollectionPageContainer from "./Collection/container";
import { Route, RouteComponentProps } from 'react-router-dom';

import { connect, ConnectedProps } from "react-redux";

import {Dispatch} from "redux";
import {fetchCollectionsStart} from "../../redux/shop/actions";

type PropsFromRedux = ConnectedProps<typeof connector>
type ShopPageProps = {
    isCollectionLoaded: any
}
type AppProps = PropsFromRedux & RouteComponentProps & ShopPageProps;

const Shoppage = ({fetchCollectionsStart, match}: AppProps) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])
        return (
            <div className='shop-page'>
                <Route
                    exact
                    // @ts-ignore
                    path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route
                    // @ts-ignore
                   path={`${match.path}/:collectionId`} component={CollectionPageContainer}
                />
            </div>
        );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const connector = connect(null, mapDispatchToProps);

export default connector(Shoppage);