import { env } from '$env/dynamic/public';
import { createClient } from '@propelauth/javascript';

export const authClient = createClient({
	// The base URL where your authentication pages are hosted. You can find this under the Frontend Integration section for your project.
	authUrl: env.PUBLIC_PROPEL_AUTH_CLIENT_URL,
	// If true, periodically refresh the access token in the background. This helps ensure you always have a valid token ready to go. Default true.
	enableBackgroundTokenRefresh: true
});
