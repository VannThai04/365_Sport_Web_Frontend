import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const dataDirectory = join(process.cwd(), ".data");
mkdirSync(dataDirectory, { recursive: true });

const database = new Database(join(dataDirectory, "365-sport.sqlite"));
database.pragma("journal_mode = WAL");
database.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    phone TEXT NOT NULL DEFAULT '',
    role TEXT NOT NULL DEFAULT 'Customer',
    status TEXT NOT NULL DEFAULT 'Active',
    orders INTEGER NOT NULL DEFAULT 0,
    spent REAL NOT NULL DEFAULT 0,
    joined TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`);

export default database;
