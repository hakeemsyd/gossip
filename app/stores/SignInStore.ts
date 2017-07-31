import { observable } from 'mobx';
import { firebaseApp } from '../index';


export class SignInStore {
    @observable
    username: string;
    @observable
    password: string;
    @observable
    isBusy: boolean;

    setUsername(username: string) {
        this.username = username;
    }

    setPassword(password: string) {
        this.password = password;
    }

    login() {
        if (this.isBusy) {
            return;
        }

        this.isBusy = true;
        //do login here
        firebaseApp.auth().signInWithEmailAndPassword(this.username, this.password)
            .then((a: any) => {
                console.log(a);
                this.isBusy = false;
            }).catch((e: Error) => {
                console.log(e);
                this.isBusy = false;
            });
    }
}