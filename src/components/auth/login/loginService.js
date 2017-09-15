//import {browserHistory} from 'react-router'; // ?????
import { NavigationActions } from 'react-navigation';
import { getCurrentUser } from './loginApi';
import Auth from '../auth';

export let loginService = {
    login(data) {
    debugger;
        if (data && data.token) {
            // save the token
            Auth.authenticateUser(data.token);
            // change the current URL to /
            //browserHistory.push('/'); // ?????
            NavigationActions.navigate({ routeName: 'Home' });
        }
    },

    redirectLoggedInUser() {
        Auth.isUserAuthenticated(isUserAuthenticated => {
            if (isUserAuthenticated) {
                getCurrentUser()
                    .then(() => NavigationActions.navigate({ routeName: 'Home' })/*; browserHistory.push('/')*/) // ?????
                    .catch((error) => console.error(error));
            }
        });
    }
};