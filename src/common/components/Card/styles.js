import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 18,
    marginTop: 18,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 16,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  bottomContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoWrapper: {
    marginLeft: 16,
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#303030',
  },
  info: {
    fontSize: 12,
    color: '#303030' + '9D',
    marginTop: 4,
  },
  desc: {
    fontSize: 12,
    color: '#303030' + '9D',
    marginTop: 2,
    flexWrap: 'wrap',
  },
  themeWrapper: {
    flexDirection: 'row',
  },
  themeLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  theme: {
    fontSize: 14,
  },
});
