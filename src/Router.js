import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginScreen from './Screens/LoginScreen';


const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene hideNavBar key='login' initial >
                    <Scene key={'Login'} component={LoginScreen} />
                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent;