import { router } from "expo-router";
import { View } from "react-native";
import { Button, Screen, Text } from "../src/design-system/components";

export default function HomeScreen() {
  return (
    <Screen>
      <Text variant="title">Wallet</Text>
      <Text variant="caption">Gerencie suas assinaturas em um só lugar</Text>

      <View style={{ marginTop: 24 }}>
        <Button
          label="Ver assinaturas"
          onPress={() => router.push("./subscriptions")}
        />
      </View>
    </Screen>
  );
}
