import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper:{
    position: 'absolute',
    top:0,
    left:0,
    width: '100%',
    height: '100%',
    backgroundColor:'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  container:{
    width: '80%',
    height:'40%',
    borderRadius:8,
    padding:6,
    borderWidth:3,
    borderStyle:'solid',
    borderColor:'black'
  },
  content:{
    height: '100%',
    width: '100%',
    backgroundColor:'orange',
    borderRadius:8,
    padding:8,
    alignItems: 'center',
    justifyContent:'space-around',
  },
  button:{
    width: '80%',
    height:60,
    padding:3,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'black',
    borderRadius:6,
    container:{
      width: '100%',
      height:'100%',
      backgroundColor:'red',
      borderRadius:6,
      alignItems: 'center',
      justifyContent:'center',
    }
  }
});
