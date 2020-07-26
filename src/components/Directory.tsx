import React, {Component} from 'react';
import MenuItem from '../components/MenuItem';

import '../styles/directory.scss';

interface DirectoryProps {

}

export interface ProductEntity {
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}

export interface Section extends ProductEntity{
    id: number;
}

interface DirectoryState {
    sections: Section[];
}

export class Directory extends Component<DirectoryProps, DirectoryState>{
    constructor(props: DirectoryProps) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render(){
        return (
            <div className={'directory-menu'}>
                {
                    this.state.sections.map(({id, ...props}: Section) => (
                        <MenuItem
                            key={id}
                            {...props}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Directory;