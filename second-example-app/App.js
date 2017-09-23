import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
//import { Drawer } from 'react-native-drawer';

export default class App extends React.Component {


someMethod() {
  console.log('pressed like');
 }

  render() {

    let picAd = {
      uri: 'http://images.frys.com/art/homepage/images/20170910-promocodesneakTV960.jpg'
      };

    let picTV1 = {
	    uri: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4801/4801802_sd.jpg;maxHeight=550;maxWidth=642'
    };

    let picTV2 = {
	   uri: 'http://s7d2.scene7.com/is/image/SamsungUS/MU9000_1?$product-details-jpg$'
    };

    let picPS4 = {
   	 uri: 'https://psmedia.playstation.com/is/image/psmedia/ps4-pro-two-column-buy-02-eu-06sep15?$TwoColumn_Image$'
    };

    let picXbox1 = {
	  uri: 'https://images-na.ssl-images-amazon.com/images/I/61dDfqx0W1L._AC_SL1300_.jpg'
    };

    return (
      <View style={styles.container}>
        
        <SearchBar
         round
         //onChangeText={someMethod}
         placeholder='Type Here...' />

        <Image source={picAd} style={{width: 370, height: 100}}/>
        <Text style={styles.header}>HOTTEST TVS</Text>
        
        <View style={styles.tvPicsView}>
          <Image source={picTV1} style={{width: 150, height: 100, margin: 10}}/>
          <Image source={picTV2} style={{width: 150, height: 100, margin: 10}}/>
        </View>

      <Text style={styles.comment}>At Fry's we price match any brands out there. Bring in your local or online ad.</Text>
      
      <Text style={styles.header}>VIDEO GAME CONSOLES</Text>

       <View style={styles.tvPicsView}>
          <Image source={picPS4} style={{width: 150, height: 100, margin: 10}}/>
          <Image source={picXbox1} style={{width: 150, height: 100, margin: 10}}/>
      </View>
      
       <Text style={styles.comment}>The hottest Video Games are only at Fry's Guaranteed!</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
   buttonView: {
     display: 'flex',
     flexDirection: 'row',
     height: 50,
     width: 400,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'white',
   },
  tvPicsView: {
      display: 'flex',
     flexDirection: 'row',
     height: 100,
     width: 400,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'white',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      height: 70,
      width: 400,
      paddingTop:20,
      textAlign: 'center',
      backgroundColor: 'white',
    },
    comment: {
      fontSize: 18,
      height: 50,
      width: 320,
      textAlign: 'left',
      marginLeft:0,
      marginTop: 10,
      paddingTop:0,
      backgroundColor: 'white',
    },
});
