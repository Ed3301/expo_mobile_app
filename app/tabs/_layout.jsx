import { Tabs } from 'expo-router';
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
            }}
            tabBar={ (props) => (<BottomTabBar {...props} />) }
        >
            <Tabs.Screen
                name="home"
                options={{
                    href: "/home",
                    tabBarIcon: ({ color }) => (
                        <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                            Home
                        </Text>
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    href: {
                        pathname: "/jobs",
                    },
                    tabBarIcon: ({ color }) => (
                        <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                            Search
                        </Text>
                    ),
                }}
            />
        </Tabs>
    );
}