import { Meteor } from 'meteor/meteor'

import { google } from 'googleapis'

export const createAuth = scopes => {
  let jwtClient
  if (!process.env.GOOGLE_API_SERVICE_ACCOUNT) {
    console.error('please define GOOGLE_API_SERVICE_ACCOUNT')
  } else {
    const credentials = JSON.parse(process.env.GOOGLE_API_SERVICE_ACCOUNT)
    jwtClient = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      scopes
    )
    const authorizeSync = Meteor.wrapAsync(jwtClient.authorize, jwtClient)

    try {
      authorizeSync()
    } catch (e) {
      console.log(e)
    }
  }

  return jwtClient
}
