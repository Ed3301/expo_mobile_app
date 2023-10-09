import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { COLORS, images, SIZES } from "../constants";
import {
    NearbyJobs,
    PopularJobs,
    ScreenHeaderBtn,
    Welcome,
} from "../components";
import styles from "../components/common/header/screenheader.style";

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <View style={{ backgroundColor: COLORS.tertiary, paddingBottom: 20 }}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.tertiary },
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <View style={styles.btnContainer}>
                                <DrawerToggleButton />
                            </View>
                        ),
                        headerRight: () => (
                            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                        ),
                        headerTitle: "",
                    }}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <PopularJobs />
                    <NearbyJobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
