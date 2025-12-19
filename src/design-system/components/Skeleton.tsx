import { View, ViewProps } from "react-native";

type SkeletonProps = ViewProps;

export function Skeleton({ style, ...props }: SkeletonProps) {
  return (
    <View
      style={[
        {
          backgroundColor: "#2A2E45",
          borderRadius: 8,
        },
        style,
      ]}
      {...props}
    />
  );
}
