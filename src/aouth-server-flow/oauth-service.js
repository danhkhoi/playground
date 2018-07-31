// // import fs from 'fs';
// // import path from 'path';
// // import http from 'http';
// // import url from 'url';
// // import querystring from 'querystring';
// // import opn from 'opn';

// import {google} from 'googleapis';


// // const keyPath = path.join(__dirname, 'client_secret.json');
// // let keys = {redirect_uris: ['']};
// // if (fs.existsSync(keyPath)) {
// //     keys = require(keyPath).web;
// // }

// const keys = {
//     web: {
//         'client_id': '259896388824-5e6h656deerpgkq037r1o5f83osdugbs.apps.googleusercontent.com',
//         'project_id': 'ibl-project-2-211807',
//         'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
//         'token_uri': 'https://accounts.google.com/o/oauth2/token',
//         'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
//         'client_secret': 'agtIX9g1zQQiU9YaORTEANSw',
//         'redirect_uris': ['http://localhost:3000/serverflow/callback'],
//     },
// };

// const oauth2Client = new google.auth.OAuth2(
//     keys.client_id,
//     keys.client_secret,
//     keys.redirect_uris[0]
// );

// google.options({auth: oauth2Client});

// const scopes = [
//     'https://www.googleapis.com/auth/plus.me',
//     'https://www.googleapis.com/auth/calendar',
// ];

// const getAuthURL = oauth2Client.generateAuthUrl({
//     // 'online' (default) or 'offline' (gets refresh_token)
//     access_type: 'offline',

//     // If you only need one scope you can pass it as a string
//     scope: scopes,
// });

// export {getAuthURL};

// export default {getAuthURL};
