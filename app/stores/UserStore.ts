import { observable } from 'mobx';
import { firebaseApp } from '../index';

export class UserStore {
    @observable
    isBusy: boolean;
    @observable
    email: string;

    constructor() {
        this.getEmail();
    }

    setEmail(email: string) {
        this.email = email;
    }

    getEmail(): void {
        if (this.isBusy) {
            this.setEmail('Unknown');
        }

        this.isBusy = true;
        this.setEmail('dummy@dummy.com');
        this.isBusy = false;
    }
}