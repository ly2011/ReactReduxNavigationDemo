import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');

console.log(`secondAction: ${JSON.stringify(secondAction)}`);
console.log(`tempNavState: ${JSON.stringify(tempNavState)}`);

const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);
console.log(`initialNavState: ${JSON.stringify(initialNavState)}`);
function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      console.log(`NavLoginState: ${JSON.stringify(nextState)}`);
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Login',
        }),
        state
      );
      console.log(`NavLogoutState: ${JSON.stringify(nextState)}`);

      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // return the original `state` if `nextState` is null or undefined
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };
function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      console.log(
        `AuthLoginState: ${JSON.stringify({
          ...state,
          isLoggedIn: true,
        })}`
      );
      return { ...state, isLoggedIn: true };

    case 'Logout':
      console.log(
        `AuthLogoutState: ${JSON.stringify({
          ...state,
          isLoggedIn: false,
        })}`
      );
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
