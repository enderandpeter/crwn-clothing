import React from 'react';
import MenuItem from '../components/MenuItem';
import '../styles/directory.scss';
import {Section} from "../redux/directory/reducer";
import {connect, ConnectedProps} from 'react-redux';
import { selectDirectorySections } from '../redux/directory/selectors'
import { createStructuredSelector } from 'reselect';
import {RootState} from "../redux/root-reducer";

type PropsFromRedux = ConnectedProps<typeof connector>;
type DirectoryProps = PropsFromRedux

export interface DirectoryState {
    sections: Section[];
}

export const Directory: React.FC<DirectoryProps> = ({ sections }) => {
    return (
        <div className={'directory-menu'}>
            {
                sections.map(({id, ...props}: Section) => (
                    <MenuItem
                        key={id}
                        {...props}
                    />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector<RootState, DirectoryState>({
    sections: selectDirectorySections
});

const connector = connect(mapStateToProps);

export default connector(Directory);