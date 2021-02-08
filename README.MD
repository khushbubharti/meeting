## To run the demo app locally:

1. NodeJs v12.X

2. Install root dependencies within the root directory: `npm install`

3. Navigate to the meeting sdk folder: `cd sdk`

4. Install dependencies: `npm install`

5. Navigate back to the root directory `cd ..`

5. Start the webpack server and node server concurrently: `npm start`

6. Open https://0.0.0.0:9000/ in your browser

### Troubleshooting

- You can change the `amazon-chime-sdk-js` [log level](https://aws.github.io/amazon-chime-sdk-js/enums/loglevel.html) by providing `logLevel` through URL as a query parameter with value 'warn' | 'error' | 'info' | 'debug' | 'off'.
   ```
    https://0.0.0.0:9000/?logLevel=debug
    ```

- `UnrecognizedClientException: The security token included in the request is invalid.` when trying to join a meeting

  This likely means that your AWS credentials are invalid. Refer to the [AWS Configuration docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) for setting up your credentials.