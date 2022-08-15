const AWS = require('aws-sdk')

AWS.config.update({
   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
   secresAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
   region: process.env.AWS_REGION
})

const ses = new AWS.SES({
   apiVersion: '2010-12-01'
})

exports.register = (req, res)=> {
   //console.log('REGISTER CONTROLLER', req.body)
   
}