import React, {ChangeEvent, FormEvent} from 'react';
import './styles.scss';
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";

import {emailSignInStart, googleSignInStart} from "../../redux/user/actions";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>
// @ts-ignore
type SignInProps = PropsFromRedux

export interface SignInState{
    email: string;
    password: string;
    [x: string]: string;
}

class SignIn extends React.Component<SignInProps, SignInState>{
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = (event: ChangeEvent) => {
        const { value, name } = event.target as HTMLInputElement;

        this.setState({ [name]: value});
    }

    render(){
        const { googleSignInStart } = this.props;
        return(
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name={'email'} value={this.state.email} label={'email'} handleChange={this.handleChange} required />
                    <FormInput name={'password'} type={'password'} value={this.state.password} label={'password'} handleChange={this.handleChange} required />
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
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart({email, password}))
})

// @ts-ignore
const connector = connect(null, mapDispatchToProps)(SignIn);

export default connector;