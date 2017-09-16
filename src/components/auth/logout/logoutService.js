//import {browserHistory} from 'react-router';
import NavigatorService from '../../../navigators/navigatorService';
import Auth from '../auth';

export let logoutService = {
    logout() {


debugger;
            Auth.isUserAuthenticated().then(isUserAuthenticated => {
            debugger;
                if (isUserAuthenticated) {
                    getCurrentUser()
                        .then(() => Auth.deauthenticateUser())
                        .catch((error) => console.error(error));
                }
            });
            NavigatorService.navigate('Login');


    /*
        if (Auth.getToken()) {
            // Deauthenticate a user. Remove a token from Local Storage.
            Auth.deauthenticateUser();
        }
        //browserHistory.push('/login');
        NavigatorService.navigate('Login');
*/
    }
};