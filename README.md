<!--
#
#Copyright (c) 2018 Nipuna H Herath
#
#Permission to use, copy, modify, and/or distribute this software 
#for any purpose with or without fee is hereby granted, provided 
#that the above copyright notice and this permission notice appear 
#in all copies.
#
#THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL 
#WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED 
#WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL 
#THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR 
#CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM 
#LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, 
#NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN 
#CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
#
-->
# ideamart-lbs-sdk (Deprecated. Use ideamart-sdk instead)  
## A lightweight Node.js wrapper for IdeaMart IdeaPro SMS API.

![alt text][banner]

# Installation
In your command-line on Windows:    
```bash    
    c:\> npm i ideamart-lbs-sdk --save
```    
    
In your terminal on Mac OS X/Linux:
```bash    
    $npm i ideamart-lbs-sdk --save
```

## How to use
In Node.js:
```js
// Load full IdeaMart SMS SDK build
const IdeaMart = require('ideamart-sms-sdk');

// Load SMSReceiver and SMSSender Modules separately
const SMSReceiver = IdeaMart.SMSReceiver;
const SMSSender = IdeaMart.SMSSender;

// Define the mandatory data that are needed for the API to function
const SERVER_URL = 'http://localhost:7000/sms/send';
const APP_ID = 'APP_000001';
const APP_PASSWORD = 'password';

// Create new sender instance to send a SMS.
const sender = new SMSSender.SMS(SERVER_URL, APP_ID, APP_PASSWORD);

// Sample route to test if the request response is working correctly.
app.post('/send', (req, res) => {
  // Extract the request data from request body using SMSReceiver module.
  const receiver = new SMSReceiver.SMS(req.body); 
  
  //Extract address and message from request body.
  const address = receiver.getAddress();
  const message = receiver.getMessage();

  // Send the SMS to the sender
  sender.sendSMS(message, address);
  // Return status for testing purposes when testing using Postman
  res.status(200).send(req.body);
});
```

## Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise based HTTP client for the browser and node.js

## License

ISC

[banner]: http://www.ideamart.lk/web/wp-content/uploads/2016/10/ideaPro-01.svg "IdeaMart"
