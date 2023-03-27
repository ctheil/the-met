import { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Button from "./layout/Button";
import { FontContext } from "./lib/context";

const FontSizePicker = () => {
  const { rem, setRem } = useContext(FontContext);
  const [fontSize, setFontSize] = useState(rem);
  // number input with value stored in state
  return (
    <View>
      <Text>FontSizePicker</Text>
      <TextInput value={fontSize} onChangeText={setFontSize} />
      <Button
        onPress={() => {
          setRem(fontSize);
        }}
      >
        Set Font Size
      </Button>
    </View>
  );
};

export default FontSizePicker;
