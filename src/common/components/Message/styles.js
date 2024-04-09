import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 16,
  },
  nameLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  wrapper: {
    backgroundColor: 'cyan',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  leftWrapper: {
    borderBottomEndRadius: 8,
    backgroundColor: '#E6E6FA',
    alignSelf: 'flex-start',
  },
  rightWrapper: {
    borderBottomStartRadius: 8,
    backgroundColor: '#CCCCFF',
    alignSelf: 'flex-end',
  },
  dateContent: {
    fontSize: 10,

    marginTop: 5,
  },
  dateLabel: {
    fontSize: 12,
    color: '#483248',
    opacity: 0.7,
  },
  dateLeft: {
    alignItems: 'flex-start',
  },
  dateRight: {
    alignItems: 'flex-end',
  },
});
