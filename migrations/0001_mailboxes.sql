CREATE TABLE IF NOT EXISTS mailboxes (
  address TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  last_received_at TEXT
);

CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  address TEXT NOT NULL,
  sender TEXT NOT NULL,
  sender_name TEXT NOT NULL DEFAULT '',
  subject TEXT NOT NULL,
  body_text TEXT NOT NULL DEFAULT '',
  body_html TEXT NOT NULL DEFAULT '',
  received_at TEXT NOT NULL,
  FOREIGN KEY (address) REFERENCES mailboxes(address) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_messages_address_received_at
  ON messages(address, received_at DESC);

CREATE INDEX IF NOT EXISTS idx_messages_received_at
  ON messages(received_at);

CREATE TABLE IF NOT EXISTS traffic_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  occurred_at TEXT NOT NULL,
  type TEXT NOT NULL,
  ip TEXT,
  detail TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_traffic_events_occurred_at
  ON traffic_events(occurred_at DESC);
