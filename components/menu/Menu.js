import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, padding } from "../styles/styles";
import Typography from "../Typography";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export const Menu = ({ children, style }) => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (index) => {
    setSelected(index);
  };
  return <View style={[styles.container, style]}>{children}</View>;
};
export const MenuItem = ({
  children,
  index,
  component,
  variant,
  primary,
  secondary,
}) => {
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    setPressed(!pressed);
  };
  if (variant === "sub") {
    return (
      <TouchableOpacity
        style={[
          styles.item,
          index === 0 && {
            borderTopColor: colors.font,
            borderTopWidth: 1,
          },
        ]}
        onPress={handlePress}
      >
        <View>
          <Typography variant={"h2"}>{primary}</Typography>
          <Typography variant={"h3"}>{secondary}</Typography>
        </View>
        <Ionicons
          name={pressed ? "remove" : "add"}
          size={36}
          color={colors.font}
        />
      </TouchableOpacity>
    );
  } else {
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
  }
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
    // borderTopColor: colors.font,
    borderBottomWidth: 1,
    // borderTopWidth: 1,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.bg,
    zIndex: 1,
  },
});
