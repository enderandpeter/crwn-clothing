import React from 'react';
import './styles.scss';

const CustomButton: React.FC<any> = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} type={'submit'} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;