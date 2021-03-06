import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {ProductEntity} from "../redux/directory/reducer";

import '../styles/menu-item.scss';

type MenuItemProps = ProductEntity & RouteComponentProps & {key: number};

export const MenuItem: React.FC<MenuItemProps> = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div
                className={'background-image'}
                style={{
                    backgroundImage: `url(${imageUrl}}`
                }}
            ></div>
            <div className={'content'}>
                <h1 className={'title'}>{title}</h1>
                <span className={'subtitle'}>SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);