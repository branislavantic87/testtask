import React from 'react';
import { Scene, Router, Stack, Tabs } from 'react-native-router-flux';
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import SurveyScreen from './Screens/SurveyScreen';
import SavedSurveyPresentation from './Surveys/SavedSurveyPresentation';
import SurveyPresentanion from './Surveys/SurveyPresentation';


const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene hideNavBar key='login' initial >
                    <Scene key={'Login'} component={LoginScreen} />
                </Scene>
                <Scene hideNavBar key='main'>
                    <Scene key={'Main'} component={MainScreen} />
                    <Scene key={'SurvPresentation'} component={SurveyPresentanion} />
                    <Scene key={'Survey'} component={SurveyScreen} />
                    <Scene key={'SavedSurveyPresentation'} component={SavedSurveyPresentation} />
                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent;