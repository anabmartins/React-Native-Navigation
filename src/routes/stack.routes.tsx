import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();


import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';


export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: 'green',
                    }, 
                    headerTintColor: '#fff'
                }}
            />
        </Navigator>
    )
}
