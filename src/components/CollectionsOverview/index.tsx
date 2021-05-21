import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../CollectionPreview';

import { selectCollectionsForPreview } from "../../redux/shop/selectors";

import './styles.scss';
import {Shop} from "../../redux/shop/shop.data";
import {RootState} from "../../redux/root-reducer";

type PropsFromRedux = ConnectedProps<typeof connector>;
type ShopProps = PropsFromRedux

interface ShopState {
    collections: Shop[];
}

const CollectionsOverview: React.FC<ShopProps> = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector<RootState, ShopState>({
    collections: selectCollectionsForPreview
});

const connector = connect(mapStateToProps);

export default connector(CollectionsOverview);