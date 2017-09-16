//import {browserHistory} from 'react-router'; // ?????
import NavigatorService from '../../../navigators/navigatorService';
import { getCurrentUser } from './loginApi';
import Auth from '../auth';

export let loginService = {
    login(data) {
        if (data && data.token) {
            // save the token
            Auth.authenticateUser(data.token);
            // change the current URL to /
            //browserHistory.push('/'); // ?????
            NavigatorService.navigate('Home');
        }
        //NavigatorService.navigate('Home');//////
    },

    redirectLoggedInUser() {
        Auth.isUserAuthenticated().then(isUserAuthenticated => {
            if (isUserAuthenticated) {
                getCurrentUser()
                    .then(() => NavigatorService.navigate('Home'))
                    .catch((error) => console.error(error));
            }
        });
    }
};