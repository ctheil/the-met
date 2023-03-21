import { Image } from "expo-image";
import { Animated, StyleSheet, Text, View } from "react-native";
import { colors, padding } from "./styles/styles";
import Typography, { Span } from "./Typography";
import imageOne from "../assets/images/Group_Swords_Trovatore_2271-s.jpg";
import imageTwo from "../assets/images/the-gypsy.jpg";
import imageThree from "../assets/images/son2.jpeg";
import imageFour from "../assets/images/execution.jpeg";
import { useEffect, useRef } from "react";
import Divider from "./layout/Divider";

const Synopsis = () => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(-1600)).current;

  useEffect(() => {
    Animated.spring(progress, { toValue: 1, useNativeDriver: true }).start();
    Animated.spring(height, { toValue: 0, useNativeDriver: true }).start();
    Animated.timing(opacity, { toValue: 1, useNativeDriver: true }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: progress, transform: [{ translateY: height }] },
      ]}
    >
      <View style={styles.heading}>
        <Text
          style={[
            styles.altFont,
            { alignSelf: "flex-start", marginLeft: "18%" },
          ]}
        >
          The
        </Text>
        <Typography fontSize={116} variant="h1" color={colors.font}>
          Act I
        </Typography>
        <Text
          style={[
            styles.altFont,
            { alignSelf: "flex-end", marginRight: "17%" },
          ]}
        >
          Duel
        </Text>
      </View>
      <View style={styles.imageBox}>
        <Image source={imageOne} width={"100%"} height={900} />
        <View style={styles.caption}>
          <Typography variant="caption">
            Yonghoon Lee as Manrico at the Met: Il Trovatore (2016).
          </Typography>
          <Typography variant="caption">
            Photo: Marty Sohl/Metropolitan Opera.
          </Typography>
        </View>
      </View>
      <Animated.View style={[styles.p, { opacity: opacity }]}>
        <Typography variant="p">
          <Span variant="p" fontStyle="bold">
            Spain, early 19th century, during the Peninsular War.
          </Span>
          The commander of the Royalist Aragon troops, Count di Luna, is
          obsessed with Leonora, a young noblewoman in the queen’s service, who
          does not return his love.
        </Typography>
        <Typography variant="p">
          Outside the royal residence, his soldiers keep watch at night. They
          have heard an unknown troubadour serenading Leonora, and the jealous
          count is determined to capture and punish him.{" "}
        </Typography>
        <Typography variant="p">
          To keep his troops awake, the captain, Ferrando, recounts the terrible
          story of a gypsy woman who was burned at the stake years ago for
          bewitching the count’s infant brother. The gypsy’s daughter then took
          revenge by kidnapping the boy and throwing him into the flames where
          her mother had died.
        </Typography>
        <Typography variant="p">
          The charred skeleton of a baby was discovered there, and di Luna’s
          father died of grief soon after. The gypsy’s daughter disappeared
          without a trace, but di Luna has sworn to find her.
        </Typography>
        <Divider variant={true} />
        <Typography variant="p">
          In the palace gardens, Leonora confides in her companion Ines that she
          is in love with a mysterious man she met before the outbreak of the
          war, and that he is the troubadour who serenades her each night.{" "}
        </Typography>
        <Typography variant="p">
          After they have left, Count di Luna appears, looking for Leonora. When
          she hears the troubadour’s song in the darkness, Leonora rushes out to
          greet her beloved but mistakenly embraces di Luna.
        </Typography>
        <Typography variant="p">
          The troubadour reveals his true identity: He is Manrico, leader of the
          partisan rebel forces. Furious, the count challenges him to fight to
          the death.
        </Typography>
      </Animated.View>
      <View style={styles.heading}>
        <Text
          style={[
            styles.altFont,
            { alignSelf: "flex-start", marginLeft: "14%" },
          ]}
        >
          The
        </Text>
        <Typography fontSize={116} variant="h1" color={colors.font}>
          Act II
        </Typography>
        <Text
          style={[
            styles.altFont,
            { alignSelf: "flex-end", marginRight: "13%" },
          ]}
        >
          Gypsy
        </Text>
      </View>

      <View style={styles.imageBox}>
        <Image source={imageTwo} width={"100%"} height={500} />
      </View>
      <View style={styles.p}>
        <Span variant="p" fontStyle="italics">
          During the duel, Manrico overpowered the count, but some instinct
          stopped him from killing his rival. The war has raged on, with the
          Royalist forces victorious in the most recent battle.
        </Span>
        <Span variant="p" fontStyle="italics">
          Manrico was badly wounded, but his mother, the gypsy Azucena, has
          nursed him back to health in a camp in the mountains.
        </Span>
        <Typography variant="p">
          A band of gypsies gathers at their mountain hideout. Azucena is the
          woman for whom di Luna has been searching. Her life is scarred by the
          memory of her mother’s death and the terrible revenge she exacted.
          Manrico, who has never heard the full story, is determined to finally
          know the truth.{" "}
        </Typography>
        <Typography variant="p">
          Azucena tells him how she stole the older count’s infant son but, in
          her manic rage, accidentally murdered her own child instead. When
          Manrico demands to know who he truly is, Azucena is evasive: All that
          matters is the mother’s love she has shown him all his life and that
          he does not fail to take revenge on the house of di Luna.{" "}
        </Typography>
        <Typography variant="p">
          A messenger arrives with news that Leonora, believing that Manrico has
          fallen in battle and hoping to escape di Luna’s grasp, is entering a
          convent. Azucena pleads with Manrico to stay, but he resolves to go to
          her immediately.
        </Typography>
        <Divider variant={true} />

        <Typography variant="p">
          Di Luna arrives at the convent with his troops to take Leonora by
          force, but his attempt to seize her is foiled when Manrico and his men
          attack. In the ensuing chaos, the lovers escape.
        </Typography>
        <Typography variant="p"></Typography>
      </View>
      <View style={styles.heading}>
        <Text
          style={[
            styles.altFont,
            { alignSelf: "flex-start", marginLeft: "10%" },
          ]}
        >
          The
        </Text>
        <Typography fontSize={116} variant="h1" color={colors.font}>
          Act III
        </Typography>
        <Text
          style={[styles.altFont, { alignSelf: "flex-end", marginRight: "9%" }]}
        >
          Gypsy's Son
        </Text>
      </View>

      <View style={styles.imageBox}>
        <Image
          source={imageThree}
          width={"100%"}
          height={500}
          contentPosition={{ top: 0, right: "70%" }}
        />
      </View>
      <View style={styles.p}>
        <Typography variant="p">
          Di Luna has laid siege to the fortress where Manrico has taken refuge
          with Leonora. Soon, soldiers bring in Azucena, whom Ferrando and his
          men have captured wandering nearby.{" "}
        </Typography>
        <Typography variant="p">
          When she hears di Luna’s name, her reaction arouses suspicion, and
          Ferrando recognizes her as the murderer of the count’s brother.
          Azucena cries out to Manrico to rescue her, and di Luna realizes that
          he now has his enemy in his hands.
        </Typography>
        <Typography variant="p">
          {" "}
          He orders a pyre built for Azucena before the walls of the fortress.
        </Typography>
        <Divider variant={true} />

        <Typography variant="p">
          Inside the castle, Manrico and Leonora are preparing to be married.
          She is frightened, but he assures her of his love even in the face of
          death. When news of Azucena’s capture arrives, Manrico summons his
          forces and prepares to attack.
        </Typography>
      </View>
      <View style={styles.heading}>
        <Text
          style={[
            styles.altFont,
            { alignSelf: "flex-start", marginLeft: "10%" },
          ]}
        >
          The
        </Text>
        <Typography fontSize={116} variant="h1" color={colors.font}>
          Act IV
        </Typography>
        <Text
          style={[styles.altFont, { alignSelf: "flex-end", marginRight: "9%" }]}
        >
          Execution
        </Text>
      </View>

      <View style={styles.imageBox}>
        <Image
          source={imageFour}
          width={"100%"}
          height={500}
          contentPosition={{ top: 0, right: "70%" }}
        />
      </View>
      <View style={styles.p}>
        <Typography variant="p">
          Manrico’s army has been defeated, and he and Azucena are being held
          captive in di Luna’s castle. Leonora has escaped and now comes to the
          prison to pray for Manrico’s salvation.
        </Typography>
        <Typography variant="p">
          When di Luna orders the execution of Manrico and Azucena at sunrise,
          Leonora offers herself to the count in return for her lover’s life;
          however, she secretly takes a slow-acting poison, sealing her fate.
        </Typography>
        <Divider variant={true} />
        <Typography variant="p">
          In their cell, Manrico tries to comfort Azucena, who is terrified of
          the stake and the fire that await her. Leonora appears to tell Manrico
          that he is saved and urges him to escape.
        </Typography>
        <Typography variant="p">
          Understanding that she has promised herself to di Luna, he denounces
          her and refuses to flee. But the poison is already taking effect, and
          Leonora dies in his arms, just as di Luna arrives.
        </Typography>
        <Typography variant="p">
          {" "}
          He sends Manrico to his execution. Azucena cries out that her mother
          is avenged: di Luna has killed his own brother.
        </Typography>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.mainHorizontal,
    // alignItems: "center",
  },
  altFont: {
    fontFamily: "AGMedium",
    color: colors.red,
    fontSize: 27,
    marginBottom: -25,
    marginTop: -7,
  },
  heading: {
    alignItems: "center",
    textAlign: "center",
    marginVertical: 16,
    flexDirection: "column",
    paddingVertical: 16,
  },
  imageBox: {
    marginHorizontal: -padding.mainHorizontal * 2,
    marginBottom: 36,
  },
  caption: {
    marginTop: 8,
    marginHorizontal: padding.mainHorizontal * 2,
  },
  p: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 24,
    marginBottom: 24,
  },
});

export default Synopsis;
