/**
 * Detect the keep-alive ping from CloudWatch and exit early. This keeps our
 * lambda function running hot.
 * @param {AWSLambda.Handler} lambdaFn
 */
export default function(lambdaFn) {
  return (event, context) => {
    if (event.source === 'aws.events') {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      }
    }

    return lambdaFn(event, context)
  }
}
