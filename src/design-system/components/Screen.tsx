import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { colors } from "../theme/colors";

type Props = ViewProps & {
  scroll?: boolean;
  children: React.ReactNode;
};

export function Screen({ scroll = false, style, children, ...props }: Props) {
  const Container = scroll ? ScrollView : View;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container
        {...props}
        style={[styles.container, style]}
        contentContainerStyle={scroll ? styles.scroll : undefined}
      >
        {children}
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  scroll: {
    paddingBottom: 24,
  },
});
