import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68ac71e3ac2c3a563bdfc531", 
  requiresAuth: true // Ensure authentication is required for all operations
});
