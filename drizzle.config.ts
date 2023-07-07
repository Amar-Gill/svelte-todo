import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/server/schema.ts',
	driver: 'pg',
	out: 'drizzle'
} satisfies Config;
