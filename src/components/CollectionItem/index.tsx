import React from 'react';

import './styles.scss';
import {ProductEntity} from "../../data/shop.data";

interface CollectionItemProps extends ProductEntity{
    key: number;
}

const CollectionItem: React.FC<CollectionItemProps> = ({name, price, imageUrl}) => (
    <div className={'collection-item'}>
        <div
            className={'image'}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        </div>
        <div className={'collection-footer'}>
            <span className={'name'}>{name}</span>
            <span className={'price'}>{price}</span>
        </div>
    </div>
)

export default CollectionItem;