import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import colors from '../constants/colors';
const commonOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: colors.white,
    },
    headerShadowVisible: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false
};

const StackNavigator = () => {
    const { Navigator, Screen } = createStackNavigator()
    return (
        <Navigator
            screenOptions={{
                // your stack style
            }}
        >
            <Screen
                name='Home'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Home').default}
                options={{
                    ...commonOptions
                }}
            />
        </Navigator>
    )
}

export default StackNavigator