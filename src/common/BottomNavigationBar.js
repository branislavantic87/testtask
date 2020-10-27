import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImagePropTypes } from 'react-native';
import { connect } from 'react-redux';
import { bottomNavigationArray } from '../../helpers';
import { changeActiveTab } from '../../store/actions/BottomNavigationActions';

const BottomNavigationBar = (props) => {
    return (
        <View style={styles.mainContainer}>
            {bottomNavigationArray.map((element, i) => {
                return (
                    <TouchableOpacity key={i} onPress={() => props.changeActiveTab(element)} style={styles.touchableContainerStyle}>
                        <Image resizeMode='contain' style={styles.imageStyle} source={element.image} />
                        <Text style={element.nav === props.activeTab.nav ? { color: 'red' } : { color: 'black' }}>{element.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 60
    },
    touchableContainerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    imageStyle: {
        width: 24,
        height: 24
    }
})

const mapStateToProps = state => {
    return {
        activeTab: state.bottomNavReducer.activeTab
    }
}

export default connect(mapStateToProps, { changeActiveTab })(BottomNavigationBar);