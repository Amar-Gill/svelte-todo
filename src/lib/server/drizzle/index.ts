import { dburl } from '$env/static/private';
import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// for migrations
export const migrationClient = postgres(dburl, { max: 1 });

// for query purposes
const queryClient = postgres(dburl);
export const db: PostgresJsDatabase = drizzle(queryClient);
