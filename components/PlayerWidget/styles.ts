import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 48,
    backgroundColor: 'rgb(86, 86, 86)',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    alignItems: 'center',
  },
  rightContianer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100, 
    justifyContent: 'space-around',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  artist: {
    color: 'lightgray',
    fontSize: 20
  }
})

export default styles;