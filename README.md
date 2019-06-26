create an jwt auth client for google apis

## Usage

Make sure that you have this environment variable:

`GOOGLE_API_SERVICE_ACCOUNT`

See here how to setup a service account: https://github.com/theoephraim/node-google-spreadsheet#service-account-recommended-method

```js
import { createAuth } from 'meteor/panter:google-api-auth'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

const auth = createAuth(SCOPES)
```
