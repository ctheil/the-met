import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { FontContext } from "./lib/context";
import { colors } from "./styles/styles";
import { bg, grey, red, white } from "./styles/typography-styles";

export const Span = ({ variant, fontStyle, children, color }) => {
  return (
    <Text
      style={[styles[variant], styles[fontStyle], { color: color && color }]}
    >
      {" "}
      {children}{" "}
    </Text>
  );
};

const Typography = (props) => {
  // const [variant, fontSize, color] = props;
  const { rem, setRem } = useContext(FontContext);

  const fontSize = {
    p: 13 * rem,
    h1: 40 * rem,
    h2: 21 * rem,
    h3: 21 * rem,
    cta: 21 * rem,
    em: 24 * rem,
    menuItem: 36 * rem,
    selectedMenuItem: 35 * rem,
    caption: 13 * rem,
  };

  const mode = props.mode || "light";
  const { variant } = props;
  return (
    <Text
      style={[
        props.style,
        styles[variant],
        {
          fontFamily:
            props.fontStyle === "italics"
              ? "AGItalics"
              : styles[variant].fontFamily,
          color: props.color || styles[variant].color,
          fontSize: props.fontSize * rem || fontSize[variant],
          textTransform: props.textTransform || styles[variant].textTransform,
        },
      ]}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: "AGBold",
    margin: 0,
    // marginBottom: 24,
    padding: 0,
    fontSize: 40,
    color: colors.red,
    fontWeight: 900,
  },
  h2: {
    fontFamily: "AGBold",
    // marginBottom: 14.8,
    fontSize: 21,
    color: colors.font,
  },
  h3: {
    fontFamily: "AGBook",
    // marginBottom: 14.8,
    fontSize: 21,
    color: colors.red,
  },
  cta: {
    fontFamily: "AGMedium",
    fontSize: 21,
    color: colors.bg,
    paddingVertical: 8,
  },
  em: {
    fontFamily: "BaskItalics",
    fontSize: 24,
    color: colors.font,
    paddingVertical: 16,
  },
  p: {
    fontFamily: "AGMedium",
    fontSize: 13,
    // color: mode === "light" ? colors.grey : colors.grey100,
    lineHeight: 22,
  },
  menuItem: {
    fontFamily: "AGBook",
    fontSize: 36,
    paddingVertical: 8,
    color: colors.font,
  },
  selectedMenuItem: {
    fontFamily: "AGMedium",
    fontSize: 35,
    marginTop: 7,
    marginBottom: 1,
    // margin: 0,
    // padding: 0,
    paddingVertical: 8,
    color: colors.red,
  },
  caption: {
    fontFamily: "AGItalics",
    fontSize: 13,
    color: colors.red,
  },
  // FONT STYLES
  bold: {
    fontFamily: "AGBold",
    color: colors.font,
  },
  medium: {
    fontFamily: "AGMedium",
    color: colors.font,
  },
  italics: {
    fontFamily: "AGItalics",
    color: colors.font,
  },
});

export default Typography;
