import { createContext, useContext } from "react";
import { useSubscriptions } from "../hooks/useSubscriptions";

const SubscriptionsContext = createContext<
  ReturnType<typeof useSubscriptions> | undefined
>(undefined);

export function SubscriptionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useSubscriptions();

  return (
    <SubscriptionsContext.Provider value={value}>
      {children}
    </SubscriptionsContext.Provider>
  );
}

export function useSubscriptionsContext() {
  const context = useContext(SubscriptionsContext);

  if (!context) {
    throw new Error(
      "useSubscriptionsContext must be used within SubscriptionsProvider"
    );
  }

  return context;
}
