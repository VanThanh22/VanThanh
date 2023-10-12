import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    Pressable,
    ScrollView,
    TextInput,
} from 'react-native';

const YourApp = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.search}
                        placeholder="Tìm kiếm..."
                    />
                    <View style={styles.buttonMenu}>
                        <Image
                            source={require('../assets/relative.png')}
                        />
                    </View>
                    <Text style={styles.text1}>Next to you</Text>
                    <View style={styles.text2}>
                        <TouchableOpacity onPress={""}>
                            <Text>On the map
                                <Image
                                    source={require('../assets/Vector.png')}
                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.noidung}>
                        <ScrollView
                            horizontal // Cho phép cuộn ngang
                            showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                            contentContainerStyle={styles.scrollViewContent}
                        >
                            <View style={styles.noidung1}>
                                <Image
                                    source={require('../assets/imgDogCard.png')}
                                    style={[styles.image, { width: 232, height: 228, borderRadius: 20 }]}
                                />
                                <View style={styles.nddog}>
                                    <Text style={styles.text5}>Go for a walk and feed the dog</Text>
                                </View>
                            </View>
                            <View style={styles.noidung2}>
                                <Image
                                    source={require('../assets/imgDogCard.png')}
                                    style={[styles.image, { width: 232, height: 228, marginHorizontal: 15, borderRadius: 20 }]}
                                /></View>
                            <View style={styles.noidung3}>
                                <Image
                                    source={require('../assets/imgFlowers1.png')}
                                    style={[styles.image, { width: 232, height: 228, marginHorizontal: 15, borderRadius: 20 }]}
                                />
                            </View>
                        </ScrollView>

                    </View>
                    <Text style={styles.text3}>Categories</Text>
                    <View style={styles.text4}>
                        <TouchableOpacity onPress={""}>
                            <Text>see all
                                <Image
                                    source={require('../assets/Vector.png')}
                                    style={[styles.image, { marginLeft: 34, }]}
                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.noidung4}>
                        <Image
                            source={require('../assets/Icon_Moving.png')}
                            style={[styles.image, { width: 48, height: 48, marginLeft: 10, }]}
                        />
                        <View style={styles.ndmoving}>
                            <Text style={styles.text6}>Moving and things</Text>
                            <View style={styles.text8}>
                                <TouchableOpacity onPress={""}>
                                    <Text>24 Tasks</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image
                            source={require('../assets/Vector.png')}
                            style={[styles.image, { marginLeft: 34, }]}
                        />
                    </View>
                    <View style={styles.noidung5}>
                        <Image
                            source={require('../assets/Icon_House.png')}
                            style={[styles.image, { width: 48, height: 48, marginLeft: 10, }]}
                        />
                        <View style={styles.ndhouse}>
                            <Text style={styles.text7}>Help around the house</Text>
                            <View style={styles.text9}>
                                <TouchableOpacity onPress={""}>
                                    <Text>5 Tasks</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image
                            source={require('../assets/Vector.png')}
                            style={[styles.image, { marginLeft: 34, }]}
                        />
                        </View>
                    </View>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 66,
        paddingLeft: 24,
        // position: 'relative', // Đặt vị trí tương đối để hình ảnh nằm trên TextInput

    },
    search: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 12,
        width: 263,
        height: 48,
    },
    buttonMenu: {
        position: 'absolute',
        top: 60,
        left: 300,
    },
    text1: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 20,
        width: 372,
        height: 30,
    },
    text2: {
        position: 'absolute',
        left: 300,
        top: 143,
    },
    text3: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 20,
        width: 372,
        height: 30,
    },
    text4: {
        position: 'absolute',
        left: 320,
        top: 544,
    },
    text5: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    text6: {
        fontSize: 16,
        fontWeight: ' bold',

    },
    text7: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    text8: {
        fontSize: 16,
        fontWeight: ' bold',
    },
    noidung1: {
        backgroundColor: 'white',
        marginTop: 30,
        marginRight: 20,
        paddingTop: 20,
        paddingHorizontal: 20,
        width: 264,
        height: 326,
        borderRadius: 20,
    },
    noidung2: {
        backgroundColor: 'white',
        marginTop: 30,
        marginRight: 10,
        paddingTop: 20,
        width: 264,
        height: 326,
        borderRadius: 20,
    },
    noidung3: {
        backgroundColor: 'white',
        marginTop: 30,
        marginRight: 10,
        paddingTop: 20,
        width: 264,
        height: 326,
        borderRadius: 20,
    },
    noidung4: {
        backgroundColor: 'white',
        marginTop: 10,
        marginRight: 10,
        paddingTop: 20,
        width: 327,
        height: 72,
        borderRadius: 20,
        flexDirection: 'row'
    },
    noidung5: {
        backgroundColor: 'white',
        marginTop: 10,
        marginRight: 10,
        paddingTop: 20,
        width: 322,
        height: 72,
        borderRadius: 20,
        flexDirection: 'row'
    },
    titel: {
        position: 'absolute',
        top: 425,
        left: 30,
    },
    nddog: {
        marginTop: 10,
        width: 142,
        height: 44,
    },
    ndmoving: {
        width: 155,
        height: 20,
        marginLeft: 10,
    },
    ndhouse: {
        width: 142,
        height: 44,
        marginLeft: 10,
    }
});

export default YourApp;


