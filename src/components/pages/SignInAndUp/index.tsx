import React from "react";
import SignIn from "../../SignIn";
import SignUp from "../../SignUp";

import './styles.scss';

const SignInAndUp: React.FC<any> = () => (
    <div className={'sign-in-and-sign-up'}>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndUp;