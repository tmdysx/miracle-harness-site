CREATE TABLE guestbook_messages (
  id TEXT PRIMARY KEY NOT NULL,
  display_name TEXT NOT NULL CHECK (length(display_name) BETWEEN 1 AND 32),
  message TEXT NOT NULL CHECK (length(message) BETWEEN 1 AND 500),
  status TEXT NOT NULL DEFAULT 'visible' CHECK (status IN ('visible', 'hidden')),
  created_at INTEGER NOT NULL
);

CREATE INDEX guestbook_messages_public_feed
  ON guestbook_messages (status, created_at DESC);

CREATE TABLE guestbook_rate_limits (
  ip_hash TEXT NOT NULL,
  window_start INTEGER NOT NULL,
  message_count INTEGER NOT NULL CHECK (message_count BETWEEN 1 AND 3),
  PRIMARY KEY (ip_hash, window_start)
);

CREATE INDEX guestbook_rate_limits_cleanup
  ON guestbook_rate_limits (window_start);
