'use strict';
import { observable } from 'mobx';
import { firebaseApp } from '../index';
import { Router } from '../router';

export class SignInStore {
    @observable
    username: string;
    @observable
    password: string;
    @observable
    isBusy: boolean;

    setUsername(username: string): void {
        this.username = username;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    login(dispatch): void {
        if (this.isBusy) {
            return;
        }

        this.isBusy = true;
        //do login here
        firebaseApp.auth().signInWithEmailAndPassword(this.username, this.password)
            .then((a: any) => {
                console.log(a);
                this.isBusy = false;
                Router.navigateToHome(dispatch);

            }).catch((e: Error) => {
                console.log(e);
                this.isBusy = false;
                // show error 
            });
    }
}