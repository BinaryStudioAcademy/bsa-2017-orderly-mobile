//import {browserHistory} from 'react-router'; // ?????
import NavigatorService from '../../../navigators/navigatorService';
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
            NavigatorService.navigate('Home');
        }
    },

    redirectLoggedInUser() {
        Auth.isUserAuthenticated(isUserAuthenticated => {
            if (isUserAuthenticated) {
                getCurrentUser()
                    .then(() => NavigatorService.navigate('Home')/*; browserHistory.push('/')*/) // ?????
                    .catch((error) => console.error(error));
            }
        });
    }
};