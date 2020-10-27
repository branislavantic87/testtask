import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';


const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene hideNavBar key='login' initial >
                    <Scene key={'Login'} component={LoginScreen} />
                </Scene>
                <Scene hideNavBar key='main'>
                    <Scene key={'Main'} component={MainScreen} />
                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent;