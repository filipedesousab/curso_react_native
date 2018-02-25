import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { TabBar } from 'react-native-tab-view'

export default props => (
  <View style={{ backgroundColor: '#115254', elevation: 4, marginBottom: 6 }}>

    <StatusBar
    	//hidden={false}
    	backgroundColor='#114044'
    />

    <View style={{ height: 50, justifyContent: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 20, marginLeft: 20 }}>WhatsApp Clone</Text>
    </View>

    <TabBar {...props} style={{ backgroundColor: '#115254', elevation: 0 }}/>
  </View>
);
