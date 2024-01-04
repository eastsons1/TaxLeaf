import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
    Button,
    Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/FontAwesome6';
import { dashboardlist, dashboardlist2 } from '../Redux/Actions/Dashboard';
import { Color } from '../Style';
import { useDispatch, useSelector } from 'react-redux';
import { clientInfo, ManagerInfo } from '../Redux/Actions/TaxLeaf';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Loader } from '../Component/Loader';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HeadTabs = () => {
    const [showwhat1, setshowwhat1] = useState('');
    const [showwhat2, setshowwhat2] = useState('');
    const [loader, setLoader] = useState(false);
    const [infoData, setInfoData] = useState({});
    const [dashboardList, setDashboardList] = useState([]);
    const [dashboardList2, setDashboardList2] = useState([]);
    const [dashboardMessageList, setDashboardMessageList] = useState([]);
    const { MY_INFO } = useSelector(state => state.TaxLeafReducer);
    const { DASHBOARD_LIST } = useSelector(state => state.DashboardReducer);
    const { DASHBOARD_MESSAGE_LIST } = useSelector(state => state.DashboardReducer);
    const { DASHBOARD_LIST_TWO } = useSelector(state => state.DashboardReducer);
    const { MANAGER_INFO } = useSelector(state => state.TaxLeafReducer);
    const { LOGIN_DATA } = useSelector(state => state.TaxLeafReducer);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const jsonData = MY_INFO.guestInfo;
    const officeInfo = MY_INFO.officeInfo;


    //console.log(jsonData?.clientId, jsonData?.clientType, 'jsonDatajsonDatajsonDatajsonData')

    const showwhatfunc1 = data => {
        setshowwhat1(data);
        console.log(data,'showwhat1showwhat1showwhat1');
    };
    const showwhatfunc2 = data => {
        setshowwhat2(data);
        console.log(data,'showwhat2showwhat2');
    };

    useEffect(() => {
        setLoader(true);

        dispatch(clientInfo(LOGIN_DATA, navigation))
            .then(() => dispatch(dashboardlist(jsonData?.clientId, jsonData?.clientType, officeInfo?.id, navigation)))
            .then(() => dispatch(dashboardlist2(jsonData?.clientId, jsonData?.clientType, officeInfo?.id, navigation)))
            .then(() => dispatch(ManagerInfo(jsonData?.clientId, jsonData?.clientType, navigation)))
            .finally(() => {
                setLoader(false);
            });
    }, [LOGIN_DATA, jsonData?.clientId, jsonData?.clientType, officeInfo?.id]);

   

    useEffect(() => {
        setDashboardList(DASHBOARD_LIST);
        setDashboardList2(DASHBOARD_LIST_TWO);
        setDashboardMessageList(DASHBOARD_MESSAGE_LIST);
    }, [DASHBOARD_LIST, DASHBOARD_MESSAGE_LIST, DASHBOARD_LIST_TWO]);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // setLoader(true);
         console.log("HeadTAbsHeadTAbs")
        // showwhatfunc1(showwhat1)
          setshowwhat1("")
          setshowwhat2("")
          // setTimeout(() => {
          //   setLoader(false);
          // }, 2000);
    
        });
        return unsubscribe;
      }, [navigation,]);
    

    const HolidaysNewsType = 'Holidays';
    const TaxNewsType = 'Tax Deadlines';
    const EventsType = 'Events';
    const OrderType = 'order';
    const GovernmentType = 'government_payment';
    const TaxReturnsType = 'tax_returns';
    const BookKeepingType = 'bookkeeping';
    const HolidaysfilteredList =
        dashboardList &&
        dashboardList.filter(item => item.newsType === HolidaysNewsType);

    const TaxfilteredList =
        dashboardList &&
        dashboardList.filter(item => item.newsType === TaxNewsType);

    const EventsfilteredList =
        dashboardList &&
        dashboardList.filter(item => item.newsType === EventsType);


    const orderfilteredList =
        dashboardList2 &&
        dashboardList2.filter(item => item.section === OrderType);

    const GovfilteredList =
        dashboardList2 &&
        dashboardList2.filter(item => item.reference === GovernmentType);

    const taxreturnfilteredList =
        dashboardList2 &&
        dashboardList2.filter(item => item.reference === TaxReturnsType);

    const BookKeepingfilteredList =
        dashboardList2 &&
        dashboardList2.filter(item => item.reference === BookKeepingType);




    // console.log(TaxfilteredList, 'TaxfilteredListt')
    return (
        <View style={{ marginTop: 5 }}>
            <View style={styles.tabsContainer}>
                <View style={styles.mainTab}>
                    {(() => {
                        if (showwhat1 == 'Message') {
                            return (
                                <View style={styles.moblieSec}>
                                    {/* <View style={{ flexDirection: "column", justifyContent: 'space-between' }}> */}
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.emailtoch,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Message' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Message'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Message'), showwhatfunc2(''))
                                            }>
                                           <Image
                                                    source={ require('../Assets/img/icons/tax.png')}
                              style={  [styles.icon,]}
                              />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.IconTextColor
                                                            : Color.IconTextColor,
                                                },
                                            ]}>
                                            Tax Deadlines1
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>

                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Proposal' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Proposal'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Proposal'), showwhatfunc2(''))
                                            }>
                                            <Image
                                                    source={ require('../Assets/img/icons/message.png')}
                              style={  styles.icon}
                              />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Messages
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>

                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Signature' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Signature'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Signature'), showwhatfunc2(''))
                                            }>
                                             <Image
                                                    source={ require('../Assets/img/icons/events.png')}
                                                    style={  [styles.icon,]}
                              />


                                          
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Events
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>

                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Reminders' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Reminders'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Reminders'), showwhatfunc2(''))
                                            }>
                                                <Image
                                                    source={ require('../Assets/img/icons/holidayicon.png')}
                              style={  styles.icon}
                               
                            />

                                            {/* <Icon2
                                                style={[
                                                    styles.icon,
                                                    {
                                                        color:
                                                            showwhat1 == 'Reminders'
                                                                ? Color.white
                                                                : Color.white,
                                                    },
                                                ]}
                                                name="holiday-village"
                                                size={25}
                                                color="#fff"
                                            /> */}


                                            {/* <Text
                        style={[
                          styles.ButtonText,
                          {
                            color:
                              showwhat1 == 'Reminders'
                                ? Color.white
                                : Color.headerIconBG,
                          },
                        ]}>
                        (1)
                      </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Holidays
                                        </Text>
                                    </View>
                                    {/* </View> */}
                                </View>
                            );
                        } else if (showwhat1 == 'Proposal') {
                            return (
                                <View style={styles.moblieSec}>
                                    {/* <View style={{ flexDirection: "column", justifyContent: 'space-between' }}> */}
                                    <View style={styles.TabsContainer}>

                                        <TouchableOpacity
                                            style={[
                                                styles.emailtoch,
                                                {
                                                    backgroundColor:
                                                        // showwhat1 == 'Message' ? '#2F4050' : '#fff',
                                                        showwhat1 == 'Message' ? Color.geen : Color.headerIconBG,

                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Message'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Message'), showwhatfunc2(''))
                                            }>
                                           <Image
                                                    source={ require('../Assets/img/icons/tax.png')}
                                                    style={  [styles.icon,]}
                              />

                                          
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Tax Deadlines
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>

                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Proposal' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Proposal'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Proposal'), showwhatfunc2(''))
                                            }>
                                            <Image
                                                    source={ require('../Assets/img/icons/message.png')}
                              style={  styles.icon}
                              />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Messages
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>

                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Signature' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Signature'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Signature'), showwhatfunc2(''))
                                            }>
                                              <Image
                                                    source={ require('../Assets/img/icons/events.png')}
                                                    style={  [styles.icon,]}
                              />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Events
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>

                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Reminders' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Reminders'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Reminders'), showwhatfunc2(''))
                                            }>
                                           <Image
                                                    source={ require('../Assets/img/icons/holidayicon.png')}
                              style={  styles.icon}
                               
                            />


                                            {/* <Text
                        style={[
                          styles.ButtonText,
                          {
                            color: showwhat1 == 'Reminders' ? '#fff' : '#000',
                          },
                        ]}>
                        (1)
                      </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Holidays
                                        </Text>
                                    </View>
                                    {/* </View> */}
                                </View>
                            );
                        } else if (showwhat1 == 'Signature') {
                            return (
                                <View style={styles.moblieSec}>
                                    {/* <View style={{ flexDirection: "column", justifyContent: 'space-between' }}> */}
                                    <View style={styles.TabsContainer}>

                                        <TouchableOpacity
                                            style={[
                                                styles.emailtoch,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Message' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Message'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Message'), showwhatfunc2(''))
                                            }>
                                            <Image
                                                    source={ require('../Assets/img/icons/tax.png')}
                                                    style={  [styles.icon,]}
                              />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Tax Deadlines
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Proposal' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Proposal'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Proposal'), showwhatfunc2(''))
                                            }>
                                             <Image
                                                    source={ require('../Assets/img/icons/message.png')}
                              style={  styles.icon}
                              />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Messages
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Signature' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Signature'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Signature'), showwhatfunc2(''))
                                            }>
                                             <Image
                                                    source={ require('../Assets/img/icons/events.png')}
                                                    style={  [styles.icon,]}
                              />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Events
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Reminders' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Reminders'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Reminders'), showwhatfunc2(''))
                                            }>
                                           <Image
                                                    source={ require('../Assets/img/icons/holidayicon.png')}
                              style={  styles.icon}
                               
                            />


                                            {/* <Text
                        style={[
                          styles.ButtonText,
                          {
                            color: showwhat1 == 'Reminders' ? '#fff' : '#000',
                          },
                        ]}>
                        (1)
                      </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Holidays
                                        </Text>
                                    </View>
                                    {/* </View> */}
                                </View>
                            );
                        } else {
                            return (
                                <View style={styles.moblieSec}>
                                    {/* <View style={{ flexDirection: "column", justifyContent: 'space-between' }}> */}
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.emailtoch,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Message' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Message'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Message'), showwhatfunc2(''))
                                            }>
                                            <Image
                                                    source={ require('../Assets/img/icons/tax.png')}
                                                    style={  [styles.icon,]}
                              />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Tax Deadlines
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Proposal' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Proposal'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Proposal'), showwhatfunc2(''))
                                            }>
                                            <Image
                                                    source={ require('../Assets/img/icons/message.png')}
                              style={  styles.icon}
                              />


                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Messages
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Signature' ? '#2F4050' : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Signature'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Signature'), showwhatfunc2(''))
                                            }>
                                            <Image
                                                    source={ require('../Assets/img/icons/events.png')}
                                                    style={  [styles.icon,]}
                              />


                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Events1
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch1,
                                                {
                                                    backgroundColor:
                                                        showwhat1 == 'Reminders' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat1 == 'Reminders'
                                                    ? (setshowwhat1(''), setshowwhat2(''))
                                                    : (showwhatfunc1('Reminders'), showwhatfunc2(''))
                                            }>
                                            <Image
                                                    source={ require('../Assets/img/icons/holidayicon.png')}
                              style={  styles.icon}
                               
                            />


                                            {/* <Text
                        style={[
                          styles.ButtonText,
                          {
                            color:
                              showwhat1 == 'Reminders'
                                ? Color.white
                                : Color.headerIconBG,
                          },
                        ]}>
                        (1)
                      </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Holidays
                                        </Text>
                                    </View>
                                    {/* </View> */}
                                </View>
                            );
                        }
                    })()}


                    {(() => {
                        if (showwhat2 == 'orders') {
                            return (
                                <View style={styles.moblieSec}>
                                    {/* <View style={{ flexDirection: "column", justifyContent: 'space-between' }}> */}
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.emailtochO,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'orders' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>

                                                showwhat2 === 'orders'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('orders'), showwhatfunc1(''))
                                            }>

                                            <Image
                                             source={ require('../Assets/img/icons/orders.png')}
                                             style={  styles.icon}
                                             />


                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Orders
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'taxReturn' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() => {
                                                // console.log('showwhat2 before:', showwhat2)
                                                showwhat2 == 'taxReturn'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : showwhatfunc2('taxReturn')
                                                console.log('showwhat2 after:', showwhat2)

                                            }}>
                                             <Image
                                             source={ require('../Assets/img/icons/tax-returns.png')}
                                             style={  styles.icon}
                                             />


                                          
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Tax Returns
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'book' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'book'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('book'), showwhatfunc1(''))
                                            }>
                                             <Image
                                             source={ require('../Assets/img/icons/book-keeping.png')}
                                             style={  styles.icon}
                                             />


                                            {/* <Text
                                                style={[
                                                    styles.ButtonText,
                                                    {
                                                    color:
                                                        showwhat1 == 'Signature'
                                                        ? Color.white
                                                        : Color.headerIconBG,
                                                    },
                                                ]}>
                                                (0)
                                                </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                    marginLeft: 5
                                                },
                                            ]}>
                                            BookKeeping
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'Gov' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'Gov'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('Gov'), showwhatfunc1(''))
                                            }>
                                            <Image
                                             source={ require('../Assets/img/icons/gov-payments.png')}
                                             style={  styles.icon}
                                             />


                                            {/* <Text
                                                style={[
                                                    styles.ButtonText,
                                                    {
                                                    color:
                                                        showwhat1 == 'Reminders'
                                                        ? Color.white
                                                        : Color.headerIconBG,
                                                    },
                                                ]}>
                                                (1)
                                                </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Gov. Payments
                                        </Text>
                                    </View>
                                    {/* </View> */}
                                </View>
                            );
                        } else if (showwhat2 == 'taxReturn') {
                            return (
                                <View style={styles.moblieSec}>
                                    {/* <View style={{ flexDirection: "column", justifyContent: 'space-between' }}> */}
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.emailtochO,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'orders' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'orders'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('orders'), showwhatfunc2(''))
                                            }>
                                            <Image
                                             source={ require('../Assets/img/icons/orders.png')}
                                             style={  styles.icon}
                                             />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Orders
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'taxReturn' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'taxReturn'
                                                    ? setshowwhat2('')
                                                    : showwhatfunc2('taxReturn')
                                            }>
                                             <Image
                                             source={ require('../Assets/img/icons/tax-returns.png')}
                                             style={  styles.icon}
                                             />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Tax Returns
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'book' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'book'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('book'), showwhatfunc1(''))
                                            }>
                                            <Image
                                             source={ require('../Assets/img/icons/book-keeping.png')}
                                             style={  styles.icon}
                                             />


                                            {/* <Text
                      style={[
                        styles.ButtonText,
                        {
                          color:
                            showwhat1 == 'Signature'
                              ? Color.white
                              : Color.headerIconBG,
                        },
                      ]}>
                      (0)
                    </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                    marginLeft: 5
                                                },
                                            ]}>
                                            Bookkeeping
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'Gov' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'Gov'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('Gov'), showwhatfunc1(''))
                                            }>
                                            <Image
                                             source={ require('../Assets/img/icons/gov-payments.png')}
                                             style={  styles.icon}
                                             />


                                            {/* <Text
                      style={[
                        styles.ButtonText,
                        {
                          color:
                            showwhat1 == 'Reminders'
                              ? Color.white
                              : Color.headerIconBG,
                        },
                      ]}>
                      (1)
                    </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Gov. Payments
                                        </Text>
                                    </View>
                                    {/* </View> */}
                                </View>
                            );
                        } else if (showwhat2 == 'book') {
                            return (
                                <View style={styles.moblieSec}>
                                    {/* <View style={{ flexDirection: "column", justifyContent: 'space-between' }}> */}
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.emailtochO,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'orders' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'orders'
                                                    ? setshowwhat2('')
                                                    : showwhatfunc2('orders')
                                            }>
                                           <Image
                                             source={ require('../Assets/img/icons/orders.png')}
                                             style={  styles.icon}
                                             />


                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Orders
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'taxReturn' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'taxReturn'
                                                    ? setshowwhat2('')
                                                    : showwhatfunc2('taxReturn')
                                            }>
                                            <Image
                                             source={ require('../Assets/img/icons/tax-returns.png')}
                                             style={  styles.icon}
                                             />


                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Tax Returns
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'book' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'book'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('book'), showwhatfunc1(''))
                                            }>
                                             <Image
                                             source={ require('../Assets/img/icons/book-keeping.png')}
                                             style={  styles.icon}
                                             />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                    marginLeft: 5
                                                },
                                            ]}>
                                            Bookkeeping
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'Gov' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'Gov'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('Gov'), showwhatfunc1(''))
                                            }>
                                             <Image
                                             source={ require('../Assets/img/icons/gov-payments.png')}
                                             style={  styles.icon}
                                             />


                                            {/* <Text
                      style={[
                        styles.ButtonText,
                        {
                          color:
                            showwhat1 == 'Reminders'
                              ? Color.white
                              : Color.headerIconBG,
                        },
                      ]}>
                      (1)
                    </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Gov. Payments
                                        </Text>
                                    </View>
                                    {/* </View> */}
                                </View>
                            );
                        } else {
                            return (
                                <View style={styles.moblieSec}>
                                    {/* <View style={{ flexDirection: "column", justifyContent: 'space-between' }}> */}
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.emailtochO,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'orders' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 === 'orders'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('orders'), showwhatfunc1(''))
                                            }>
                                           <Image
                                             source={ require('../Assets/img/icons/orders.png')}
                                             style={  styles.icon}
                                             />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Orders
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'taxReturn' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 === 'taxReturn'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('taxReturn'), showwhatfunc1(''))
                                            }>
                                            {/* {console.log(showwhat1, showwhat2, "LLLLL")} */}
                                            <Image
                                             source={ require('../Assets/img/icons/tax-returns.png')}
                                             style={  styles.icon}
                                             />



                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Tax Returns
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'book' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'book'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('book'), showwhatfunc1(''))
                                            }>
                                            <Image
                                             source={ require('../Assets/img/icons/book-keeping.png')}
                                             style={  styles.icon}
                                             />


                                            {/* <Text
                      style={[
                        styles.ButtonText,
                        {
                          color:
                            showwhat1 == 'Signature'
                              ? Color.white
                              : Color.headerIconBG,
                        },
                      ]}>
                      (0)
                    </Text> */}
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                    marginLeft: 5
                                                },
                                            ]}>
                                            Bookkeeping
                                        </Text>
                                    </View>
                                    <View style={styles.TabsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.mobiletoch,
                                                {
                                                    backgroundColor:
                                                        showwhat2 == 'Gov' ? Color.geen : Color.headerIconBG,
                                                },
                                            ]}
                                            onPress={() =>
                                                showwhat2 == 'Gov'
                                                    ? (setshowwhat2(''), setshowwhat1(''))
                                                    : (showwhatfunc2('Gov'), showwhatfunc1(''))
                                            }>
                                             <Image
                                             source={ require('../Assets/img/icons/gov-payments.png')}
                                             style={  styles.icon}
                                             />


                                          
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                styles.ButtonText,
                                                {
                                                    color:
                                                        showwhat1 == 'Message'
                                                            ? Color.headerIconBG
                                                            : Color.headerIconBG,
                                                },
                                            ]}>
                                            Gov. Payments
                                        </Text>
                                    </View>
                                    {/* </View> */}
                                </View>
                            );
                        }
                    })()}
                </View>
                {(() => {
                    if (showwhat1 == 'Message') {
                        return (
                            <ScrollView>
                                {/* <View style={styles.subContainer}> */}
                                {/* <TouchableOpacity onPress={() => setshowwhat1('')}> */}
                                <View style={styles.part}></View>
                                {TaxfilteredList && TaxfilteredList.length > 0 ? (
                                    TaxfilteredList.map(item => (
                                        <View key={item.id} style={{ alignSelf: "center", marginTop: 10, width: wp(80) }}>
                                            <Text
                                                style={{
                                                    backgroundColor: '#23c6c8',
                                                    fontSize: 12,
                                                    padding: 3,
                                                }}>
                                                {item.subject}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: '700',
                                                    padding: 3,
                                                }}>
                                                Message:
                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: 'normal',
                                                        padding: 3,
                                                    }}>
                                                    {item.message}
                                                </Text>
                                            </Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.subHead}>
                                        No Tax Deadlines
                                    </Text>
                                )}


                                {/* <Text style={styles.subHead}> Message Not Found</Text> */}

                                {/* </View> */}
                                {/* </TouchableOpacity> */}
                            </ScrollView>
                        );
                    } else if (showwhat1 == 'Proposal') {
                        return (
                            <ScrollView>
                                <TouchableOpacity onPress={() => setshowwhat1('')}>
                                    <View style={styles.part}></View>

                                    {dashboardMessageList && dashboardMessageList.length > 0 ? (

                                        dashboardMessageList.map(item => (
                                            <View
                                                key={item.id}
                                                style={{
                                                    alignSelf: "center", marginTop: 10, width: wp(80)
                                                }}>
                                                <Text
                                                    style={{
                                                        backgroundColor: '#23c6c8',
                                                        fontSize: 12,
                                                        width: wp(15),
                                                        padding: 3,
                                                        textAlign: 'center',
                                                    }}>
                                                    Action
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        fontWeight: '700',
                                                        padding: 3,
                                                    }}>
                                                    Notification:
                                                    <Text
                                                        style={{
                                                            fontSize: 10,
                                                            fontWeight: 'normal',
                                                            padding: 3,
                                                        }}>
                                                        You have created new action #{item.id}
                                                    </Text>
                                                </Text>
                                            </View>
                                        ))
                                    ) : (
                                        <Text style={styles.subHead}>
                                            No Messages
                                        </Text>
                                    )}


                                    {/* <View style={styles.subContainer}> */}
                                    {/* <Text style={styles.subHead}>Proposal Results Found</Text> */}

                                    {/* </View> */}
                                </TouchableOpacity>
                            </ScrollView>
                        );
                    } else if (showwhat1 == 'Signature') {
                        return (
                            <ScrollView>
                                {/* <TouchableOpacity onPress={() => setshowwhat1('')}> */}
                                <View style={styles.part}></View>

                                {EventsfilteredList && EventsfilteredList.length > 0 ? (
                                    EventsfilteredList.map(item => (
                                        <View key={item.id} style={{ alignSelf: "center", marginTop: 10, width: wp(80) }}>
                                            <Text
                                                style={{
                                                    backgroundColor: '#23c6c8',
                                                    fontSize: 12,
                                                    padding: 3,
                                                }}>
                                                {item.subject}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: '700',
                                                    padding: 3,
                                                }}>
                                                Message:
                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: 'normal',
                                                        padding: 3,
                                                    }}>
                                                    {item.message}
                                                </Text>
                                            </Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.subHead}>
                                        No Events
                                    </Text>
                                )}
                                {/* </TouchableOpacity> */}
                            </ScrollView>
                        );
                    } else if (showwhat1 == 'Reminders') {
                        return (
                            <TouchableOpacity onPress={() => setshowwhat1('')}>
                                <View style={{}}>
                                    <View style={styles.part}></View>
                                    {HolidaysfilteredList && HolidaysfilteredList.length > 0 ? (
                                        HolidaysfilteredList.map(item => (
                                            <View key={item.id} style={{ alignSelf: "center", marginTop: 10, width: wp(80) }}>
                                                <Text
                                                    style={{
                                                        backgroundColor: '#23c6c8',
                                                        fontSize: 12,
                                                        padding: 3,
                                                    }}>
                                                    {item.subject}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        fontWeight: '700',
                                                        padding: 3,
                                                    }}>
                                                    Message:
                                                    <Text
                                                        style={{
                                                            fontSize: 10,
                                                            fontWeight: 'normal',
                                                            padding: 3,
                                                        }}>
                                                        {item.message}
                                                    </Text>
                                                </Text>
                                            </View>
                                        ))
                                    ) : (
                                        <Text style={styles.subHead}>
                                            No Holidays
                                        </Text>
                                    )}
                                    {/* {filteredList &&
                                        filteredList.map(item => (
                                            <View key={item.id} style={{ height: 200, padding: 20 }}>
                                                <Text
                                                    style={{
                                                        backgroundColor: '#23c6c8',
                                                        fontSize: 12,
                                                        padding: 3,
                                                    }}>
                                                    {item.subject}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        fontWeight: '700',
                                                        padding: 3,
                                                    }}>
                                                    Message:
                                                    <Text
                                                        style={{
                                                            fontSize: 10,
                                                            fontWeight: 'normal',
                                                            padding: 3,
                                                        }}>
                                                        {item.message}
                                                    </Text>
                                                </Text>
                                            </View>
                                        ))} */}
                                    {/* <View style={styles.subContainer}> */}
                                    {/* <Text style={styles.subHead}>Reminders Not Found1</Text> */}
                                    {/* </View> */}
                                </View>
                            </TouchableOpacity>
                        );
                    }
                })()}
                {(() => {

                    if (showwhat2 == 'orders') {
                        return (
                            <TouchableOpacity onPress={() => setshowwhat2('')}>
                                <View style={styles.part}></View>
                                {orderfilteredList && orderfilteredList.length > 0 ? (
                                    orderfilteredList.map(item => (
                                        <View key={item.id} style={{ alignSelf: "center", marginTop: 10, width: wp(80) }}>
                                            <Text
                                                style={{
                                                    backgroundColor: '#23c6c8',
                                                    fontSize: 12,
                                                    padding: 3,
                                                }}>
                                                {item.action}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: '700',
                                                    padding: 3,
                                                }}>
                                                Message:
                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: 'normal',
                                                        padding: 3,
                                                    }}>
                                                    {item.action}
                                                </Text>
                                            </Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.subHead}>
                                        No Orders
                                    </Text>
                                )}



                            </TouchableOpacity>
                        );
                    } else if (showwhat2 == 'taxReturn') {
                        return (
                            <TouchableOpacity onPress={() => setshowwhat2('')}>
                                <View style={styles.part}></View>

                                {taxreturnfilteredList && taxreturnfilteredList.length > 0 ? (
                                    taxreturnfilteredList.map(item => (
                                        <View key={item.id} style={{ alignSelf: "center", marginTop: 10, width: wp(80) }}>
                                            <Text
                                                style={{
                                                    backgroundColor: '#23c6c8',
                                                    fontSize: 12,
                                                    padding: 3,
                                                }}>
                                                {item.action}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: '700',
                                                    padding: 3,
                                                }}>
                                                Message:
                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: 'normal',
                                                        padding: 3,
                                                    }}>
                                                    {item.action}
                                                </Text>
                                            </Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.subHead}>
                                        No Tax Returns
                                    </Text>
                                )}


                            </TouchableOpacity>
                        );
                    } else if (showwhat2 == 'book') {
                        return (
                            <TouchableOpacity onPress={() => setshowwhat2('')}>
                                <View style={styles.part}></View>


                                {BookKeepingfilteredList && BookKeepingfilteredList.length > 0 ? (
                                    BookKeepingfilteredList.map(item => (
                                        <View key={item.id} style={{ alignSelf: "center", marginTop: 10, width: wp(80) }}>
                                            <Text
                                                style={{
                                                    backgroundColor: '#23c6c8',
                                                    fontSize: 12,
                                                    padding: 3,
                                                }}>
                                                {item.action}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: '700',
                                                    padding: 3,
                                                }}>
                                                Message:
                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: 'normal',
                                                        padding: 3,
                                                    }}>
                                                    {item.action}
                                                </Text>
                                            </Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.subHead}>
                                        No Bookkeeping
                                    </Text>
                                )}

                            </TouchableOpacity>
                        );
                    } else if (showwhat2 == 'Gov') {
                        return (
                            <TouchableOpacity onPress={() => setshowwhat2('')}>
                                <View style={styles.part}></View>

                                {GovfilteredList && GovfilteredList.length > 0 ? (
                                    GovfilteredList.map(item => (
                                        <View key={item.id} style={{ alignSelf: "center", marginTop: 10, width: wp(80) }}>
                                            <Text
                                                style={{
                                                    backgroundColor: '#23c6c8',
                                                    fontSize: 12,
                                                    padding: 3,
                                                }}>
                                                {item.action}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: '700',
                                                    padding: 3,
                                                }}>
                                                Message:
                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: 'normal',
                                                        padding: 3,
                                                    }}>
                                                    {item.action}
                                                </Text>
                                            </Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.subHead}>
                                        No Gov. Payments
                                    </Text>
                                )}


                            </TouchableOpacity>
                        );
                    }
                })()}

            </View>
        </View >
    )
}

