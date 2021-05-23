import React from 'react';
import {CustomButtonContainer} from "./styles";

const CustomButton: React.FC<any> = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;