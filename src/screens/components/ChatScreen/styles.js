import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  scroll: {
    paddingBottom: 30,
  },
  scrollContent: {
    paddingHorizontal: 16,
    marginBottom: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 18,
  },
  image: {
    height: 28,
    width: 28,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  buttonContainer: {
    marginHorizontal: 18,
    marginBottom: 18,
  },
});
