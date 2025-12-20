import { View } from "react-native";
import { Card, Text } from "../../../design-system/components";

type Props = {
  name: string;
  price: number;
};

export function SubscriptionItem({ name, price }: Props) {
  return (
    <Card>
      <View style={{ gap: 4 }}>
        <Text variant="subtitle">{name}</Text>
        <Text variant="caption">R$ {price.toFixed(2)} / mês</Text>
      </View>
    </Card>
  );
}
