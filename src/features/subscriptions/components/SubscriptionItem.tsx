import { router } from "expo-router";
import { Pressable } from "react-native";
import { Card, Text } from "../../../design-system/components";
import { Subscription } from "../types";

type Props = {
  data: Subscription;
};

export default function SubscriptionItem({ data }: Props) {
  function handlePress() {
    router.push(`/subscriptions/${data.id}`);
  }

  return (
    <Pressable onPress={handlePress}>
      <Card>
        <Text variant="subtitle">{data.name}</Text>
        <Text variant="caption">R$ {data.price.toFixed(2)}</Text>
        <Text variant="caption">{data.status}</Text>
      </Card>
    </Pressable>
  );
}
