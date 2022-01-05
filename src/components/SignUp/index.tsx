import React, {ChangeEvent, FormEvent, useState} from 'react';
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

import './styles.scss';
import {Dispatch} from "redux";
import {signUpStart, UserCredentials} from "../../redux/user/actions";
import {connect, ConnectedProps} from "react-redux";

type PropsFromRedux = ConnectedProps<typeof connector>
type SignUpProps = PropsFromRedux;

export interface SignUpState {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp = ({signUpStart}: SignUpProps) => {
    const [userCredentials, setUserCredentials ] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event: FormEvent<HTMLElement>)  => {
        event.preventDefault()
        if(password !== confirmPassword){
            alert('Passwords do not match')
            return;
        }

        signUpStart({ displayName, email, password});
    }

    const handleChange = (event: ChangeEvent)  => {
        const { name, value } = event.target as HTMLInputElement;
        setUserCredentials({ ...userCredentials, [name]: value })
    }
        return (
            <div className={'sign-up'}>
                <h2 className={'title'}>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className={'sign-up-form'} onSubmit={handleSubmit}>
                    <FormInput
                        type={'text'}
                        name={'displayName'}
                        value={displayName}
                        handleChange={handleChange}
                        label={'Display Name'}
                        required
                    />
                    <FormInput
                        type={'email'}
                        name={'email'}
                        value={email}
                        handleChange={handleChange}
                        label={'Email'}
                        required
                    />
                    <FormInput
                        type={'password'}
                        name={'password'}
                        value={password}
                        handleChange={handleChange}
                        label={'Password'}
                        required
                    />
                    <FormInput
                        type={'password'}
                        name={'confirmPassword'}
                        value={confirmPassword}
                        handleChange={handleChange}
                        label={'Confirm Password'}
                        required
                    />
                    <CustomButton type={'submit'}>SIGN UP</CustomButton>
                </form>
            </div>
        )
}

let mapDispatchToProps = (dispatch: Dispatch) => ({
    signUpStart: (userCredentials: UserCredentials) => dispatch(signUpStart(userCredentials))
})

const connector = connect(null, mapDispatchToProps);

export default connector(SignUp);