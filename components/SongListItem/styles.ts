import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  rightContianer: {
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  image: {
    width: 75,
    height: 75,

  },
  title: {
    color: 'black',
    fontSize: 23
  },
  artist: {
    color: 'gray',
    fontSize: 20
  }
})

export default styles;