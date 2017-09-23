import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {

   _onPress1() {
  console.log('pressed like');
 }
   _onPress2() {
  console.log('pressed share');
 }

    _onPress3() {
  console.log('pressed comment');
 }

  render() {
  
     let pic = {
          uri: 'https://cdn.vox-cdn.com/thumbor/2loFjCswlj-VaBQWvwAAXVUCR94=/0x0:1024x755/920x613/filters:focal(431x297:593x459):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55450795/SNES_Classic_box.0.jpg'
          };

  

    return (
      <View style={styles.container}>
        <Text style={styles.header}>SNES CLASSIC!</Text>
        <Image source={pic} style={{width: 370, height: 300}}/>
        
        <View style={styles.buttonView}>
         <Button 
          onPress={this._onPress1}
          style={styles.button}
          title="LIKE"
          color="#841584"
         />
         <Button 
          onPress={this._onPress2}
          style={styles.button}
          title="SHARE"
          color="#13852f"
         />
         <Button 
          onPress={this._onPress3}
          style={styles.button}
          title="COMMENT"
          color="#146985"
         />     
        </View>

       <Text style={styles.comment}>So when is the preorder?</Text>
       <Text style={styles.comment}>This thing will be in Sept 29!</Text>
       <Text style={styles.comment}>Who is lining up?</Text>
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
      fontSize: 20,
      height: 40,
      width: 300,
      textAlign: 'left',
      marginLeft: 20,
      marginTop: 10,
      paddingTop:10,
      backgroundColor: 'white',
    },
    button: {
      width: 50, 
      height: 50,
      margin: 30,
    }
});
