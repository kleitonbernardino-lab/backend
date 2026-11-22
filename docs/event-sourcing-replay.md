# Event Sourcing & Snapshotting Architecture

## Deterministic Replay
The state of an aggregate root is derived as a pure fold over its historical domain events:
$$S_t = \text{foldl}(\text{apply}, S_0, [E_1, E_2, \dots, E_t])$$

## Snapshot Cadence
- Snapshots persisted every 100 events to bound reconstruction latency to $< 5\text{ ms}$.
- Event store schema enforced with strict unique constraint on `(aggregate_id, sequence_number)`.
