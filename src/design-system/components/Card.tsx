import { StyleSheet, View, ViewProps } from "react-native";

export function Card(props: ViewProps) {
  return <View style={styles.container} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F2933",
    borderRadius: 24,
    padding: 16,
  },
});
