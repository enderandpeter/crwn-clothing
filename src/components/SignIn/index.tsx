import React, {ChangeEvent, FormEvent, useState} from 'react';
import './styles.scss';
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";

import {emailSignInStart, googleSignInStart} from "../../redux/user/actions";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";

type PropsFromRedux = ConnectedProps<typeof connector>
type SignInProps = PropsFromRedux

export interface SignInState{
    email: string;
    password: string;
    [x: string]: string;
}

const SignIn = ({emailSignInStart, googleSignInStart}: SignInProps) => {
    const [ userCredentials, setCredentials ] = useState({email: '', password: ''});
    const { email, password } = userCredentials;

    const handleSubmit = async (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = (event: ChangeEvent) => {
        const { value, name } = event.target as HTMLInputElement;

        setCredentials({...userCredentials, [name]: value});
    }

        return(
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name={'email'} value={email} label={'email'} handleChange={handleChange} required />
                    <FormInput name={'password'} type={'password'} value={password} label={'password'} handleChange={handleChange} required />
                    <div className={'buttons'}>
                        <CustomButton type={'submit'}>Sign In</CustomButton>
                        <CustomButton type={'button'} onClick={googleSignInStart} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart({email, password}))
})

const connector = connect(null, mapDispatchToProps);

export default connector(SignIn);