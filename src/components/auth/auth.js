import axios from 'axios';

class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(token) {
//localStorage.setItem('token', token);
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        try {
            await AsyncStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        } catch (error) {
            this._appendMessage('AsyncStorage error: ' + error.message); // ??????
        }
    }

    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
        try {
          const value = await AsyncStorage.getItem('token');
          return value !== null;
        } catch (error) {
          // Error retrieving data
        }
//return localStorage.getItem('token') !== null;
    }

    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
//        localStorage.removeItem('token');
//        axios.defaults.headers.common['Authorization'] = null;
        try {
          await AsyncStorage.removeItem('token');
          axios.defaults.headers.common['Authorization'] = null;
        } catch (error) {
          this._appendMessage('AsyncStorage error: ' + error.message);
        }
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */

    static getToken() {
        try {
          const value = await AsyncStorage.getItem('token');
          return value;
        } catch (error) {
          // Error retrieving data
        }
//        return localStorage.getItem('token');
    }

}

export default Auth;
