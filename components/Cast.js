import { FlatList, StyleSheet, Text, View } from "react-native";
import CastItem from "./CastItem";
import { colors, padding } from "./styles/styles";
import { Blurhash } from "react-native-blurhash";
import { decodeBlurHash } from "fast-blurhash";

const castArr = [
  {
    name: "Marco Armiliato",
    role: "Conductor",
    performing: "March 17, 18",
    heading: "A Symphony of Passion in Il Trovatore at the Met Opera",
    subHead: "The Magic of Verdi Unleashed by the Maestro's Baton",
    bio: [
      "Hailing from Genoa, Italy, Marco Armiliato has risen to prominence as one of the most sought-after conductors in the world of opera, earning acclaim for his work in renowned opera houses like the Met, La Scala, and the Vienna State Opera.",
      "In the Met Opera's captivating production of Giuseppe Verdi's 'Il Trovatore,' Armiliato showcases his unparalleled musicianship and deep understanding of Verdi's music, as he effortlessly navigates the dramatic score and elicits transcendent performances from both the singers and the orchestra.",
      "His passion for honoring Verdi's vision and his commitment to creating unforgettable musical moments make this rendition of 'Il Trovatore' an experience that will resonate with opera lovers for years to come.",
    ],
    imgPath:
      "https://www.rsb-online.de/wp-content/uploads/Armiliato-Marco-credit-Ifkovitz-4_1920x2560.jpg",
  },
  {
    name: "Anna Netrebko",
    role: "LEONORA",
    performing: "March 17, 18",
    imgPath:
      "https://medicitv-b.imgix.net/artist/anna-netrebko_NeTOgjI.jpg?auto=format&q=85",
    heading:
      "Witness the Unforgettable: Anna Netrebko Stars in Il Trovatore at the Met Opera",
    subHead: "Experience the Soprano's Unparalleled Artistry on Stage",
    bio: [
      "Renowned for her breathtaking vocal range, captivating stage presence, and magnetic charisma, Russian-born soprano Anna Netrebko is set to mesmerize audiences in the Met Opera's upcoming production of Giuseppe Verdi's 'Il Trovatore.' Taking on the demanding role of Leonora, Netrebko's exceptional talent will undoubtedly light up the stage and bring the character to life with her luminous voice and emotional depth.",
      "Don't miss the opportunity to witness Anna Netrebko's unparalleled artistry as she masterfully navigates the complexities of Verdi's score and delivers a soul-stirring performance that will leave you spellbound. Join us at the Met Opera for this highly anticipated presentation of 'Il Trovatore' and experience the magic of one of the world's most extraordinary sopranos in action.",
    ],
  },
  {
    name: "Dolora Zajick",
    role: "AZUCENA",
    performing: "March 17, 18",
    imgPath:
      "https://www.opera.co.uk/wp-content/uploads/2020/07/Dolora-Zajick-c-John-Francis-Bourke.jpg",
    heading: "A Powerful Force in the Met Opera's Il Trovatore",
    subHead: "Experience the Mezzo-Soprano's Electrifying Presence on Stage",
    bio: [
      "Acclaimed mezzo-soprano Dolora Zajick has long been revered for her extraordinary vocal prowess, commanding stage presence, and remarkable dramatic instincts. In the Met Opera's upcoming production of Giuseppe Verdi's 'Il Trovatore,' Zajick is poised to deliver yet another unforgettable performance as she embodies the complex role of Azucena, the tormented gypsy woman.",
      "Don't miss this rare opportunity to witness Dolora Zajick's phenomenal artistry as she navigates the emotional depths of Verdi's score and captivates audiences with her powerful voice and riveting portrayal. Join us at the Met Opera for this highly anticipated presentation of 'Il Trovatore' and experience the unforgettable impact of one of opera's most exceptional mezzo-sopranos.",
    ],
  },
  {
    name: "Yonghoon Lee",
    role: "MANRICO",
    performing: "March 17, 18",
    imgPath:
      "https://image.pbs.org/video-assets/7qRtYdv-asset-mezzanine-16x9-lGNqE9n.jpg",
    heading: "A Tenor's Triumph in Verdi's Masterpiece",
    subHead: "Experience the Tenor's Spellbinding Performance on Stage",
    bio: [
      "South Korean tenor Yonghoon Lee has garnered international acclaim for his powerful voice, riveting stage presence, and unparalleled interpretive skills. As he takes on the challenging role of Manrico in Verdi's beloved opera, 'Il Trovatore,' audiences can anticipate a truly mesmerizing performance.",
      "Don't miss the chance to witness Yonghoon Lee's exceptional artistry as he navigates the emotional landscape of Verdi's iconic score, captivating the audience with his rich, soaring voice and deeply moving portrayal. Join us for this highly anticipated presentation of 'Il Trovatore' and immerse yourself in the unforgettable world created by one of opera's most remarkable tenors.",
    ],
  },
  {
    name: "Dmitri Hvorostovsky",
    role: "DI LUNA",
    performing: "March 17, 18",
    imgPath:
      "https://images.thestar.com/1Kpqa_N-u1K62d2m2xwqU3TMLPg=/1200x800/smart/filters:cb(2700061000):format(webp)/https://www.thestar.com/content/dam/thestar/entertainment/music/2017/11/22/opera-great-dmitri-hvorostovsky-dies-at-age-55/dmitri_hvorostovsky.jpg",
    heading: "A Baritone's Command in Verdi's Timeless Tale",
    subHead:
      "Witness the Late Baritone's Legacy through His Unforgettable Performance",
    bio: [
      "The late Dmitri Hvorostovsky, a legendary Russian baritone, captivated audiences worldwide with his velvety voice, charismatic stage presence, and unrivaled ability to bring depth and nuance to each character he portrayed. As the Met Opera honors Hvorostovsky's legacy with a special presentation of Verdi's 'Il Trovatore,' his powerful performance as Count di Luna will continue to resonate with opera lovers.",
      "Join us in paying tribute to Dmitri Hvorostovsky's enduring artistry as we experience once again the emotional intensity and passion he brought to the role of Count di Luna. This exceptional presentation of 'Il Trovatore' serves as a testament to the lasting impact of one of opera's most remarkable baritones, whose voice and talent will forever be remembered.",
    ],
  },
  {
    name: "Stefan Kocán",
    role: "FERRANDO",
    performing: "March 17, 18",
    imgPath: "https://live.staticflickr.com/529/19960192849_69e53d95fe_h.jpg",
    heading: "A Towering Bass in Verdi's Captivating Drama",
    subHead: "Experience the Resonance of a Masterful Voice on Stage",
    bio: [
      "Slovak bass Stefan Kocán has earned international recognition for his commanding voice, riveting stage presence, and remarkable ability to bring depth and nuance to each character he portrays. As he takes on the role of Ferrando in Verdi's enthralling opera, 'Il Trovatore,' audiences can expect an awe-inspiring performance that showcases his exceptional talent.",
      "Don't miss the opportunity to witness Stefan Kocán's extraordinary artistry as he navigates the dramatic landscape of Verdi's iconic score, captivating the audience with his resonant, powerful voice and captivating portrayal. Join us for this highly anticipated presentation of 'Il Trovatore' and immerse yourself in the unforgettable world created by one of opera's most compelling bass voices.",
    ],
  },
];

for (let i = 0; i < castArr.length; i++) {
  castArr[i].placeholder = decodeBlurHash(castArr[i].imgPath, 32, 32);
}

const Cast = () => {
  return (
    <View style={style.container}>
      {castArr.map((cast, i) => (
        <CastItem index={i} key={cast.name} cast={cast} />
      ))}
    </View>
    //   <FlatList
    //     data={castArr}
    //     renderItem={({ item, index }) => <CastItem cast={item} index={index} />}
    //     keyExtractor={(item) => item.name}
    //   />
  );
};

// create a stylesheet using React Native's StyleSheet.create method
const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#000000",
    marginLeft: -padding.mainHorizontal / 2,
    marginRight: -padding.mainHorizontal / 2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 24,
  },
});

export default Cast;
