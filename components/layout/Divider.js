import { StyleSheet, View } from "react-native";
import { colors } from "../styles/styles";

const Divider = ({ variant }) => {
  return (
    <View
      style={[
        styles.divider,
        variant
          ? { borderBottomColor: colors.font, borderBottomWidth: 1 }
          : null,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    paddingVertical: 5,
    width: "100%",
    borderRadius: 20,
    opacity: 0.2,
  },
});

export default Divider;
