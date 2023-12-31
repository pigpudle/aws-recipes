const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
  PolicyArn: 'arn:aws:iam::374522701931:policy/adminpolicy',
  UserName: 'NeliHarbuzava'
}

iam.detachUserPolicy(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})