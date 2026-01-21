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
  },

  // OpenAI API key (fake - for demo)
  openai: {
    apiKey: 'sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },

  // Mailchimp API key (fake - for demo)
  mailchimp: {
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us21'
  },

  // Discord webhook (fake - for demo)
  discord: {
    webhookUrl: 'https://discord.com/api/webhooks/123456789012345678/abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123'
  },

  // Cloudflare API token (fake - for demo)
  cloudflare: {
    apiToken: 'v1.0-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },

  // Heroku API key (fake - for demo)
  heroku: {
    apiKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  },

  // Firebase config (fake - for demo)
  firebase: {
    apiKey: 'AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    authDomain: 'juiceshop-demo.firebaseapp.com',
    databaseURL: 'https://juiceshop-demo.firebaseio.com',
    projectId: 'juiceshop-demo',
    messagingSenderId: '123456789012',
    appId: '1:123456789012:web:abcdef0123456789abcdef'
  },

  // PayPal credentials (fake - for demo)
  paypal: {
    clientId: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789-_',
    clientSecret: 'EaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
  },

  // GitLab Personal Access Token (fake - for demo)
  gitlab: {
    personalAccessToken: 'glpat-xxxxxxxxxxxxxxxxxxxx'
  },

  // Shopify API credentials (fake - for demo)
  shopify: {
    apiKey: 'shpat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    apiSecret: 'shpss_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },

  // Sentry DSN (fake - for demo)
  sentry: {
    dsn: 'https://abcdef0123456789abcdef0123456789@o123456.ingest.sentry.io/1234567'
  },

  // Redis connection (fake - for demo)
  redis: {
    url: 'redis://default:SuperSecretRedisPassword123!@redis-12345.c123.us-east-1-2.ec2.cloud.redislabs.com:12345'
  },

  // Elasticsearch credentials (fake - for demo)
  elasticsearch: {
    cloudId: 'juiceshop:dXMtZWFzdC0xLmF3cy5mb3VuZC5pbyRhYmNkZWYxMjM0NTY3ODkwYWJjZGVmMTIzNDU2Nzg5MCRhYmNkZWYxMjM0NTY3ODkwYWJjZGVmMTIzNDU2Nzg5MA==',
    apiKey: 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=='
  }
}
