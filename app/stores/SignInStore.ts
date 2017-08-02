'use strict';
import { observable } from 'mobx';
import { firebaseApp } from '../index';
import * as firebase from 'firebase';
import { Router } from '../router';
import { Constants } from '../utils/constants';
import Storage from 'react-native-key-value-store';

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
            .then((user: firebase.User) => {
                console.log('User email %s', user.email);
                this.isBusy = false;

                user.getToken(false).then((token: string) => {
                    console.log('User token: %s', token);
                    Storage.set(Constants.KEY_TOKEN, token);
                    Router.navigateToHome(dispatch, token, user.email);
                });
            }).catch((e: Error) => {
                console.log(e);
                this.isBusy = false;
                // show error 
            });
    }
}