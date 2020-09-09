import React, {ChangeEvent, Component, FormEvent} from 'react';
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './styles.scss';

export interface SignUpState {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

class SignUp extends Component<any, SignUpState> {
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
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert('Passwords do not match')
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            // Clear the form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(err) {
            console.error(err);
        }
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

export default SignUp;