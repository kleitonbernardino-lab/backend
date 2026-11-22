# Distributed Locking & Idempotent Lease Protocol

## Overview
To prevent double-spend and concurrent settlement anomalies across horizontally scaled workers:
1. **Lease TTL:** Default 30-second lease with monotonic heartbeat renewal.
2. **Fencing Token:** Monotonically increasing sequence number passed to storage layers to discard stale worker writes.
3. **Graceful Release:** Deterministic unlock on completion via Lua atomic compare-and-delete.
