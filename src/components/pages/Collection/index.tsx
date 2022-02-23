import React from 'react';
import { useSelector} from 'react-redux';

import CollectionItem from "../../CollectionItem";
import { selectCollection } from "../../../redux/shop/selectors";

import './styles.scss'
import { useParams } from 'react-router-dom';
import {Shop} from "../../../redux/shop/shop.data";

const CollectionPage  = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
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

export default CollectionPage;