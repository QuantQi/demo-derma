# Firebase Service Account Configuration

This file should contain the Firebase service account key in JSON format.
It has been excluded from version control for security reasons.

Create this file with the following structure:

```json
{
  "type": "service_account",
  "project_id": "fir-69ad1",
  "private_key_id": "your-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...your-private-key...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@fir-69ad1.iam.gserviceaccount.com",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40fir-69ad1.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
```

The actual service account key has been provided in the issue description.