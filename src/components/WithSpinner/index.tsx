import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './styles';
import {ConnectedComponent} from "react-redux";

const WithSpinner = (WrappedComponent: React.FC | ConnectedComponent<any, any>) => {
    return ({isLoading, ...otherProps}: {isLoading: boolean}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
};

export default WithSpinner;