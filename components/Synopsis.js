import { Image } from "expo-image";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import { colors, padding } from "./styles/styles";
import Typography, { Span } from "./Typography";
import imageOne from "../assets/images/actI.png";
import imageTwo from "../assets/images/actII.png";
import imageThree from "../assets/images/actIII.png";
import imageFour from "../assets/images/actIV.png";
import { useEffect, useRef, useState } from "react";
import Divider from "./layout/Divider";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { LinearGradient } from "expo-linear-gradient";

const items = [
  {
    subHeader: ["The", "Duel"],
    subHeaderProps: [{ marginLeft: "18%" }, { marginRight: "17%" }],
    header: "Act I",
    image: imageOne,
    imageProps: {
      style: {
        borderTopWidth: 10,
        borderColor: colors.red,
        borderWidth: 0,
      },
      transition: 250,
      width: "100%",
      height: 1000,
      placeholder:
        "|26@.n0201?G%M9G4:~pD+Rj9b?Zs.Ip%1WAWCRk00?H^*D*9a^*-:4:%L9a^%9GkC-o9at7oextxu%09aog?ZE2ayxaRk^*9at7xaV@%Lk9s:IV%0E2-pt6IVt7WBxaWBxtt7V[IoNH%KIpRk%10Mxut6oeayWAxaIos:",
    },
    // caption: [
    //   "Yonghoon Lee as Manrico at the Met: Il Trovatore (2016).",
    //   "Photo: Marty Sohl/Metropolitan Opera.",
    // ],
    paragraphs: [
      <Span color={colors.grey100} variant="p" fontStyle="bold">
        Spain, early 19th century, during the Peninsular War.
      </Span>,
      "The commander of the Royalist Aragon troops, Count di Luna, is obsessed with Leonora, a young noblewoman in the queen’s service, who does not return his love.",
      "Outside the royal residence, his soldiers keep watch at night. They have heard an unknown troubadour serenading Leonora, and the jealous count is determined to capture and punish him.",
      "To keep his troops awake, the captain, Ferrando, recounts the terrible story of a gypsy woman who was burned at the stake years ago for bewitching the count’s infant brother. The gypsy’s daughter then took revenge by kidnapping the boy and throwing him into the flames where her mother had died.",
      "The charred skeleton of a baby was discovered there, and di Luna’s father died of grief soon after. The gypsy’s daughter disappeared without a trace, but di Luna has sworn to find her.",
      "In the palace gardens, Leonora confides in her companion Ines that she is in love with a mysterious man she met before the outbreak of the war, and that he is the troubadour who serenades her each night.",
      "After they have left, Count di Luna appears, looking for Leonora. When she hears the troubadour’s song in the darkness, Leonora rushes out to greet her beloved but mistakenly embraces di Luna.",
      "The troubadour reveals his true identity: He is Manrico, leader of the partisan rebel forces. Furious, the count challenges him to fight to the death.",
    ],
  },
  {
    subHeader: ["The", "Gypsy"],
    subHeaderProps: [{ marginLeft: "14%" }, { marginRight: "13%" }],
    header: "Act II",
    image: imageTwo,
    imageProps: {
      width: "100%",
      height: 1000,
      contentPosition: { top: 0, right: "45%" },
    },

    paragraphs: [
      <Span color={colors.grey100} variant="p" fontStyle="bold">
        During the duel, Manrico overpowered the count, but some instinct
        stopped him from killing his rival. The war has raged on, with the
        Royalist forces victorious in the most recent battle.
      </Span>,
      <Span color={colors.grey100} variant="p" fontStyle="bold">
        Manrico was badly wounded, but his mother, the gypsy Azucena, has nursed
        him back to health in a camp in the mountains.
      </Span>,
      "A band of gypsies gathers at their mountain hideout. Azucena is the woman for whom di Luna has been searching. Her life is scarred by the memory of her mother’s death and the terrible revenge she exacted. Manrico, who has never heard the full story, is determined to finally know the truth.",
      "Azucena tells him how she stole the older count’s infant son but, in her manic rage, accidentally murdered her own child instead. When Manrico demands to know who he truly is, Azucena is evasive: All that matters is the mother’s love she has shown him all his life and that he does not fail to take revenge on the house of di Luna.",
      "A messenger arrives with news that Leonora, believing that Manrico has fallen in battle and hoping to escape di Luna’s grasp, is entering a convent. Azucena pleads with Manrico to stay, but he resolves to go to her immediately.",
      "Di Luna arrives at the convent with his troops to take Leonora by force, but his attempt to seize her is foiled when Manrico and his men attack. In the ensuing chaos, the lovers escape.",
    ],
  },
  {
    subHeader: ["The", "Gypsy's Son"],
    subHeaderProps: [{ marginLeft: "10%" }, { marginRight: "9%" }],
    header: "Act III",
    image: imageThree,
    imageProps: {
      width: "100%",
      height: 1000,
      contentPosition: { top: 0, right: "70%" },
    },

    paragraphs: [
      "Di Luna has laid siege to the fortress where Manrico has taken refuge with Leonora. Soon, soldiers bring in Azucena, whom Ferrando and his men have captured wandering nearby.",
      "When she hears di Luna’s name, her reaction arouses suspicion, and Ferrando recognizes her as the murderer of the count’s brother. Azucena cries out to Manrico to rescue her, and di Luna realizes that he now has his enemy in his hands.",
      "He orders a pyre built for Azucena before the walls of the fortress",
      "Inside the castle, Manrico and Leonora are preparing to be married. She is frightened, but he assures her of his love even in the face of death. When news of Azucena’s capture arrives, Manrico summons his forces and prepares to attack.",
    ],
  },
  {
    subHeader: ["The", "Execution"],
    subHeaderProps: [{ marginLeft: "10%" }, { marginRight: "9%" }],
    header: "Act IV",
    image: imageFour,
    imageProps: {
      width: "100%",
      height: 1000,
      contentPosition: { top: 0, right: "70%" },
    },

    paragraphs: [
      "Manrico’s army has been defeated, and he and Azucena are being held captive in di Luna’s castle. Leonora has escaped and now comes to the prison to pray for Manrico’s salvation.",
      "When di Luna orders the execution of Manrico and Azucena at sunrise, Leonora offers herself to the count in return for her lover’s life; however, she secretly takes a slow-acting poison, sealing her fate.",
      "In their cell, Manrico tries to comfort Azucena, who is terrified of the stake and the fire that await her. Leonora appears to tell Manrico that he is saved and urges him to escape.",
      "Understanding that she has promised herself to di Luna, he denounces her and refuses to flee. But the poison is already taking effect, and Leonora dies in his arms, just as di Luna arrives.",
      "He sends Manrico to his execution. Azucena cries out that her mother is avenged: di Luna has killed his own brother.",
    ],
  },
];
const Synopsis = () => {
  const translate = useRef(new Animated.Value(-20)).current;
  const opacity = useRef(new Animated.Value(0.9)).current;
  const height = useRef(new Animated.Value(-40)).current;
  const scale = useRef(new Animated.Value(0.95)).current;
  const width = useRef(new Animated.Value(90)).current;
  const [scrollY, setScrollY] = useState(null);
  const [indentRef, setIndentRef] = useState(0);

  useEffect(() => {
    Animated.timing(translate, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
    Animated.stagger(200, [
      Animated.spring(height, {
        toValue: 0,
        duration: 100,

        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(width, {
        toValue: 100,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    // <Swipeable renderLeftActions={<Text>Back?</Text>}>
    <Animated.View
      style={[
        styles.container,

        {
          opacity: opacity,
        },
      ]}
    >
      {items.map((item, index) => (
        <>
          <Animated.View
            key={`${item.header}_${index}_heading`}
            style={[
              [styles.heading],
              { transform: [{ translateY: translate }, { scale: scale }] },
            ]}
          >
            <Text
              style={[
                styles.altFont,
                { alignSelf: "flex-start" },
                item.subHeaderProps[0],
              ]}
            >
              {item.subHeader[0]}
            </Text>
            <Typography fontSize={116} variant="h1" color={colors.bg}>
              {item.header}
            </Typography>
            <Text
              style={[
                styles.altFont,
                { alignSelf: "flex-end" },
                item.subHeaderProps[1],
              ]}
            >
              {item.subHeader[1]}
            </Text>
          </Animated.View>
          <Animated.View
            key={`${item.header}_${index}_image`}
            style={[
              styles.imageBox,

              {
                transform: [{ translateY: height }, { scale: scale }],
                // width: width,
              },
            ]}
          >
            <Image
              style={item.imageProps.style}
              transition={item.imageProps.transition}
              source={item.image}
              width={item.imageProps.width}
              height={item.imageProps.height}
              {...item.imageProps}
            />
            <LinearGradient
              style={styles.imgFade}
              colors={[
                "rgba(0, 0, 0, 0)",
                "rgba(0, 0, 0, 0.75)",
                "rgba(0, 0, 0, 1)",
              ]}
            />

            {item.caption && (
              <View style={styles.caption}>
                <Typography variant="caption">{item.caption[0]}</Typography>
                <Typography variant="caption">{item.caption[1]}</Typography>
              </View>
            )}
          </Animated.View>
          <Animated.View
            key={`${item.header}_${index}_paragraphs`}
            style={[styles.p, { opacity: opacity }]}
          >
            <Animated.View style={[styles.p, { opacity: opacity }]}>
              {item.paragraphs.map((paragraph, index) => {
                let indent = false;
                if (typeof paragraph == "object" || index === 0) {
                  indent = false;
                } else if (typeof item.paragraphs[index - 1] != "object") {
                  indent = true;
                }
                return (
                  <Typography
                    indent={indent}
                    color={colors.grey50}
                    key={index}
                    variant="p"
                  >
                    {paragraph}
                  </Typography>
                );
              })}
            </Animated.View>
          </Animated.View>
        </>
      ))}
    </Animated.View>
    // </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -padding.mainHorizontal,
    paddingHorizontal: padding.mainHorizontal + padding.mainHorizontal * 0.5,
    backgroundColor: "#000",
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
    overflow: "hidden",
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
    marginTop: -150,
  },
  imgFade: {
    // width: "100%",
    height: 500,
    position: "absolute",

    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Synopsis;
