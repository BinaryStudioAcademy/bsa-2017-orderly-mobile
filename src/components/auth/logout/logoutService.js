//import {browserHistory} from 'react-router';
import NavigatorService from '../../../navigators/navigatorService';
import Auth from '../auth';

export let logoutService = {
    logout() {
        Auth.isUserAuthenticated().then(isUserAuthenticated => {
            if (isUserAuthenticated) {
                Auth.deauthenticateUser()
            }
        });
        NavigatorService.navigate('Login');
    }
};