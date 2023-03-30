import {
  Animated,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, padding } from "../styles/styles";
import Typography from "../Typography";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const Menu = ({
  children,
  style,
  menuItems,
  handlePress,
  close,
  onOpen,
  toggleItem,
}) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(null);
  return (
    <View style={[styles.container, style]}>
      {menuItems
        ? menuItems.map((item, index) => (
            <MenuItem
              toggleItem={toggleItem}
              close={close}
              onOpen={() => {
                setOpen(open === item.index ? null : item.index);
              }}
              component={item.component}
              index={item.index}
              key={item.index}
              handlePress={handlePress}
              open={open}
              mode={item?.variant || null}
            >
              {item.title}
            </MenuItem>
          ))
        : children}
    </View>
  );
};
export const MenuItem = ({
  children,
  index,
  component,
  variant,
  primary,
  secondary,
  animation,
  defaultOpen,
  delay,
  handlePress,
  close,
  onOpen,
  open,
  toggleItem,
  mode,
}) => {
  // const [pressed, setPressed] = useState(false);
  // useEffect(() => {
  //   defaultOpen && onOpen(index);
  // }, []);
  useEffect(() => {
    if (close) {
      onOpen(null);
    }
  }, [close]);

  const handleTap = () => {
    if (open === index) {
      onOpen(null);
    } else {
      onOpen(index);
    }
    handlePress && handlePress(index, open === index ? false : true);
    toggleItem();
  };
  useEffect(() => {
    if (defaultOpen) {
      if (delay) {
        setTimeout(() => {
          onOpen(index);
          toggleItem();
        }, 250);
      }
    }
  }, []);
  if (variant === "sub") {
    return (
      <>
        <AnimatedTouchable
          style={[
            styles.item,
            index === 0 && {
              borderTopColor: colors.font,
              borderTopWidth: 1,
            },
          ]}
          onPress={handleTap}
        >
          <View>
            <Typography variant={"h2"}>{primary}</Typography>
            <Typography variant={"h3"}>{secondary}</Typography>
          </View>
          <Ionicons
            name={open === index ? "remove" : "add"}
            size={36}
            color={colors.font}
          />
        </AnimatedTouchable>
        {open === index && component}
      </>
    );
  } else {
    return (
      <>
        <TouchableOpacity
          onLayout={(e) => {}}
          onPress={handleTap}
          style={[
            styles.item,
            // { backgroundColor: index % 2 ? colors.bg : colors.grey50 },

            { backgroundColor: colors.bg },
          ]}
        >
          {open === index && (
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.05,
                shadowRadius: 3,
                backgroundColor: colors.bg,
                // height: 50,
                position: "absolute",
                bottom: -1,
                left: -10,
                right: -10,
                top: 0,
                paddingHorizontal: padding.mainHorizontal / 2,
              }}
            />
          )}
          <Typography
            color={index % 2 ? colors.grey : colors.font}
            variant={open === index ? "selectedMenuItem" : "menuItem"}
          >
            {children}
          </Typography>
          <Ionicons
            name={open === index ? "remove" : "add"}
            size={36}
            color={index % 2 ? colors.grey : colors.font}
          />
        </TouchableOpacity>
        {open === index && component}
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginHorizontal: -padding.mainHorizontal / 2,
    gap: 0,
    flex: 1,
  },
  item: {
    paddingHorizontal: padding.mainHorizontal / 2,
    borderBottomColor: colors.font,
    borderBottomWidth: 1,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    // backgroundColor: colors.bg,
    zIndex: 1,
  },
});