export default HeadTabs

const styles = StyleSheet.create({
    tabsContainer: {
        // backgroundColor: '#fff',
        width: wp(90),
        justifyContent: 'center',
        alignSelf: 'center',
        /// height: 420,
        opacity: 2,
        paddingBottom: 20,
        borderRadius: 10,
        // marginTop: 20,
        // width:'62%'
    },
    part: {
        borderWidth: 0.5,
        borderColor: '#A7B1C2',
        marginTop: 10,
        width: '90%',
        alignSelf: 'center',
    },
    TabsContainer: {
        justifyContent: 'center',
        alignItems: "center",
        width: wp(22),
        backgroundColor: "",
        height: wp(20)
    },
    moblieSec: {
        // backgroundColor: "red",
        // height: 20,
        width: wp(90),
        // backgroundColor: 'red',
        //backgroundColor: 'red',
        //  justifyContent: 'space-between',
        alignSelf: 'center',
        borderRadius: 50,

        justifyContent: "center",
        // alignItems: "center",
        marginTop: 0,
        // marginBottom: 30,

        flexDirection: 'row',
        // alignSelf: "center",
    },
    emailtoch: {
        //  backgroundColor: "yellow",
        width: wp(12),
        height: wp(12),
        paddingTop: 5,
        

        //  justifyContent: 'center',
        borderRadius: 50,
        //marginRight: 6,
        //marginTop: 10,
    },
    emailtochO: {
        //  backgroundColor: "lightgray",
        width: wp(12),
        height: wp(12),
        paddingTop: 5,
        //  justifyContent: 'center',
        borderRadius: 50,
        //marginRight: 6,
        //marginTop: 10,
    },
    ButtonText: {

        textAlign: 'center',
        paddingTop: 3,
        fontSize: 8,
        fontFamily: 'Poppins-SemiBold',
    },
    mobiletoch: {
        // backgroundColor: showwhat == "My Schools" ? "#2F5597" : "lightgray",
        // width: 70,
        // height: 45,
        width: wp(12),
        height: wp(12),
        //marginTop: 10,
        paddingTop: 5,
        borderRadius: 50,
        // justifyContent: 'center',
        // marginLeft: 10
    },
    mobiletoch1: {
        // backgroundColor: showwhat == "My Schools" ? "#2F5597" : "lightgray",
        // width: 70,
        // height: 45,
        width: wp(12),
        height: wp(12),
        //marginTop: 10,
        paddingTop: 5,
        borderRadius: 50,
        // justifyContent: 'center',
        // marginRight: 5,
    },
    subHead: {
        //marginLeft: 30,
        marginTop: 20,
        textAlign: "center"
    },
    icon: {
         alignSelf: 'center',
            height:25,
            resizeMode:'contain',
            width:25,
          marginTop: 5 
        },


})