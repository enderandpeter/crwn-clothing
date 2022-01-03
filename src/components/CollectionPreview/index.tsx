import React from 'react';

import './styles.scss';
import {Product} from "../../redux/shop/shop.data";
import CollectionItem from "../CollectionItem";

interface CollectionPreviewProps {
    title: string;
    items: Product[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({title, items}) => (
    <div className={'collection-preview'}>
        <h1 className={'title'}>
            {title}
        </h1>
        <div className={'preview'}>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;