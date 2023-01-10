import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
  },
  cardDivider: {
    height: 1,
              backgroundColor: '#000000',
              opacity: 0.2,
              marginLeft: 10,
              marginRight: 10,
  }
});