import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import CollectionItem from "../../CollectionItem";
import { selectCollection } from "../../../redux/shop/selectors";

import './styles.scss'
import {RootState} from "../../../redux/root-reducer";
import { RouteComponentProps } from 'react-router-dom';
import {Shop} from "../../../redux/shop/shop.data";

type CollectionPageProps = RouteComponentProps & ConnectedProps<typeof connector>;

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
    const { title, items } = collection as Shop;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state: RootState, ownProps: RouteComponentProps) => ({
    // @ts-ignore
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

const connector = connect(mapStateToProps)

export default connector(CollectionPage);