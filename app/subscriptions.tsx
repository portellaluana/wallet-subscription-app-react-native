import { View } from "react-native";
import { Card, Screen, Skeleton, Text } from "../src/design-system/components";

const isLoading = true;

export default function SubscriptionsScreen() {
  return (
    <Screen>
      <Text variant="title">Assinaturas</Text>

      {isLoading && (
        <View style={{ gap: 12, marginTop: 16 }}>
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <Skeleton style={{ height: 20, marginBottom: 8 }} />
              <Skeleton style={{ height: 14, width: "40%" }} />
            </Card>
          ))}
        </View>
      )}
    </Screen>
  );
}
