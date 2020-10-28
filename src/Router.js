import React from 'react';
import { Scene, Router, Stack, Tabs } from 'react-native-router-flux';
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import SurveyScreen from './Screens/SurveyScreen';


const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene hideNavBar key='login' initial >
                    <Scene key={'Login'} component={LoginScreen} />
                </Scene>
                <Scene hideNavBar key='main'>
                    <Scene key={'Main'} component={MainScreen} />
                    <Scene key={'Survey'} component={SurveyScreen} />
                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent;