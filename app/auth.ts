export const onSignIn = (username: string, password: string) => {
	console.log('SignIn user: %s, pass: %s', username, password);
};

export const onSignOut = () => {
	console.log('SignOut');
};

export const onSignUp = (username: string, pass: string, repass: string) => {
	console.log('SignUp user: %s, pass: %s, repass: %s', username, pass, repass);
}