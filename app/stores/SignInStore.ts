import { observable } from 'mobx';
import { firebaseApp } from '../index';
import { NavigationActions } from 'react-navigation'

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

    login(dispatch) {
        if (this.isBusy) {
            return;
        }

        this.isBusy = true;
        //do login here
        firebaseApp.auth().signInWithEmailAndPassword(this.username, this.password)
            .then((a: any) => {
                console.log(a);
                this.isBusy = false;

                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' })
                    ]
                })
                dispatch(resetAction);
            }).catch((e: Error) => {
                console.log(e);
                this.isBusy = false;
            });
    }
}