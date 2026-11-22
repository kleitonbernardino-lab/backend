export interface MetricSample {
  name: string;
  value: number;
  labels: Record<string, string>;
}

export class MetricsRegistry {
  private counters = new Map<string, number>();

  increment(name: string, by = 1): void {
    const cur = this.counters.get(name) ?? 0;
    this.counters.set(name, cur + by);
  }

  get(name: string): number {
    return this.counters.get(name) ?? 0;
  }
}
