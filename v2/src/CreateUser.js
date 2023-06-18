const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
  UserName: 'NeliHarbuzava'
}

iam.createUser(params, function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})