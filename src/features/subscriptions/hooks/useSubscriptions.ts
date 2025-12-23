import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import { useEffect, useMemo, useState } from "react";
import { Subscription } from "../types";

const STORAGE_KEY = "@wallet:subscriptions";

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubscriptions();
  }, []);

  async function loadSubscriptions() {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSubscriptions(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Erro ao carregar assinaturas", e);
    } finally {
      setLoading(false);
    }
  }

  async function persist(data: Subscription[]) {
    setSubscriptions(data);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function addSubscription(data: Omit<Subscription, "id">) {
    const newItem: Subscription = {
      id: Crypto.randomUUID(),
      ...data,
    };

    persist([...subscriptions, newItem]);
  }

  function updateSubscription(id: string, data: Omit<Subscription, "id">) {
    persist(
      subscriptions.map((item) =>
        item.id === id ? { ...item, ...data } : item
      )
    );
  }

  function removeSubscription(id: string) {
    persist(subscriptions.filter((item) => item.id !== id));
  }

  function getSubscriptionById(id: string) {
    return subscriptions.find((item) => item.id === id);
  }

  const total = useMemo(
    () => subscriptions.reduce((acc, item) => acc + item.price, 0),
    [subscriptions]
  );

  return {
    subscriptions,
    loading,
    total,
    addSubscription,
    updateSubscription,
    removeSubscription,
    getSubscriptionById,
  };
}
