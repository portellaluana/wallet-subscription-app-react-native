export type SubscriptionStatus = "active" | "late" | "canceled";

export type Subscription = {
  id: string;
  name: string;
  price: number;
  status: SubscriptionStatus;
};
