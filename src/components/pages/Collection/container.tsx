import { connect } from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../../redux/shop/selectors'
import WithSpinner from "../../WithSpinner";
import CollectionPage from './index';
import {ShopState} from "../../../redux/shop/reducer";
import {RootState} from "../../../redux/root-reducer";
import {CollectionsSelection} from "../../CollectionsOverview/container";

const mapStateToProps = createStructuredSelector<RootState, CollectionsSelection>({
    // @ts-ignore
    isLoading: (state: ShopState) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;