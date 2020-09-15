import React, {ChangeEvent, FormEvent} from 'react';
import './styles.scss';
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export interface SignInState{
    email: string;
    password: string;
    [x: string]: string;
}

class SignIn extends React.Component<any, SignInState>{
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event: FormEvent<HTMLElement>) => {
        event.preventDefault();

        const { email, password }  = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.state = {
                email: '',
                password: ''
            };
        } catch(err){
            console.error(err);
        }

        this.setState({email: '', password: ''})
    }

    handleChange = (event: ChangeEvent) => {
        const { value, name } = event.target as HTMLInputElement;

        this.setState({ [name]: value});
    }

    render(){
        return(
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name={'email'} value={this.state.email} label={'email'} handleChange={this.handleChange} required />
                    <FormInput name={'password'} type={'password'} value={this.state.password} label={'password'} handleChange={this.handleChange} required />
                    <div className={'buttons'}>
                        <CustomButton type={'submit'}>Sign In</CustomButton>
                        <CustomButton type={'button'} onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;