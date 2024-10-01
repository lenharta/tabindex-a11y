export function JSONSerialize<T extends Record<string, any>>(data: T): string {
  return JSON.stringify(data as T) as string;
}
