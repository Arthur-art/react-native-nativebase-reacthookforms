import { createStackNavigator } from "@react-navigation/stack"
import { Profile } from "../screens/Profile";

const Stack = createStackNavigator();

export function StackRoutes(){

    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
    )
}