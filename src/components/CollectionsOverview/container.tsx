import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/selectors';
import WithSpinner from "../WithSpinner";
import CollectionsOverview from "./index";
import {RootState} from "../../redux/root-reducer";

export interface CollectionsSelection {
    isLoading: boolean
}

const mapStateToProps = createStructuredSelector<RootState, CollectionsSelection>({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;