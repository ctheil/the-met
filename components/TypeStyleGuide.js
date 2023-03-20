import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./styles/styles";
import Typography, { Span } from "./Typography";

const TypeStyleGuide = () => {
  return (
    <View style={styles.typeContainer}>
      <Typography variant="h1">Il Trovatore</Typography>
      <Typography variant="h2">Giuseppe Verdi</Typography>
      <Typography variant="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <Span variant="p" fontStyle="italics">
          Distinctio eius id fugit, aspernatur,
        </Span>
        harum libero
        <Span variant="p" fontStyle="bold">
          mollitia incidunt error
        </Span>
        recusandae, unde veritatis provident quia dolorem.
        <Span variant="p" fontStyle="medium">
          Quibusdam aliquid doloribus amet minus dignissimos?
        </Span>
      </Typography>
      <Typography variant="menuItem">Synopsis</Typography>
      <Typography variant="menuItem">Showings</Typography>
      <Typography variant="selectedMenuItem">Cast</Typography>
      <Typography variant="cta">Purchase Tickets</Typography>
      <Typography variant="em">from $87.50</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    paddingVertical: 24,
    // paddingHorizontal: 36,
    backgroundColor: colors.bg,
    height: "100%",
    width: "100%",
    marginTop: StatusBar.height,
    // flex: 1,
    // flexDirection: "column",
    // gap: 24,
  },
});
export default TypeStyleGuide;
