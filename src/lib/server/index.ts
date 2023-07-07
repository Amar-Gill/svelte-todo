import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const dbUrl = import.meta.env.dburl;

// for migrations
export const migrationClient = postgres(dbUrl, { max: 1 });

// for query purposes
const queryClient = postgres(dbUrl);
export const db: PostgresJsDatabase = drizzle(queryClient);
