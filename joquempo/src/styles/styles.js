import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  palco: {
    alignItems: 'center',
    backgroundColor: 'rgb(195, 216, 249)',
    flex: 1,
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 40,
  },
  icones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default styles;
