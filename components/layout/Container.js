import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { colors, padding } from "../styles/styles";

const Container = ({ children, handleScroll }) => {
  return (
    <ScrollView
      // fadingEdgeLength={1}
      style={styles.main}
      // invertStickyHeaders={true}
      // StickyHeaderComponent={<Fade />}
      // stickyHeaderIndices={[0]}
    >
      {/* <SafeAreaView> */}
      <View>{children}</View>

      <View style={styles.spacer} />

      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  spacer: {
    paddingBottom: 150,
  },
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
