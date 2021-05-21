import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import './styles.scss';
import {Product} from "../../redux/shop/shop.data";
import CustomButton from "../CustomButton";
import { addItem } from "../../redux/cart/actions";
import {Dispatch} from "redux";

interface CollectionItemProduct{
    key: number;
    item: Product;
}

type PropsFromRedux = ConnectedProps<typeof connector>
type CollectionItemProps = CollectionItemProduct & PropsFromRedux;

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return(
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
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: Product) => dispatch(addItem(item))
});

const connector = connect(null, mapDispatchToProps);

export default connector(CollectionItem);