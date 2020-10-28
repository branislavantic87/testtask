import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import BottomNavigationBar from '../common/BottomNavigationBar';
import Header from '../common/Header';
import SureyTab from '../MainScreenTabs/SurveyTab';
import MySurveysTab from '../MainScreenTabs/MySurveysTab';
import ProfileTab from '../MainScreenTabs/ProfileTab';


class MainScreen extends Component {

    renderTab = (tab) => {
        switch (tab.nav) {
            case 'surveys':
                return <SureyTab />
            case 'mySurveys':
                return <MySurveysTab />
            case 'profile':
                return <ProfileTab />
            default:
                console.log('Nothing to render')
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header header={this.props.activeTab.name} />
                {this.renderTab(this.props.activeTab)}
                <BottomNavigationBar />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeTab: state.bottomNavReducer.activeTab
    }
}

export default connect(mapStateToProps)(MainScreen);