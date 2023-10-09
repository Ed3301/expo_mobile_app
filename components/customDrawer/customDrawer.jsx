import { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Collapsible from 'react-native-collapsible';
import styles from '../common/header/screenheader.style';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Home from '../../app/home';
import JobDetails from "../../app/job-details/[id]";
import Search from '../../app/search/[id]';

const Drawer = createDrawerNavigator();
export default function Layout() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const router = useRouter();

    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)} style={{borderRadius: 20, }}>
                    <Text style={{ padding: 10, margin: 10, backgroundColor: 'white',  color: '#007AFFFF', fontWeight: 'bold' }}>Jobs</Text>
                </TouchableOpacity>
                <Collapsible collapsed={ isCollapsed }>
                    <DrawerItem label="Full-time" onPress={() => router.push('/search/Full-time')} />
                    <DrawerItem label="Part-time" onPress={() => router.push('/search/Part-time')} />
                    <DrawerItem label="Contractor" onPress={() => router.push('/search/Contractor')} />
                </Collapsible>
            </DrawerContentScrollView>
        );
    }

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                swipeEdgeWidth : 0,
                drawerStyle: styles.drawer,
                drawerItemStyle: styles.drawerItem
            }}
        >
            <Drawer.Screen
                name="home"
                component={ Home }
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                }}
            />
            <Drawer.Screen
                name="search/[id]"
                component={ Search }
                options={{
                    drawerLabel: "search",
                    title: "Search",
                    drawerItemStyle: { display: 'none' }
                }}
            />
            <Drawer.Screen
                name="job-details/[id]"
                component={ JobDetails }
                options={{
                    drawerLabel: "jobs",
                    title: "Jobs",
                    drawerItemStyle: { display: 'none' }
                }}
            />
        </Drawer.Navigator>
    );
}
