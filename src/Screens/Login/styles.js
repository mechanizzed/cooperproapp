import { StyleSheet } from 'react-native';
import { colors } from '../../Generals/Styles';
const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backGroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 10
  },
  welcomeText: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center'
  },
  formContainer: {
    alignSelf: 'stretch'
  },
  textInput: {
    height: 44,
    paddingHorizontal: 15,
    backgroundColor: colors.whiteTransparent,
    borderRadius: 8,
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10
  },
  buttonLogin: {
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    height: 44,
    backgroundColor: colors.white
  },
  textLoginButton: {
    textAlign: 'center',
    color: colors.blue,
    fontWeight: '700'
  },
  errorContainer: {
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    backgroundColor: colors.danger
  },
  errorText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700'
  }
});

export default Styles;
