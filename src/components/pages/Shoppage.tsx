import React from 'react';
import SHOP_DATA, { ShopData } from "../../data/shop.data";
import CollectionPreview from "../CollectionPreview";

interface ShopProps {

}

interface ShopState {
    collections: ShopData;
}

class Shoppage extends React.Component<ShopProps, ShopState>{
    constructor(props: ShopProps) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return <div className={'shop-page'}>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>;
    }
}

export default Shoppage;