import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 60,
    paddingTop: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: 'grey',
  },
  profileInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'silver',
    marginHorizontal: 24,
  },
  nameLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  marginTopHeader: {
    marginTop: 30,
  },
  infoLabel: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
    marginTop: 10,
  },
  adviceLabel: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
  positionLabel: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 14,
  },
  text: {
    fontSize: 16,
  },
  smallHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  aboutContent: {
    marginHorizontal: 18,
    marginTop: 24,
  },
});
