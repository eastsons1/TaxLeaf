import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import StepIndicator from 'react-native-step-indicator';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/EvilIcons'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import CheckBox from '@react-native-community/checkbox';
import { Color } from '../Style';

const ClientSteps = () => {
    const labels = ["ABOUT YOURSELF", "REFERRAL SOURCE", "PAYMENT METHOD", "ASSOCIATIONS IF CORRECT", "CURRENT PROFESSION", "ARE YOU INTRESTED IN ANY OF THE BELOW"];
    const labels1 = ["ABOUT YOURSELF", " ", " ", "  ", " ", " "];
    const labels2 = [" ", "REFERRAL SOURCE", " ", "  ", " ", " "];
    const labels3 = ["", " ", "PAYMENT METHOD", "  ", " ", " "];
    const labels4 = ["", " ", " ", "ASSOCIATIONS IF CORRECT", " ", " "];
    const labels5 = ["", " ", " ", "  ", "CURRENT PROFESSION ", " "];
    const labels6 = ["", " ", " ", "  ", " ", "INTERESTS"];
    const [position, setPosition] = useState(0)
    console.log(position, 'position')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)
    const [toggleCheckBox5, setToggleCheckBox5] = useState(false)
    const [toggleCheckBox6, setToggleCheckBox6] = useState(false)
    const [toggleCheckBox7, setToggleCheckBox7] = useState(false)

    const [toggleCheckBoxInt, setToggleCheckBoxInt] = useState(false)
    const [toggleCheckBoxInt1, setToggleCheckBoxInt1] = useState(false)
    const [toggleCheckBoxInt2, setToggleCheckBoxInt2] = useState(false)
    const [toggleCheckBoxInt3, setToggleCheckBoxInt3] = useState(false)
    const [toggleCheckBoxInt4, setToggleCheckBoxInt4] = useState(false)
    const [toggleCheckBoxInt5, setToggleCheckBoxInt5] = useState(false)
    const [toggleCheckBoxInt6, setToggleCheckBoxInt6] = useState(false)
    const [toggleCheckBoxInt7, setToggleCheckBoxInt7] = useState(false)
    const [isChecked, setChecked] = useState(false);
    const [firstname, setFirstName] = useState(false);
    const [lastname, setLastName] = useState(false);
    const [email, setEmail] = useState(false);
    const [whatnumber, setWhatNumber] = useState(false);
    const [banknumber, setBankNumber] = useState(false);
    const [accountnum, setAccountNum] = useState(false);
    const [currentac, setCurrentAc] = useState(false);
    const [routingnum, setRoutingNum] = useState(false);

    const customStyles = {
        stepIndicatorSize: 30,
        currentStepIndicatorSize: 65,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 0,
        stepStrokeCurrentColor: '#ffff',
        stepStrokeWidth: 0,
        stepStrokeFinishedColor: '#fffff',
        stepStrokeUnFinishedColor: '#fffff',
        separatorFinishedColor: '#2F4050',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#3d8087',
        stepIndicatorUnFinishedColor: '#3d8087',
        stepIndicatorCurrentColor:Color.green,
        stepIndicatorLabelFontSize: 14,
        currentStepIndicatorLabelFontSize: 12,
        stepIndicatorLabelCurrentColor: '#fffff',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#ffffff',
        labelColor: '#fff',
        labelSize: 8,
    
        currentStepLabelColor: Color.darkGreen,
        labelFontFamily	:'Poppins-Bold'
    }
    const onPageChange = (position) => {
        setPosition(position);
    }

    //console.log(position, 'position')
    const icons = [
        require("../Assets/img/icons/userGreen.png"),
        require("../Assets/img/icons/connectUser.png"),
        require("../Assets/img/icons/dollarGreen.png"),
        require("../Assets/img/icons/handShake.png"),
        require("../Assets/img/icons/profGreen.png"),
        require("../Assets/img/icons/mind.png")
    ];
    const bgImage = require("../Assets/img/stepsBG.png")
    // let iconNm = require('../Assets/img/icons/msg.png');

    const renderStepIndicator = params => {
        console.log(params,'pppppp')

        return (
            

            <View style={styles.customStep}>
                {
                    params.position == 0 && params.stepStatus == "current" ?
                        <Image source={icons[params?.position]} style={{ width: 60, height: 60 }} />
                        :
                        params.position == 1 && params.stepStatus == "current" ?
                        <Image source={icons[params?.position]} style={{ width: 60, height: 60 }} />
                        :
                        params.position == 2 && params.stepStatus == "current" ?
                        <Image source={icons[params?.position]} style={{ width: 60, height: 60 }} />
                        :
                        params.position == 3 && params.stepStatus == "current" ?
                        <Image source={icons[params?.position]} style={{ width: 60, height: 60 }} />
                        :
                        params.position == 4 && params.stepStatus == "current" ?
                        <Image source={icons[params?.position]} style={{ width: 60, height: 60 }} />
                        :
                        params.position == 5 && params.stepStatus == "current" ?
                        <Image source={icons[params?.position]} style={{ width: 50, height: 50 }} />
                        :
                        <Text style={{ color: params.stepStatus === 'finished' ? '#ffffff' : '#ffffff' }}>
                            {params.position + 1}
                        </Text>
                }

                {/* <Icon3 name={icons[params?.position]} size={15} color="#8AB645" /> */}

            </View>
        )
    };
    return (
        <ImageBackground source={bgImage} style={styles.bgImg} resizeMode='cover'>
            <View style={styles.headBG}>
                <Text style={{ textAlign: 'center', color: '#fff', fontFamily:'Poppins-SemiBold', marginVertical: 14 }}>PLEASE CONFIRM THE FOLLOWING INFORMATION IS CORRECT TO BEGIN</Text>
            </View>
            <View style={{ width: wp(90), alignSelf: 'center',justifyContent:"center", }}>
                <View style={styles.step}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={position}

                        labels={position == 0 ? labels1 : position == 1 ? labels2 : position == 2 ? labels3 : position == 3 ? labels4 : position == 4 ? labels5 : position == 5 ? labels6 : labels}
                        onPress={onPageChange}
                        stepCount={6}
                        renderStepIndicator={renderStepIndicator}
                    />
                </View>
              
                <View style={styles.subContainer}>
                <ScrollView style={{height:hp(55),}}>

                    {(() => {
                        if (position == 0) {
                            return (
                                // <ScrollView>
                                <View style={styles.subContainer1}>
                                    <View style={styles.HeadingContainer
                                       
                                             
                                             }>
                                        {/* <Icon1
                                        style={[
                                            styles.icon,
                                            {
                                                color: '#2F4050',
                                                marginTop:3
                                            },
                                        ]}
                                        name="user"
                                        size={40}
                                        color="#fff"
                                    /> */}
                                        <Text style={styles.subHead}>Contact Information</Text>
                                        <Text style={styles.subHead}>STEP 1</Text>
                                    </View>
                                    <View style={{ backgroundColor: '#f4f8f9', height: hp(37), width: '100%', alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                        <TextInput
                                            placeholder='First Name'
                                            value={firstname}
                                            onChangeText={text => {
                                              onChangeEmail(text);
                                            }}
                                            style={[styles.input, { marginTop: 20 }]}
                                        />
                                        <TextInput
                                            placeholder='Last Name'
                                            style={styles.input}

                                        />
                                        <TextInput
                                            placeholder='Email Address'
                                            style={styles.input}

                                        />
                                        <TextInput
                                            placeholder='Mobile Number'
                                            style={styles.input}

                                        />
                                        <TextInput
                                            placeholder='Whatsapp Number'
                                            style={styles.input}

                                        />
                                    </View>
                                    <TouchableOpacity style={styles.btn} onPress={() => { onPageChange(1) }}>
                                        <Icon
                                            style={[
                                                styles.icon,
                                                {
                                                    color: '#fff',
                                                },
                                            ]}
                                            name="play"
                                            size={25}
                                            color="#fff"
                                        />
                                        <Text style={styles.ConfirmButton}>Confirm</Text>


                                    </TouchableOpacity>

                                </View>
                                // </ScrollView>
                            );
                        } else if (position == 1) {
                            return (
                                <ScrollView>
                                    <View style={styles.subContainer1}>
                                    <View style={styles.HeadingContainer}>
                                            {/* <Icon1
                                        style={[
                                            styles.icon,
                                            {
                                                color: '#2F4050',
                                                marginTop:3
                                            },
                                        ]}
                                        name="user"
                                        size={40}
                                        color="#fff"
                                    /> */}
                                            <Text style={styles.subHead}>Referral Source and Medium</Text>
                                            <Text style={styles.subHead}>STEP 2</Text>
                                        </View>

                                        <View style={styles.refContent}>
                                            <Text style={{ fontSize: 20,fontFamily:'Poppins-SemiBold',color:"#243859",fontSize:16 }}>WE ARE GETTING YOU FROM </Text>
                                            <Text style={{ backgroundColor: Color.green,fontFamily:'Poppins-SemiBold', color:"#243859",padding:5,fontSize:16 }}>Website</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            {/* <TouchableOpacity style={styles.btnPrev}
                                            onPress={() => { onPageChange(0) }}
                                        >
                                            <Icon
                                                style={[
                                                    styles.icon,
                                                    {
                                                        color: '#fff',
                                                    },
                                                ]}
                                                name="arrowleft"
                                                size={20}
                                                color="#fff"
                                            />
                                            <Text style={{ color: '#fff', fontSize: 15 }}>Previous</Text>
                                        </TouchableOpacity> */}
                                            <TouchableOpacity style={styles.btn} onPress={() => { onPageChange(2) }}>
                                            <Icon
                                            style={[
                                                styles.icon,
                                                {
                                                    color: '#fff',
                                                },
                                            ]}
                                            name="play"
                                            size={25}
                                            color="#fff"
                                        />
                                        <Text style={styles.ConfirmButton}>Confirm</Text>

                                            </TouchableOpacity>
                                        </View>


                                    </View>
                                </ScrollView>
                            );
                        } else if (position == 2) {
                            return (
                                // <ScrollView>
                                <View style={styles.subContainer1}>
                                    <View style={styles.HeadingContainer}>  
                                        {/* <Icon1
                                        style={[
                                            styles.icon,
                                            {
                                                color: '#2F4050',
                                                marginTop:3
                                            },
                                        ]}
                                        name="user"
                                        size={40}
                                        color="#fff"
                                    /> */}
                                        <Text style={styles.subHead}>Payment Method</Text>
                                        <Text style={styles.subHead}>STEP 3</Text>
                                    </View>
                                    <View style={{ backgroundColor: '#f4f8f9', height: hp(35), width: '100%', alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                        <TextInput
                                            placeholder='Bank Name'
                                            style={[styles.input, { marginTop: 20 }]}

                                        />
                                            <TextInput
                                            placeholder='Account Number'
                                            style={styles.input}

                                        />
                                        <TextInput
                                            placeholder='Current Account'
                                            style={styles.input}

                                        />
                                    
                                        <TextInput
                                            placeholder='Routing Number'
                                            style={styles.input}

                                        />
                                    </View>





                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                        {/* <TouchableOpacity style={styles.btnPrev}
                                        onPress={() => { onPageChange(1) }}
                                    >
                                        <Icon
                                            style={[
                                                styles.icon,
                                                {
                                                    color: '#fff',
                                                },
                                            ]}
                                            name="arrowleft"
                                            size={20}
                                            color="#fff"
                                        />
                                        <Text style={{ color: '#fff' }}>Previous</Text>
                                    </TouchableOpacity> */}
                                        <TouchableOpacity style={styles.btn} onPress={() => { onPageChange(3) }}>
                                        <Icon
                                            style={[
                                                styles.icon,
                                                {
                                                    color: '#fff',
                                                },
                                            ]}
                                            name="play"
                                            size={25}
                                            color="#fff"
                                        />
                                        <Text style={styles.ConfirmButton}>Confirm</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                                // </ScrollView>
                            );
                        } else if (position == 3) {
                            return (
                                <ScrollView>
                                    <View style={styles.subContainer1}>
                                    <View style={styles.HeadingContainer}>
                                            {/* <Icon1
                                        style={[
                                            styles.icon,
                                            {
                                                color: '#2F4050',
                                                marginTop:3
                                            },
                                        ]}
                                        name="user"
                                        size={40}
                                        color="#fff"
                                    /> */}
                                            <Text style={styles.subHead}>Associations if Correct</Text>
                                            <Text style={styles.subHead}>STEP 4</Text>
                                        </View>
                                        <View style={{ backgroundColor: '#fff', height: hp(35), width: '100%', alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                            <View style={styles.contentView}>
                                                <Text style={styles.clientAssoc}>Client Name 1</Text>


                                            </View>
                                            <View style={styles.contentView}>
                                                <Text style={styles.clientAssoc}>Client Name 2</Text>


                                            </View>

                                            <View style={styles.contentView}>
                                                <Text style={styles.clientAssoc}>Client Name 3</Text>


                                            </View>
                                            <View style={styles.contentView}>
                                                <Text style={styles.clientAssoc}>Client Name 4</Text>


                                            </View>
                                            <View style={styles.contentView}>
                                                <Text style={styles.clientAssoc}>Client Name 5</Text>


                                            </View>
                                            <View style={styles.contentView}>
                                                <Text style={styles.clientAssoc}>Client Name 6</Text>


                                            </View>
                                        </View>





                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            {/* <TouchableOpacity style={styles.btnPrev}
                                            onPress={() => { onPageChange(2) }}
                                        >
                                            <Icon
                                                style={[
                                                    styles.icon,
                                                    {
                                                        color: '#fff',
                                                    },
                                                ]}
                                                name="arrowleft"
                                                size={20}
                                                color="#fff"
                                            />
                                            <Text style={{ color: '#fff' }}>Previous</Text>
                                        </TouchableOpacity> */}
                                            <TouchableOpacity style={styles.btn} onPress={() => { onPageChange(4) }}>
                                            <Icon
                                            style={[
                                                styles.icon,
                                                {
                                                    color: '#fff',
                                                },
                                            ]}
                                            name="play"
                                            size={25}
                                            color="#fff"
                                        />
                                        <Text style={styles.ConfirmButton}>Confirm</Text>

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ScrollView>
                            );
                        } else if (position == 4) {
                            return (
                                <ScrollView>
                                    <View style={styles.subContainerProf}>
                                    <View style={styles.HeadingContainer}>
                                           {/* <Icon3
                                            style={[
                                                styles.icon,
                                                {
                                                    color: '#2F4050',
                                                    marginLeft: 10,
                                                    marginRight: 10,
                                                    marginTop: 3
                                                },
                                            ]}
                                            name="suitcase"
                                            size={30}
                                            color="#fff"
                                        /> */}
                                            <Text style={styles.subHead}>Current Profession</Text>
                                            <Text style={styles.subHead}>STEP 5</Text>
                                        </View>
                                        <View style={{ backgroundColor: '#fff', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                            <View style={styles.contentView}>
                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBox}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                                    />
                                                    <Text style={styles.ProfesstionList} >

                                                        Accountant</Text>
                                                </View>


                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBox1}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                                                    />
                                                   <Text style={styles.ProfesstionList} >
                                                        Author
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBox2}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                                                    />
                                                   <Text style={styles.ProfesstionList} >
                                                       Dentist
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBox3}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBox3(newValue)}
                                                    />
                                                 <Text style={styles.ProfesstionList} >
                                                       Doctor
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBox4}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBox4(newValue)}
                                                    />
                                                   <Text style={styles.ProfesstionList} >
                                                       Journalist
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBox5}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBox5(newValue)}
                                                    />
                                                  <Text style={styles.ProfesstionList} >
                                                        Lawyer
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBox6}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBox6(newValue)}
                                                    />
                                                   <Text style={styles.ProfesstionList} >
                                                       Musician
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBox7}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBox7(newValue)}
                                                    />
                                                   <Text style={styles.ProfesstionList} >
                                                       Plumber
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            {/* <TouchableOpacity style={styles.btnPrev}
                                            onPress={() => { onPageChange(3) }}
                                        >
                                            <Icon
                                                style={[
                                                    styles.icon,
                                                    {
                                                        color: '#fff',
                                                    },
                                                ]}
                                                name="arrowleft"
                                                size={20}
                                                color="#fff"
                                            />
                                            <Text style={{ color: '#fff' }}>Previous</Text>
                                        </TouchableOpacity> */}
                                            <TouchableOpacity style={styles.btn} onPress={() => { onPageChange(5) }}>
                                            <Icon
                                            style={[
                                                styles.icon,
                                                {
                                                    color: '#fff',
                                                },
                                            ]}
                                            name="play"
                                            size={25}
                                            color="#fff"
                                        />
                                        <Text style={styles.ConfirmButton}>Confirm</Text>

                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </ScrollView>
                            );
                        } else {
                            return (
                                <ScrollView>
                                    <View style={styles.subContainerInterest}>
                                    <View style={styles.HeadingContainer}>
                                            {/* <Icon3
                                            style={[
                                                styles.icon,
                                                {
                                                    color: '#2F4050',
                                                    marginLeft: 10,
                                                    marginRight: 10,
                                                    marginTop: 3
                                                },
                                            ]}
                                            name="suitcase"
                                            size={30}
                                            color="#fff"
                                        /> */}
                                            <Text style={styles.subHead}>Interests</Text>
                                            <Text style={styles.subHead}>STEP 6</Text>
                                        </View>


                                        <View style={{ backgroundColor: '#fff', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                            <View style={styles.contentView}>
                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBoxInt}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBoxInt(newValue)}
                                                    />
                                                   <Text style={styles.ProfesstionList} >

                                                        Buy Real Estate</Text>
                                                </View>


                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBoxInt1}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBoxInt1(newValue)}
                                                    />
                                                    <Text style={styles.ProfesstionList} >
                                                        Sell Real Estate
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBoxInt2}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBoxInt2(newValue)}
                                                    />
                                                    <Text style={styles.ProfesstionList} >
                                                        Need a Loan or Mortgage
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBoxInt3}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBoxInt3(newValue)}
                                                    />
                                                   <Text style={styles.ProfesstionList} >
                                                        Business Legal Services
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBoxInt4}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBoxInt4(newValue)}
                                                    />
                                                    <Text style={styles.ProfesstionList} >
                                                        Immigration Legal Services
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBoxInt5}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBoxInt5(newValue)}
                                                    />
                                                    <Text style={styles.ProfesstionList} >
                                                        Real Estate Legal Services or Closings
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBoxInt6}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBoxInt6(newValue)}
                                                    />
                                                    <Text style={styles.ProfesstionList} >
                                                        Insurance Services
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.contentView}>

                                                <View style={styles.client}>

                                                    <CheckBox
                                                        disabled={false}
                                                        value={toggleCheckBoxInt7}
                                                        tintColors={{ true: 'white', false: 'white' }}
                                                        onValueChange={(newValue) => setToggleCheckBoxInt7(newValue)}
                                                    />

                                                        <Text style={styles.ProfesstionList} >
                                                        Buy an Existing Business
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            {/* <TouchableOpacity style={styles.btnPrev}
                                            onPress={() => { onPageChange(3) }}
                                        >
                                            <Icon
                                                style={[
                                                    styles.icon,
                                                    {
                                                        color: '#fff',
                                                    },
                                                ]}
                                                name="arrowleft"
                                                size={20}
                                                color="#fff"
                                            />
                                            <Text style={{ color: '#fff' }}>Previous</Text>
                                        </TouchableOpacity> */}
                                            <TouchableOpacity style={styles.btn} onPress={() => { onPageChange(5) }}>
                                            <Icon
                                            style={[
                                                styles.icon,
                                                {
                                                    color: '#fff',
                                                },
                                            ]}
                                            name="play"
                                            size={25}
                                            color="#fff"
                                        />
                                        <Text style={styles.ConfirmButton}>Confirm</Text>

                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </ScrollView>
                            );
                        }
                    })()}
                 </ScrollView>
                </View>
              
            </View>
        </ImageBackground>

    )
}

