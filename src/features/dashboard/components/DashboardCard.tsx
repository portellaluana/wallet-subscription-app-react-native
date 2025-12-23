import { StyleSheet } from "react-native";
import { Card, Text } from "../../../design-system/components";

type Props = {
  label: string;
  value: string;
};

export function DashboardCard({ label, value }: Props) {
  return (
    <Card style={styles.card}>
      <Text variant="caption">{label}</Text>
      <Text variant="subtitle">{value}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 4,
  },
});
