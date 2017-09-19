import NavigatorService from '../../../navigators/navigatorService';
import { getCurrentUser } from './loginApi';
import Auth from '../auth';

export let loginService = {
    login(data) {
        if (data && data.token) {
            // save the token
            Auth.authenticateUser(data.token).then(() => NavigatorService.navigate('Home'));
        }
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