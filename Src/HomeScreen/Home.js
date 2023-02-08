import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { AppStyles } from '../AppStyle/AppStyle';
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import OtrixDivider from '../Component/OtrixDivider';
import { FlatList } from 'react-native';

const data = [
    {
        title: 'Project 1',
        desp: "Zone 1"
    },
    {
        title: 'Project 2',
        desp: "Zone 2"
    },
    {
        title: 'Project 3',
        desp: "Zone 3"
    },
    {
        title: 'Project 4',
        desp: "Zone 4"
    },
    {
        title: 'Project 5',
        desp: "Zone 5"
    },
    {
        title: 'Project 5',
        desp: "Zone 5"
    },
    {
        title: 'Project 5',
        desp: "Zone 5"
    },
    {
        title: 'Project 5',
        desp: "Zone 5"
    },
    {
        title: 'Project 5',
        desp: "Zone 5"
    },
]

export default function Home(props) {
    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={{
                padding: '4%',
                flexDirection: "row",
                justifyContent: "space-between",
                elevation: 2,
                backgroundColor: "#fff"
            }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ justifyContent: "center", marginRight: 5 }}>
                        <Octicons name='project' color='black' size={18} />
                    </View>

                    <Text
                        style={{
                            fontSize: AppStyles.fontSize.content,
                            fontFamily: AppStyles.fontName.semibold,
                            color: AppStyles.color.textColor,

                        }}
                    >Project Id</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ justifyContent: "center", marginRight: 10 }}>
                        <Feather name='search' color='black' size={18} />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Feather onPress={() => props?.navigation?.navigate('Profile')} name='user' color='black' size={18} />
                    </View>


                </View>

            </View>
            <OtrixDivider size={'md'} />
            <View style={{
                flex: 1,

            }}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    onPress={() => props?.navigation?.navigate('ProjectDetails')}
                                    style={{
                                        backgroundColor: index % 2 == 0 ? AppStyles.color.primaryLight : AppStyles.color.primaryColor,
                                        paddingHorizontal: '4%',
                                        paddingVertical: "5%",
                                        elevation: 2,
                                        borderRadius: 6,
                                        marginHorizontal: 10,
                                        marginTop: index == 0 ? 5 : 0

                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: AppStyles.fontSize.normal,
                                            fontFamily: AppStyles.fontName.semibold,
                                            color: AppStyles.color.textColor,

                                        }}
                                    >{item.title}</Text>
                                    <OtrixDivider size={'sm'} />
                                    <Text
                                        style={{
                                            fontSize: AppStyles.fontSize.normal,
                                            fontFamily: AppStyles.fontName.main,
                                            color: AppStyles.color.textColor,

                                        }}
                                    >{item.desp}</Text>

                                </TouchableOpacity>
                                <OtrixDivider size={'md'} />
                            </View>

                        )
                    }}

                />
            </View>

        </View >
    )
}