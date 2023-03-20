import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { colors, padding } from "../styles/styles";

const Container = ({ children }) => {
  return (
    <ScrollView style={styles.main}>
      {/* <SafeAreaView> */}
      <View>{children}</View>
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.bg,
    width: "100%",
    flex: 1,
    paddingHorizontal: padding.mainHorizontal,
    paddingTop: 12,
    marginTop: 60,
    borderRadius: 20,
  },
});

export default Container;
