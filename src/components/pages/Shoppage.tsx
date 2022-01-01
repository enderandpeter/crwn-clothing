import React from 'react';
import CollectionsOverview from "../CollectionsOverview";
import { Route, RouteComponentProps } from 'react-router-dom';
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { connect, ConnectedProps } from "react-redux";

import CollectionPage from "./Collection";
import {Dispatch} from "redux";
import {updateCollections} from "../../redux/shop/actions";
import WithSpinner from "../WithSpinner";
import {Shop} from "../../redux/shop/shop.data";

type PropsFromRedux = ConnectedProps<typeof connector>
type AppProps = PropsFromRedux & RouteComponentProps;

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shoppage extends React.Component<AppProps> {
    state = {
     loading: true
    };
    unsubscribeFromSnapshot: any = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }
    render() {
        const {match} = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCollections: (collectionsMap: {[key: string]: Shop}) =>
        dispatch(updateCollections(collectionsMap)),
});

const connector = connect(null, mapDispatchToProps);

export default connector(Shoppage);