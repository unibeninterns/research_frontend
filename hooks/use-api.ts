"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/api";

interface UseApiOptions {
  immediate?: boolean;
  requiresAuth?: boolean;
}

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T = any>(
  endpoint: string,
  options: UseApiOptions = {},
): UseApiState<T> & {
  refetch: () => Promise<void>;
  mutate: (newData: T) => void;
} {
  const { immediate = true, requiresAuth = false } = options;

  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const fetchData = async (): Promise<void> => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await apiClient.request<T>(endpoint, { requiresAuth });
      setState((prev) => ({ ...prev, data: response, loading: false }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      setState((prev) => ({ ...prev, error: errorMessage, loading: false }));
    }
  };

  const refetch = async (): Promise<void> => {
    await fetchData();
  };

  const mutate = (newData: T): void => {
    setState((prev) => ({ ...prev, data: newData }));
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [endpoint, immediate]);

  return {
    ...state,
    refetch,
    mutate,
  };
}

export function useApiMutation<TData = any, TVariables = any>() {
  const [state, setState] = useState<{
    data: TData | null;
    loading: boolean;
    error: string | null;
  }>({
    data: null,
    loading: false,
    error: null,
  });

  const mutate = async (
    endpoint: string,
    variables?: TVariables,
    options: { method?: string; requiresAuth?: boolean } = {},
  ): Promise<TData> => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await apiClient.request<TData>(endpoint, {
        method: (options.method as any) || "POST",
        body: variables,
        requiresAuth: options.requiresAuth || false,
      });

      setState((prev) => ({ ...prev, data: response, loading: false }));
      return response;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      setState((prev) => ({ ...prev, error: errorMessage, loading: false }));
      throw error;
    }
  };

  return {
    ...state,
    mutate,
  };
}
