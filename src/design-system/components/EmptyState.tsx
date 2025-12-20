import { StyleSheet, View } from "react-native";
import { colors, spacing } from "../theme";
import { Button } from "./Button";
import { Text } from "./Text";

type Props = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: Props) {
  return (
    <View style={styles.container}>
      <Text variant="subtitle" style={styles.title}>
        {title}
      </Text>

      {description && (
        <Text variant="caption" style={styles.description}>
          {description}
        </Text>
      )}

      {actionLabel && onAction && (
        <View style={styles.button}>
          <Button label={actionLabel} onPress={onAction} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xl,
    alignItems: "center",
    gap: spacing.sm,
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    color: colors.textSecondary,
  },
  button: {
    marginTop: spacing.md,
    width: "100%",
  },
});
