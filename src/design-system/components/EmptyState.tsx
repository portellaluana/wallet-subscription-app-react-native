import { View } from "react-native";
import { spacing } from "../theme";
import { Button } from "./Button";
import { Text } from "./Text";

type Props = {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: Props) {
  return (
    <View style={{ marginTop: spacing.xl, gap: spacing.sm }}>
      <Text variant="subtitle">{title}</Text>
      <Text variant="caption">{description}</Text>

      <Button label={actionLabel} onPress={onAction} />
    </View>
  );
}
