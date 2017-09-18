import { NavigationActions, NavigationParams, NavigationRoute } from 'react-navigation';

let _container; // eslint-disable-line

function setContainer(container: Object) {
    _container = container;
}

function reset(routeName: string, params?: NavigationParams) {
    // ToDo: Test
    ///_container.dispatch(
    _container.props.navigation.dispatch(
        NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    type: 'Navigation/NAVIGATE',
                    routeName,
                    params,
                }),
            ],
        }),
    );
}

function navigate(routeName: string, params?: NavigationParams) {
    // Why this is not working???
    ///_container.dispatch(
    _container.props.navigation.dispatch(
        NavigationActions.navigate({
            type: 'Navigation/NAVIGATE',
            routeName,
            params,
        }),
    );
}

function navigateDeep(actions: { routeName: string, params?: NavigationParams }[]) {
    // ToDo: Test
    ///_container.dispatch(
    _container.props.navigation.dispatch(
        actions.reduceRight(
            (prevAction, action): any =>
                NavigationActions.navigate({
                    type: 'Navigation/NAVIGATE',
                    routeName: action.routeName,
                    params: action.params,
                    action: prevAction,
                }),
            undefined,
        ),
    );
}

// ToDo: Test
function getCurrentRoute(): NavigationRoute | null {
    if (!_container || !_container.state.nav) {
        return null;
    }

    return _container.state.nav.routes[_container.state.nav.index] || null;
}

export default {
    setContainer,
    navigateDeep,
    navigate,
    reset,
    getCurrentRoute
};