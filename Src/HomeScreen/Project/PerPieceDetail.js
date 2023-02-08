import React from 'react';
import { Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OtrixDivider from '../../Component/OtrixDivider';

import { AppStyles } from '../../AppStyle/AppStyle';
export default function PerPieceDetail(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <View style={{
                padding: '4%',
                flexDirection: "row",
                elevation: 2,
                backgroundColor: AppStyles.color.primaryColor
            }}>
                <View style={{
                    justifyContent: "center",
                    marginRight: 8
                }}>
                    <Ionicons onPress={() => props.navigation.goBack()} name='arrow-back-outline' color='black' size={20} />
                </View>
                <View style={{
                    justifyContent: "center",

                }}>
                    <Text
                        style={{
                            fontSize: AppStyles.fontSize.content,
                            fontFamily: AppStyles.fontName.semibold,
                            color: AppStyles.color.textColor,

                        }}
                    >Piece 1</Text>
                </View>

            </View>
            <View style={{ justifyContent: "center", flex: 1 , marginBottom:50}}>
              
                <View style={{ alignItems: "center" }} >
                    <CircularProgress
                        value={1453}
                        maxValue={2000}
                        activeStrokeWidth={12}
                        progressValueColor={'black'}
                        radius={100}
                        duration={1000}
                        title={'Total'}
                        inActiveStrokeColor={AppStyles.color.grayLightColor}
                        activeStrokeColor={AppStyles.color.textColor}
                    />
                </View>
                <OtrixDivider size={'lg'} />
                <OtrixDivider size={'lg'} />

                <View style={{
                    backgroundColor: AppStyles.color.primaryColor,
                    elevation: 5,
                    borderRadius: 5,
                    padding: "6%",
                    marginHorizontal: 15
                }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 100,
                                backgroundColor: "green",
                                marginRight: 4
                            }} />
                            <View style={{ justifyContent: "center" }}>
                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.semibold,
                                        color: AppStyles.color.textColor
                                    }}
                                >1245</Text>

                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.main,
                                        marginTop: 3,
                                        textAlign: "center"
                                    }}
                                >ok</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 100,
                                backgroundColor: "#C0CCDA",
                                marginRight: 4
                            }} />
                            <View style={{ justifyContent: "center" }}>
                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.semibold,
                                        color: AppStyles.color.textColor
                                    }}
                                >1245</Text>

                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.main,
                                        marginTop: 3,
                                        textAlign: "center"
                                    }}
                                >mes</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 100,
                                backgroundColor: "#E5E9F2",
                                marginRight: 4
                            }} />
                            <View style={{ justifyContent: "center" }}>
                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.semibold,
                                        color: AppStyles.color.textColor
                                    }}
                                >80</Text>

                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.main,
                                        marginTop: 3,
                                        textAlign: "center"
                                    }}
                                >blocked</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </View>
        </View>
    )
}