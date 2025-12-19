import { Text as RNText, TextProps } from "react-native";
import { typography } from "../theme/typography";

type TextVariant = keyof typeof typography;

type Props = TextProps & {
  variant?: TextVariant;
};

export function Text({ variant = "body", style, ...props }: Props) {
  return <RNText style={[typography[variant], style]} {...props} />;
}
