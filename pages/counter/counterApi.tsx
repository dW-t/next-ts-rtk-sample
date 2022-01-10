export interface FetchResult {
  data: number;
}

export const fetchCount = (amount: number = 1): Promise<FetchResult> => {
  return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500));
};
