import React from 'react';
import { Scene, Router, Stack, Tabs } from 'react-native-router-flux';
import MySurveysTab from './MainScreenTabs/MySurveysTab';
import ProfileTab from './MainScreenTabs/ProfileTab';
import SurveysTab from './MainScreenTabs/SurveyTab';
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