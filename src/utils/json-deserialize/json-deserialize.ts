export function JSONDeserialize<T extends Record<string, any>>(data: string): T {
  return JSON.parse(data as any) as T;
}
