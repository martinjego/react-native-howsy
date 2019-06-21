import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  share: {
    backgroundColor: '#57AE39',
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    padding: 5,
  },
  replyIcon: {
    flex: 1,
  },
  statsIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 5,
  },
  statsContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  statsItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  }
})

export default styles;
