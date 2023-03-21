import { StyleSheet, Text } from "react-native";
import { colors } from "./styles/styles";
import { bg, grey, red, white } from "./styles/typography-styles";

export const Span = ({ variant, fontStyle, children }) => {
  return <Text style={[styles[variant], styles[fontStyle]]}> {children} </Text>;
};
const Typography = (props) => {
  // const [variant, fontSize, color] = props;
  const { variant } = props;
  return (
    <Text
      style={[
        styles[variant],
        {
          fontFamily:
            props.fontStyle === "italics"
              ? "AGItalics"
              : styles[variant].fontFamily,
          color: props.color || styles[variant].color,
          fontSize: props.fontSize || styles[variant].fontSize,
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
    color: colors.grey,
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
    color: colors.font,
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
