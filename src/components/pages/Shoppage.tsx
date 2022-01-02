import React from 'react';
import CollectionsOverviewContainer from "../CollectionsOverview/container";
import CollectionPageContainer from "./Collection/container";
import { Route, RouteComponentProps } from 'react-router-dom';

import { connect, ConnectedProps } from "react-redux";

import {Action} from "redux";
import {fetchCollectionsStartAsync} from "../../redux/shop/actions";
import {ThunkDispatch} from "redux-thunk";
import {ShopState} from "../../redux/shop/reducer";

type PropsFromRedux = ConnectedProps<typeof connector>
type ShopPageProps = {
    isCollectionLoaded: any
}
type AppProps = PropsFromRedux & RouteComponentProps & ShopPageProps;

class Shoppage extends React.Component<AppProps> {
    state = {
     loading: true
    };
    unsubscribeFromSnapshot: any = null;
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }
    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} commponent={CollectionsOverviewContainer} />
                <Route
                    path={`${match.path}/:collectionId`}
                    // @ts-ignore
                    component={CollectionPageContainer}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ShopState, void, Action>) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

const connector = connect(null, mapDispatchToProps);

export default connector(Shoppage);