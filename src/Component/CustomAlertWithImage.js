import React, { useEffect } from 'react';
import { Modal, Alert,View, Text, Image, TouchableOpacity } from 'react-native';

const CustomAlertWithImage = ({ visible, onClose, message }) => {


 console.log( visible, onClose, message,'OOOOOOOOOOO')


  return (
    <Modal visible={visible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Image source={require('../Assets/img/icons/planicon.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
            <Text style={{ fontSize: 18 }}>{message}</Text>
          </View>
          <TouchableOpacity onPress={onClose}>
            <Text style={{ color: 'blue', textAlign: 'right' }}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlertWithImage
