import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding * 2
  },
  form: {
    marginTop: metrics.baseMargin * 2,
    alignSelf: "stretch"
  },
  button: {
    height: 50,
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    justifyContent: "center",
    alignItems: "center",
    marginTop: metrics.baseMargin
  },
  buttonText: {
    color: colors.darkTransparent,
    fontWeight: "bold",
    fontSize: 14
  },
  input: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding
  },
  title: {
    fontSize: 32,
    color: colors.white,
    fontWeight: "bold"
  },
  description: {
    color: colors.white,
    fontSize: 14,
    marginTop: metrics.baseMargin / 2,
    textAlign: "center",
    lineHeight: 20
  },
  footer: {
    paddingBottom: metrics.basePadding,
    alignItems: "center"
  },
  footerLink: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 14
  },
  error: {
    color: colors.danger,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: metrics.baseMargin / 2
  }
});

export default styles;
