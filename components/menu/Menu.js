import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, padding } from "../styles/styles";
import Typography from "../Typography";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export const Menu = ({ children }) => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (index) => {
    setSelected(index);
  };
  return <View style={styles.container}>{children}</View>;
};
export const MenuItem = ({ children, index, component }) => {
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    setPressed(!pressed);
  };
  return (
    <>
      <TouchableOpacity onPress={handlePress} style={styles.item}>
        <Typography variant={pressed ? "selectedMenuItem" : "menuItem"}>
          {children}
        </Typography>
        <Ionicons
          name={pressed ? "remove" : "add"}
          size={36}
          color={colors.font}
        />
      </TouchableOpacity>
      {pressed && component}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // alignItems: "center",
    marginHorizontal: -padding.mainHorizontal / 2,
    gap: 0,
    flex: 1,
  },
  item: {
    paddingHorizontal: padding.mainHorizontal / 2,
    borderBottomColor: colors.font,
    borderBottomWidth: 1,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
