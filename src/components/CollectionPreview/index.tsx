import React from 'react';

import './styles.scss';
import {Product} from "../../redux/shop/shop.data";
import CollectionItem from "../CollectionItem";
import {useHistory, useRouteMatch} from "react-router-dom";

interface CollectionPreviewProps {
    title: string;
    items: Product[];
    routeName: string;
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({title, items, routeName}) => {
    const history = useHistory();
    const { path } = useRouteMatch();
    return (
        <div className={'collection-preview'}>
            <h1 className={'title'} onClick={() => history.push(`${path}/${routeName}`)}>
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
}

export default CollectionPreview;