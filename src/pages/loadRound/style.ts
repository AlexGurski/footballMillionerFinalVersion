import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  allForm: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:'space-between',
    gap:20,
  },
  wrapper:{
    flex:1,
    paddingHorizontal:20,
    borderColor:'red',
    borderStyle: 'dashed',
    borderWidth:2,
  },
  question:{
    height:'60%',
    alignItems:'center',
    justifyContent:'center',
  },
  choise:{
    width:'40%',
    paddingVertical:10,
    paddingHorizontal:20,
    borderColor:'red',
    borderStyle: 'dashed',
    borderWidth:2,
  },
});
