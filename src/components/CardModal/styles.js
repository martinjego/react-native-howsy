import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.3,
    width: '100%',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff'
  },
  boxContainer: {
    flex: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 5,
  },
  imageContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  titleStyle: {
    fontSize: 10
  },
  modalContainer: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'white'
  },
  closeButtonStyle: {
    alignSelf: 'flex-end',
    padding: 20
  }

})

export default styles;
