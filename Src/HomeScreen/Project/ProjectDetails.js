import { Select } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import OtrixDivider from '../../Component/OtrixDivider';

import { AppStyles } from '../../AppStyle/AppStyle';

export default function HomeDetail(props) {
    const [gender, setGender] = React.useState('');

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
                    <Ionicons onPress={()=> props.navigation.goBack()} name='arrow-back-outline' color='black' size={20} />
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
                    >Project 1</Text>
                </View>

            </View>
            <OtrixDivider size={'md'} />
            <View style={{
                flex: 1,
                paddingHorizontal: 10
            }}>
                <View style={{
                    backgroundColor: AppStyles.color.primaryColor,
                    elevation: 4,
                    borderRadius: 6
                }}>
                    <View style={{
                        padding: "4%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: AppStyles.color.primaryLight,
                        borderTopRightRadius: 6,
                        borderTopLeftRadius: 6,
                    }}>
                        <Text
                            style={{
                                fontSize: AppStyles.fontSize.normal,
                                fontFamily: AppStyles.fontName.bold,
                                color: AppStyles.color.textColor,

                            }}
                        >This week</Text>
                        <Text
                            style={{
                                fontSize: AppStyles.fontSize.small,
                                fontFamily: AppStyles.fontName.main,
                                // color: AppStyles.color.textColor,

                            }}
                        >10 hour 18 min</Text>

                    </View>
                    <View style={{

                        padding: "4%",
                        paddingVertical: "5%",


                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Progress.Bar
                                color="green"
                                progress={0.8}
                                borderRadius={50}
                                height={15}
                                width={200}
                                borderWidth={2}
                            />
                            <View style={{
                                justifyContent: "center"
                            }}>
                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.main,
                                    }}
                                >2 hour 5 min</Text>
                            </View>


                        </View>
                        <OtrixDivider size={'md'} />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Progress.Bar
                                // color="green"
                                progress={0.5}
                                borderRadius={50}
                                height={15}
                                width={200}
                                borderWidth={2}
                            />
                            <View style={{
                                justifyContent: "center"
                            }}>
                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.main,
                                    }}
                                >4 hour 18 min</Text>
                            </View>


                        </View>
                        <OtrixDivider size={'md'} />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Progress.Bar
                                color="red"
                                progress={0.2}
                                borderRadius={50}
                                height={15}
                                width={200}
                                borderWidth={2}
                            />
                            <View style={{
                                justifyContent: "center"
                            }}>
                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.main,
                                    }}
                                >10 hour 18 min</Text>
                            </View>


                        </View>
                        <OtrixDivider size={'md'} />
                        <View style={{ alignItems: "center" }}>
                            <Select
                                dropdownIcon={
                                    <MaterialIcons
                                        name="unfold-more"
                                        size={wp('5%')}
                                        color={'rgba(44, 48, 56, 0.5)'}

                                    />
                                }
                                width={wp('85%')}
                                style={{
                                    fontSize: hp('1.6%'),
                                    fontFamily: 'Poppins-Regular',
                                    color: 'rgba(44, 48, 56, 0.8)',
                                }}
                                placeholder="Select the Product"
                                selectedValue={gender}
                                onValueChange={itemValue => {
                                    setGender(itemValue);
                                    props.navigation.navigate('PerPieceDetail');
                                }}>
                                <Select.Item label="PIECE 1" value="key0" />
                                <Select.Item label="PIECE 2" value="key1" />
                                <Select.Item label="PIECE 3" value="key2" />
                            </Select>
                        </View>
                        <OtrixDivider size={'sm'} />
                    </View>
                </View>
                <OtrixDivider size={'md'} />
                <View style={{
                    backgroundColor: AppStyles.color.primaryColor,
                    elevation: 4,
                    borderRadius: 6
                }}>
                    <View style={{
                        padding: "4%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: AppStyles.color.primaryLight,
                        borderTopRightRadius: 6,
                        borderTopLeftRadius: 6,
                    }}>
                        <Text
                            style={{
                                fontSize: AppStyles.fontSize.normal,
                                fontFamily: AppStyles.fontName.bold,
                                color: AppStyles.color.textColor,

                            }}
                        >Previous week</Text>
                        <Text
                            style={{
                                fontSize: AppStyles.fontSize.small,
                                fontFamily: AppStyles.fontName.main,
                                // color: AppStyles.color.textColor,

                            }}
                        >10 hour 18 min</Text>

                    </View>
                    <View style={{

                        padding: "4%",
                        paddingVertical: "5%",


                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Progress.Bar
                                color="green"
                                progress={0.6}
                                borderRadius={50}
                                height={15}
                                width={200}
                                borderWidth={2}
                            />
                            <View style={{
                                justifyContent: "center"
                            }}>
                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.main,
                                    }}
                                >2 hour 5 min</Text>
                            </View>


                        </View>
                        <OtrixDivider size={'md'} />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Progress.Bar
                                // color="green"
                                progress={0.5}
                                borderRadius={50}
                                height={15}
                                width={200}
                                borderWidth={2}
                            />
                            <View style={{
                                justifyContent: "center"
                            }}>
                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.main,
                                    }}
                                >4 hour 18 min</Text>
                            </View>


                        </View>
                        <OtrixDivider size={'md'} />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Progress.Bar
                                color="red"
                                progress={0.4}
                                borderRadius={50}
                                height={15}
                                width={200}
                                borderWidth={2}
                            />
                            <View style={{
                                justifyContent: "center"
                            }}>
                                <Text
                                    style={{
                                        fontSize: AppStyles.fontSize.small,
                                        fontFamily: AppStyles.fontName.main,
                                    }}
                                >10 hour 18 min</Text>
                            </View>


                        </View>
                        <OtrixDivider size={'md'} />
                        <View style={{ alignItems: "center" }}>
                            <Select
                                dropdownIcon={
                                    <MaterialIcons
                                        name="unfold-more"
                                        size={wp('5%')}
                                        color={'rgba(44, 48, 56, 0.5)'}

                                    />
                                }
                                width={wp('85%')}
                                style={{
                                    fontSize: hp('1.6%'),
                                    fontFamily: 'Poppins-Regular',
                                    color: 'rgba(44, 48, 56, 0.8)',
                                }}
                                placeholder="Select the Product"
                                selectedValue={gender}
                                onValueChange={itemValue => {
                                    setGender(itemValue);
                                    props.navigation.navigate('PerPieceDetail');
                                }}>
                                <Select.Item label="PIECE 1" value="key0" />
                                <Select.Item label="PIECE 2" value="key1" />
                                <Select.Item label="PIECE 3" value="key2" />
                            </Select>
                        </View>
                        <OtrixDivider size={'sm'} />
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({});
