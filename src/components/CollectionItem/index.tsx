import React from 'react';

import './styles.scss';
import {ProductEntity} from "../../data/shop.data";
import CustomButton from "../CustomButton";

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
        <CustomButton inverted>
            Add to cart
        </CustomButton>
    </div>
)

export default CollectionItem;