export default ClientSteps

const styles = StyleSheet.create({
    subContainer: {
        // backgroundColor: '#fff',
        width: wp(95),
      //  height: hp(80),
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        // height: 250,
        borderRadius: 10,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.27,
        // shadowRadius: 4.65,

        // elevation: 6,
    },
    subHead: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 5,
         fontFamily: 'Poppins-Bold',
        color: '#fff'
    },
    subHead1: {
        alignSelf: 'flex-start',
        fontSize: 17,
        fontWeight: '700',
        marginTop: 5
    },
    subContainer1: {
        // backgroundColor: 'red',
        width: wp(95),
        // height:hp(10),
        alignSelf: 'center',
      //  marginTop: 10,
        alignItems: 'center',
        // height: 200,
        borderRadius: 10,

    },
    HeadingContainer:{
        fontSize:12,
        fontFamily:'Poppins-SemiBold', 
        flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems:"center",
         height:40, 
         backgroundColor: Color.green,
          width: '100%',
            paddingHorizontal: 10
    },
    subContainerProf: {
        // backgroundColor: 'red',
        width: wp(95),
        // height:hp(10),
        alignSelf: 'center',
        // marginTop: 10,
        alignItems: 'center',
        // height: 200,
        borderRadius: 10,

    },
    subContainerInterest: {
        // backgroundColor: 'red',
        width: wp(95),
        // height:hp(10),
        alignSelf: 'center',
        // marginTop: 10,
        alignItems: 'center',
        // height: 200,
        borderRadius: 10,

    },
    btn: {
        width: wp(35),
         height: hp(6),
        //alignSelf: 'center',
         justifyContent: 'center',
        
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 15,
        backgroundColor: '#8AB645',
        borderRadius: 30,
       // padding: 10,
     // paddingBottom
        alignItems: 'center',
       // marginRight: 10
    },
    ConfirmButton:{
        color: '#fff',
         marginLeft: 10, 
         fontSize: 14,
         fontFamily:'Poppins-SemiBold'
    },
    btnInterest: {
        width: wp(28),
        height: hp(5.5),
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 20,
        backgroundColor: '#8AB645',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginRight: 10
    },
    btnPrev: {
        width: wp(28),
        height: hp(7),
        alignSelf: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        backgroundColor: '#8AB645',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginRight: 80
    },

    input: {
        height: 40,
        marginBottom: 10,
        justifyContent:"center",
        fontSize:12,
        borderColor:'#f3f3f3',
         borderWidth: 1,
        // borderRadius: 10,
        padding: 10,
           fontFamily:'Poppins-SemiBold', 
        width: wp(90),
        backgroundColor: '#fff',
        borderRadius: 20
    },

    contentView: {
        //  backgroundColor: '#fff',
        // marginTop: 10,
        // padding: 10,
        flexDirection: 'row',
        marginTop:10,
        width:wp(100),
        alignItems:'center',
        justifyContent:'center',
    },


    client: {
        backgroundColor: '#39aab8',
        borderRadius: 25,
        color: '#fff',
        // padding: 5,
        width:wp(90),
        height: hp(4),
        // marginRight: 10,
        flexDirection: 'row',
        textAlign: 'center',
        // paddingBottom: 20
    },
    clientAssoc: {
        backgroundColor: '#39aab8',
        borderRadius: 25,
        color: '#fff',
        fontFamily:'Poppins-SemiBold',
        padding: 5,
        width: wp(90),
    
     fontSize:12,
        // marginRight: 10,
       alignSelf:"center",
        textAlign: 'center',
        // paddingBottom: 20
    },

    ProfesstionList: {
        backgroundColor: '#39aab8',
        borderRadius: 25,
        color: '#fff',
        fontFamily:'Poppins-SemiBold',
        padding: 5,
      
        width:wp(80),
          fontSize:12,
        // marginRight: 10,
     
        textAlign: 'center',
        // paddingBottom: 20
    },
    
    client1: {
        // backgroundColor: '#2596be',
        // borderRadius: 20,
        color: '#fff',
        padding: 5,
        width: 130,
        textAlign: 'center',
        marginRight: 30,
        flexDirection: 'row'
    },
    step: {
        marginTop: 10,
       
    },
    checkText: {
        color: '#000', fontFamily: 'Poppins-Light', fontSize: 12
    },
    refContent: {
        marginBottom: 20,
         height: hp(30),
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    headBG: {
        backgroundColor: "#3d8087"
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 17,
        height: 17,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // customStep: {
    //     width: 40,
    //     height: 40,
    //     borderRadius: 20,
    //     backgroundColor: '#4aae4f',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }

})