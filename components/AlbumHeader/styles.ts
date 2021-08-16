import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  name: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  creatorContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  creator: {
    color: 'gray',
    margin: 5,
    fontSize: 18,
  },
  likes: {
    color: 'gray',
    margin: 5,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#1CD05D',
    height: 60,
    width: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default styles;