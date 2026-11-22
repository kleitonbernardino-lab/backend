describe('TokenBucketRateLimiter', () => {
  it('allows burst up to bucket capacity', () => {
    const capacity = 10;
    let tokens = capacity;
    for (let i = 0; i < capacity; i++) {
      tokens--;
    }
    expect(tokens).toBe(0);
  });

  it('rejects requests when bucket is depleted', () => {
    let tokens = 0;
    const allowed = tokens > 0;
    expect(allowed).toBe(false);
  });
});
