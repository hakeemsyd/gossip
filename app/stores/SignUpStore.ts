import { observable, computed } from 'mobx';
import { firebaseApp } from '../index';


export class SignUpStore {
    @observable
    username: string;
    @observable
    password: string;
    @observable
    repassword: string;
    @observable
    isBusy: boolean;

    // display error message
    @computed
    public get passwordValid(): boolean {
        return this.password == this.repassword;
    }

    setUsername(username: string) {
        this.username = username;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setRePassword(repassword: string) {
        this.repassword = repassword;
    }

    signUp() {
        if (this.isBusy) {
            return;
        }

        this.isBusy = true;
        // call service here
        setTimeout(
            () => {
                console.log('SignUP Finished');
                this.isBusy = false;
            },
            500
        );
    }
}