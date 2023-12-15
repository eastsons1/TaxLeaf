import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color } from '../Style';
import { GetDetailsbyOrderId } from '../Redux/Actions/PaymentAction';
import { ManagerInfo } from '../Redux/Actions/TaxLeaf';

import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Component/Loader';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import CustomBottomTab from '../Component/CustomBottomTab';
import HeadTabs from './HeadTabs';

export default InvoiceView = ({ route }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { MY_INFO } = useSelector(state => state.TaxLeafReducer);
    const { GET_ORDER_DETAILS } = useSelector(state => state.PaymentReducer);
    const { MANAGER_INFO } = useSelector(state => state.TaxLeafReducer);
    const { OFFICE_INFO } = useSelector(state => state.TaxLeafReducer);

    console.log(GET_ORDER_DETAILS, 'orderInfoInvoiceorderInfoInvoiceorderInfoInvoice')
    console.log(MANAGER_INFO, 'MANAGER_INFO')

    const [loader, setLoader] = useState(false);
    const orderId = route.params.orderId;
    const countryname = route.params.countryname;
    const jsonData = MY_INFO.guestInfo;
    const collectionInfo = GET_ORDER_DETAILS[0]?.collectionInfo
    const individualClientContactInfo = GET_ORDER_DETAILS[0]?.individualClientContactInfo
    const companyClientContactInfo = GET_ORDER_DETAILS[0]?.companyClientContactInfo
    const serviceListModel = GET_ORDER_DETAILS[0]?.serviceListModel[0]
    const managerInfo = MANAGER_INFO
    const officeInfo = OFFICE_INFO
    const serviceList = GET_ORDER_DETAILS[0]?.serviceListModel;

    //console.log(officeInfo, 'officeInfoofficeInfoofficeInfo')

    // Calculate the sum of "priceCharged" using reduce
    const totalPriceCharged = serviceList?.reduce((sum, service) => {
        // Access the "priceCharged" property within "reqInfo"
        const priceCharged = service?.reqInfo?.priceCharged;
        // Add the current priceCharged to the sum
        return sum + priceCharged;
    }, 0); // Initialize sum with 0
    console.log("Total Price Charged:", totalPriceCharged);

    console.log("route.params.orderId", route.params.orderId);
    const invoiceData = {
        invoiceNumber: '12345',
        invoiceDate: '01/01/2022',
        customerName: 'John Smith',
        customerEmail: 'john@example.com',
        customerAddress: '123 Main St, Anytown USA 12345',
        items: [
            {
                id: 1,
                name: 'Item 1',
                quantity: 2,
                price: 9.99,
                total: 19.98,
            },
            {
                id: 2,
                name: 'Item 2',
                quantity: 1,
                price: 19.99,
                total: 19.99,
            },
        ],
        total: 39.97,
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true);

                // Fetch order details
                await dispatch(GetDetailsbyOrderId(jsonData?.clientId, jsonData?.clientType, orderId, navigation));

                // Fetch manager info
                //  await dispatch(ManagerInfo(jsonData?.clientId, jsonData?.clientType, navigation));
                setTimeout(() => {
                    setLoader(false);
                }, 1000);
            } catch (error) {
                console.error("Error fetching data:", error);
                setTimeout(() => {
                    setLoader(false);
                }, 1000);
            }
            // finally {
            //     setLoader(false);
            // }
        };

        fetchData();
    }, []);

    // useEffect(() => {
    //     setLoader(true);

    //     dispatch(
    //         GetDetailsbyOrderId(jsonData?.clientId, jsonData?.clientType, orderId, navigation),
    //     );
    //     setTimeout(() => {
    //         setLoader(false);
    //     }, 2000);
    // }, [orderId])
    // useEffect(() => {
    //     dispatch(ManagerInfo(jsonData?.clientId, jsonData?.clientType, navigation));

    // }, [])

    return (
        <View style={styles.container}>
            <Loader flag={loader} />
            <ScrollView style={{ paddingBottom: 80 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <HeadTabs />

                <View style={styles.header}>
                    <Text style={styles.title}>Invoice</Text>
                </View>
                <View style={styles.invoiceInfoContainer}>
                    <View style={styles.invoiceInfo}>
                        <Text style={styles.label}>Order ID:</Text>
                        <Text style={styles.text}>{collectionInfo?.invoiceId}</Text>
                    </View>
                    <View style={styles.invoiceInfo}>
                        <Text style={styles.label}>Invoice Date:</Text>
                        <Text style={styles.text}>{collectionInfo?.creationDate}</Text>
                    </View>
                </View>
                {/* <View style={styles.divider} /> */}
                <View style={styles.slideContainerClient}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', alignSelf: 'center', marginBottom: 10 }}>
                        <Text style={styles.headingClient}>Invoice To</Text>

                    </View>

                    <View style={styles.contentView}>
                        <Text style={styles.LIstText2}>
                            {collectionInfo?.clientId}
                        </Text>
                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.LIstText2}>
                            {companyClientContactInfo?.firstName}   {companyClientContactInfo?.lastName}

                        </Text>
                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.LIstText2}>
                            {/* {companyClientContactInfo?.firstName}   {companyClientContactInfo?.lastName} */}
                            {companyClientContactInfo?.phone1}
                        </Text>
                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.LIstText2}>
                            {companyClientContactInfo?.address1}, {companyClientContactInfo?.city}, {companyClientContactInfo?.zip},{countryname}
                        </Text>
                    </View>
                </View>
                <View style={[styles.slideContainerClient1, { backgroundColor: '#098d95' }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', alignSelf: 'center', marginBottom: 10 }}>
                        <Text style={styles.headingClient}>Invoice From</Text>

                    </View>

                    <View style={styles.contentView}>
                        <Text style={styles.LIstText2}>
                            {officeInfo?.name}
                        </Text>
                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.LIstText2}>
                            {managerInfo?.firstName + ' ' + managerInfo?.lastName}
                        </Text>
                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.LIstText2}>
                            {officeInfo?.phone}
                        </Text>
                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.LIstText2}>
                            {officeInfo?.address}, {officeInfo?.city}, {officeInfo?.zip}
                        </Text>
                    </View>
                </View>

                <View style={styles.slideContainerClient1}>
                    <View style={{ paddingLeft: 10, width: wp(90), alignSelf: 'center', marginBottom: 10 }}>
                        <Text style={styles.headingClient}>Invoice Items</Text>

                    </View>

                    <View style={styles.contentView1}>
                        <View style={styles.item} >
                            <Text style={[styles.itemName, {
                                fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 12,
                            }]}>#Order</Text>
                            <Text style={[styles.itemDetails, {
                                fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 12,
                            }]}>
                                Period
                            </Text>
                            <Text style={[styles.Price, {
                                fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 12,
                            }]}>Price</Text>
                            <Text style={[styles.Quantity, {
                                fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 12,
                            }]}>Quantity</Text>
                            <View
                                style={styles.Final}
                            >
                                <Text style={{
                                    fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 12,
                                    textAlign: "center"
                                }}>Final Price</Text>
                            </View>


                        </View>
                    </View>
                    <View style={styles.contentView2}>
                        {
                            GET_ORDER_DETAILS[0] && GET_ORDER_DETAILS[0]?.serviceListModel.map((item, index) => (
                                <View style={styles.item}>
                                    <Text style={styles.itemName}>{item?.serviceInfo?.description}</Text>
                                    <Text style={styles.itemDetails}>
                                        N/A
                                    </Text>
                                    <Text style={styles.Price}>${item?.reqInfo?.priceCharged}</Text>
                                    <Text style={styles.Quantity}>{item?.reqInfo?.quantity}</Text>

                                    <Text style={styles.itemTotal}>${item?.reqInfo?.priceCharged}</Text>

                                </View>
                            ))
                        }
                    </View>

                </View>

                <View style={styles.divider} />
                {/* <View style={styles.totalContainer}>
                    <Text style={styles.label}>Total:</Text>
                    <Text style={styles.total1}>${totalPriceCharged}</Text>
                </View> */}
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                    <TouchableOpacity
                        style={{
                            color: Color.darkGreen,
                            fontSize: 12,
                            backgroundColor: '#fff',
                            padding: 5,
                            textAlign: 'center',
                            width: wp(28),
                            height: hp(5.5),
                            borderRadius: 20,
                            alignItems: 'center',
                            padding: 12,
                            flexDirection: 'row',
                        }}
                    >
                        <Image source={require('../Assets/img/icons/printInvoice.png')} style={{ marginRight: 6 }} />

                        <Text
                            style={{

                                fontSize: 12,
                                textAlign: "center",
                                fontFamily: 'Poppins-Bold',
                            }}
                        >
                            Print
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            color: Color.white,
                            fontSize: 12,
                            backgroundColor: '#8AB645',
                            padding: 10,
                            textAlign: 'center',
                            width: wp(30),
                            height: hp(5.5),
                            borderRadius: 20,
                            marginLeft: 5,
                            marginRight: 5,
                            flexDirection: 'row'
                        }}
                    >
                        <Image source={require('../Assets/img/icons/downloadInvoice.png')} style={{ marginRight: 3 }} />

                        <Text style={{


                            fontSize: 12,
                            textAlign: "center",
                            fontFamily: 'Poppins-Bold',

                            marginTop: 2, color: '#fff'
                        }} >

                            Download
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            color: Color.darkGreen,
                            fontSize: 12,
                            backgroundColor: '#fff',
                            padding: 5,
                            textAlign: 'center',
                            width: wp(28),
                            height: hp(5.5),
                            borderRadius: 20,
                            alignItems: 'center',
                            padding: 12,
                            flexDirection: 'row',
                        }}
                    >
                        <Image source={require('../Assets/img/icons/payInvoice.png')} style={{ marginRight: 2 }} />

                        <Text
                            style={{
                                fontSize: 12,
                                textAlign: "center",
                                fontFamily: 'Poppins-Bold',

                            }}
                        >
                            Pay Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <CustomBottomTab />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.screenBg,
        paddingLeft: 20,
        paddingRight: 20,
        // marginTop: 80,
        //   backgroundColor: '#d5e3e5',
        paddingBottom: 80
    },
    header: {
        // alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: Color.headerIconBG,
        fontFamily: 'Poppins-Bold',
        padding: 5

    },
    invoiceInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 10,
    },
    invoiceInfo: {
        flexDirection: 'row',
    },
    label: {
        fontSize: 14,

        fontFamily: 'Poppins-Bold',
    },
    text: {
        marginLeft: 5,
        fontFamily: 'Poppins-Bold',
        // marginTop: 4
    },
    divider: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        // marginVertical: 20,
    },
    customerInfoContainer: {
        marginTop: 20,
    },
    customerInfo: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemsContainer: {
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 10
        // justifyContent: 'space-between',
        // marginVertical: 5,
    },
    itemName: {
        fontSize: 10,
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
        width: wp(17),
        color: Color.darkGreen
    },
    itemDetails: {
        fontSize: 10,
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
        color: Color.darkGreen,

        width: wp(17)
    },
    Price: {
        fontSize: 10,
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
        color: Color.darkGreen,

        width: wp(17)

    },
    Quantity: {
        fontSize: 10,
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
        color: Color.darkGreen,

        width: wp(17)

    },
    itemTotal: {
        fontSize: 10,
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
        color: Color.darkGreen,

        width: wp(15)

    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    total1: {
        fontSize: 17,
        marginLeft: 7,
        marginTop: 2,

    },
    slideContainerClient: {
        backgroundColor: Color.geen,
        width: wp(90),
        justifyContent: 'center',
        alignSelf: 'center',
        // height: hp(2=10),
        opacity: 2,
        // paddingBottom: 20,
        marginTop: 5,
    },
    slideContainerClient1: {
        backgroundColor: '#254768',
        width: wp(90),
        justifyContent: 'center',
        alignSelf: 'center',
        // height: hp(2=10),
        opacity: 2,
        // paddingBottom: 20,
        marginTop: 15,
    },
    LIstText2: {
        color: '#6a6a6a',
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
    },

    subHead: {
        width: 150,
        fontSize: 15,
        fontWeight: '600',
        color: '#000'
    },
    headingClient: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        // maxWidth:'80%',
        color: '#fff',
        // height:40,
        marginTop: 10,
        // marginLeft: 20,
        fontWeight: '700',

        // textAlign: 'center',
    },
    contentView: {
        height: 40,
        backgroundColor: '#fff',
        marginTop: 1,
        padding: 10,
        flexDirection: 'row',
        // borderRadius: 20,
        // marginLeft: 10,
        // marginRight: 10,
    },
    contentView1: {
        height: 50,
        backgroundColor: Color.geen,
        marginTop: 1,
        // padding: 10,
        width: wp(90),
        flexDirection: 'row',
        // borderRadius: 20,
        // marginLeft: 10,
        // marginRight: 10,
    },
    contentView2: {
        // height: 50,
        backgroundColor: '#fff',
        marginTop: 1,
        width: wp(100),
        height: wp(15),
        // padding: 10,
        flexDirection: 'row',
        // borderRadius: 20,
        // marginLeft: 10,
        // marginRight: 10,
    },
    Final: {
        backgroundColor: 'gray',
        height: 50,
        width: wp(20),


        //  alignItems: "center",
        justifyContent: "center"






    }
});
