import React from 'react';

import '../styles/menu-item.scss';

interface MenuItemProps {
    title: string;
    imageUrl: string;
    size?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({title, imageUrl, size}) => {
    return (
        <div className={`${size} menu-item`}>
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

export default MenuItem;