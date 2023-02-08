import {Button, FormControl, Input} from 'native-base';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import OtrixDivider from '../Component/OtrixDivider';

export default function Login(props) {
  const [formData, setData] = React.useState({});

  return (
    <View style={{flex: 1, backgroundColor: '#fff' , justifyContent:'center'}}>
      <Image
        resizeMode="contain"
        source={require('../Assets/Images/logo.png')}
        style={{
        //   width: wp('50%'),
        //   height: wp('80%'),
          alignSelf: 'center',
        }}
      />
      <OtrixDivider size={'xl'} />
      <View>
        <FormControl isRequired style={[styles.MainFormSyle]}>
          <Input
            value={formData.email}
            variant="outline"
            placeholder="Supervisor"
            width={wp('90%')}
            style={[styles.textInputStyle]}
            onChangeText={value => setData({...formData, email: value})}
          />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
            Error Name
          </FormControl.ErrorMessage>
        </FormControl>

        <OtrixDivider size={'md'} />

        <FormControl isRequired style={[styles.MainFormSyle]}>
          <Input
            value={formData.password}
            variant="outline"
            keyboardType="number-pad"
            placeholder="Password"
            width={wp('90%')}
            style={styles.textInputStyle}
            onChangeText={value => setData({...formData, password: value})}
          />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
            {'Please enter valid Mobile Number'}
          </FormControl.ErrorMessage>
        </FormControl>
        <OtrixDivider size={'lg'} />

        <Button
          size="md"
          variant="solid"
          bg={'#000'}
          style={[styles.button]}
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Text style={[styles.buttonText]}>Login Now</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainFormSyle: {
    marginHorizontal: wp('5%'),
  },
  textInputStyle: {
    height: wp('11%'),
    backgroundColor: 'white',
    fontSize: wp('3.2%'),
    color: 'silver',
    padding: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: wp('3.5%'),
  },
  button: {
    height: wp('11%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    marginHorizontal: wp('5%'),
  },
});
