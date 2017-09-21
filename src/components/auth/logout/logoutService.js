import NavigatorService from '../../../navigators/navigatorService';
import Auth from '../auth';

export let logoutService = {
    logout() {
        Auth.deauthenticateUser()
            .then(() => NavigatorService.navigate('Login'))
            .catch(() => NavigatorService.navigate('Login'));
    }
};