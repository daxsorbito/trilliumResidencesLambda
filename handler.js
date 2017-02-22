'use strict';

module.exports.validateAndSend = (event, context, callback) => {
  console.log(JSON.stringify(event, null, 2))
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
      eventBody: event.body,
      queryType: JSON.parse(event.body).queryType,
      dataSource: JSON.parse(event.body).dataSource,
      env: env.DAX_TEST
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
