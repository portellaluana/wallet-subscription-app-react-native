import { StyleSheet } from "react-native";
import { Card, Text } from "../../../design-system/components";
import { colors } from "../../../design-system/theme/colors";

type Props = {
  total: number;
};

export function SubscriptionsSummary({ total }: Props) {
  return (
    <Card style={styles.card}>
      <Text variant="caption">Total mensal</Text>
      <Text variant="title">R$ {total.toFixed(2)}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    backgroundColor: colors.primary,
  },
});
