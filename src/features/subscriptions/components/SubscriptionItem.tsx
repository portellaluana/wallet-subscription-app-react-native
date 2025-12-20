import { Card, Text } from "../../../design-system/components";
import { Subscription } from "../types";

type Props = {
  data: Subscription;
};

export function SubscriptionItem({ data }: Props) {
  return (
    <Card>
      <Text variant="subtitle">{data.name}</Text>
      <Text variant="caption">R$ {data.price.toFixed(2)} / mês</Text>
    </Card>
  );
}
