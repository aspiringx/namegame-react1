'use client';

import { TextField } from '@mui/material';
import React, { Component, useState } from 'react';
import validator from 'validator';

class RegistrationForm extends Component {

    constructor(props) {

        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: false,
            passwordError: false,
            isLogin: props.isLoginType ?? true
        };

        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let emailInvalid = false;
        let passwordInvalid = false;


        if (this.state.email == '') {
            emailInvalid = true;
        }
        if (this.state.password == '') {
            passwordInvalid = true;
        }

        this.setState({
            emailError: emailInvalid,
            passwordError: passwordInvalid
        });


        if (this.state.email && this.state.password && !this.state.emailError && !this.state.passwordError) {
            let formData = {
                email: this.state.email,
                password: this.state.password
            };
            console.log("Form Data: ", formData);
            window.alert("Form Submitted!");
        }
    }

    validateEmail(event) {
        let valid = false;
        const value = event.target.value;
        
        if (validator.isEmail(value)) {
            valid = true;
        }

        if (this.state.emailError && valid) {
            this.setState({
                emailError: false
            });
        }

        if (!this.state.emailError && !valid) {
            this.setState({
                emailError: true
            });
        }

        this.setState({
            email: value
        });
    }

    validatePassword(event) {
        let valid = false;
        const value = event.target.value;

        if (this.state.isLogin || validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            valid = true;
        }

        if (this.state.passwordError && valid) {
            this.setState({
                passwordError: false
            });
        }

        if (!this.state.passwordError && !valid) {
            this.setState({
                passwordError: true
            });
        }

        this.setState({
            password: value
        });
    }

    render() {
        return (
            <form
                onSubmit={e => this.handleSubmit(e)}
                sx={{
                    '& .MuiTextField-root': { m: 1, fullWidth: true },
                }}
                noValidate
                autoComplete="off"
            >
                <div className="text-md w-full">
                    <TextField
                        fullWidth
                        required
                        id="email"
                        label="Email"
                        type="email"
                        defaultValue=""
                        size="small"
                        error={this.state.emailError}
                        onChange={this.validateEmail}
                    />
                    {!this.state.emailError ? null :
                        <div className="font-bold text-rose-600 text-xs text-left px-2">
                            * Invalid Email
                        </div>}
                    <TextField
                        fullWidth
                        required
                        id="password"
                        type="password"
                        label="Password"
                        defaultValue=""
                        size="small"
                        error={this.state.passwordError}
                        onChange={this.validatePassword}
                        className="mt-2"
                    />
                    {!this.state.passwordError || this.state.isLogin ? null :
                        <div className="font-bold text-rose-600 text-xs text-left px-2">
                            * Invalid Password: Please make sure it has the following:
                            <ul className="list-disc px-5">
                                <li>Minimum 8 characters</li>
                                <li>Minimum 1 uppercase letter</li>
                                <li>Minimum 1 lowercase letter</li>
                                <li>Minimum 1 number</li>
                                <li>Minimum 1 symbol</li>
                            </ul>
                        </div>}
                </div>
                <div className="flex justify-center pt-3">
                    <button type="submit"
                        disabled={this.state.passwordError || this.state.emailError}
                        className="rounded-full hover:enabled:border-orange-400 hover:enabled:text-orange-400 text-white w-full bg-blue-600 py-2 px-5 border shadow hover:enabled:bg-white disabled:bg-slate-400">{this.state.isLogin ? 'Login' : 'Sign up'}</button>
                </div>
                {
                    !this.state.isLogin &&
                    <div className="flex text-xs pt-4 justify-center">
                        <div className="text-gray-500">Already a member? &nbsp;</div>
                        <div className="hover:text-blue-500"><a href="/login">Login here &rarr;</a></div>
                    </div>
                }
                {
                    this.state.isLogin &&
                    <div className="flex text-xs pt-4 justify-center">
                        <div className="text-gray-500">Not a member? &nbsp;</div>
                        <div className="hover:text-blue-500"><a href="/">Register here &rarr;</a></div>
                    </div>
                }

            </form >
        )
    }
}

export default RegistrationForm;