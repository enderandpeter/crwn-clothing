import React, {ChangeEvent, Component, FormEvent} from 'react';
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

class SignUp extends Component<SignUpProps, SignUpState> {
    constructor(props: any) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event: FormEvent<HTMLElement>)  => {
        event.preventDefault()
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert('Passwords do not match')
            return;
        }

        signUpStart({ displayName, email, password});
    }

    handleChange = (event: ChangeEvent)  => {
        // @ts-ignore
        const { name, value } = event.target;
        // @ts-ignore
        this.setState({ [name]: value })
    }
    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className={'sign-up'}>
                <h2 className={'title'}>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className={'sign-up-form'} onSubmit={this.handleSubmit}>
                    <FormInput
                        type={'text'}
                        name={'displayName'}
                        value={displayName}
                        handleChange={this.handleChange}
                        label={'Display Name'}
                        required
                    />
                    <FormInput
                        type={'email'}
                        name={'email'}
                        value={email}
                        handleChange={this.handleChange}
                        label={'Email'}
                        required
                    />
                    <FormInput
                        type={'password'}
                        name={'password'}
                        value={password}
                        handleChange={this.handleChange}
                        label={'Password'}
                        required
                    />
                    <FormInput
                        type={'password'}
                        name={'confirmPassword'}
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label={'Confirm Password'}
                        required
                    />
                    <CustomButton type={'submit'}>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => ({
    signUpStart: (userCredentials: UserCredentials) => dispatch(signUpStart(userCredentials))
})

const connector = connect(null, mapDispatchToProps);

export default connector(SignUp);