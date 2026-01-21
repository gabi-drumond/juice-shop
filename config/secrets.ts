// WARNING: This file contains intentionally fake secrets for GHAS demo purposes
// These are NOT real credentials - they are formatted to trigger secret scanning alerts

export const cloudConfig = {
  // AWS credentials (fake - for demo)
  aws: {
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    region: 'us-east-1'
  },

  // GitHub Personal Access Token (fake - for demo)
  github: {
    personalAccessToken: 'ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },

  // Stripe API keys (fake - for demo)
  stripe: {
    publishableKey: 'pk_live_51H7xK2EzVkKBxGMBTkBYV4C300A7BaBcDe',
    secretKey: 'sk_live_51H7xK2EzVkKBxGMBabcdefghijklmnopqrstuvw'
  },

  // SendGrid API key (fake - for demo)
  sendgrid: {
    apiKey: 'SG.xxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },

  // Twilio credentials (fake - for demo)
  twilio: {
    accountSid: 'ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    authToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },

  // Slack webhook (fake - for demo)
  slack: {
    webhookUrl: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'
  },

  // Database connection strings (fake - for demo)
  database: {
    mongoUri: 'mongodb+srv://admin:SuperSecretPassword123!@cluster0.abc123.mongodb.net/juiceshop',
    postgresUrl: 'postgresql://admin:P@ssw0rd!@db.example.com:5432/juiceshop'
  },

  // JWT secret (fake - for demo)
  jwt: {
    secret: 'my-super-secret-jwt-key-that-should-not-be-in-code-12345'
  },

  // Azure credentials (fake - for demo)
  azure: {
    storageConnectionString: 'DefaultEndpointsProtocol=https;AccountName=juiceshopstorage;AccountKey=aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789+abcdefghijklmnopqrstuvwxyzABCDEFGHIJKL==;EndpointSuffix=core.windows.net'
  },

  // Google Cloud API key (fake - for demo)
  gcp: {
    apiKey: 'AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },

  // NPM token (fake - for demo)
  npm: {
    authToken: 'npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },

  // Datadog API key (fake - for demo)
  datadog: {
    apiKey: 'dd0123456789abcdef0123456789abcd',
    appKey: 'abcdef0123456789abcdef0123456789abcdef01'
  }
}
