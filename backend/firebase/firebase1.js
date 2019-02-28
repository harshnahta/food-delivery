var food = require('firebase-admin');

food.initializeApp({
    credential: food.credential.cert({
      projectId: 'foodd-4fcc6',
      clientEmail: 'firebase-adminsdk-43pmn@foodd-4fcc6.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDriCg3KQ7OOD+H\nxS5C/nrGkd897JdSQWInV1G/FmxR7t7Mu5UesRQ/C2Y708NGMnRmQuA0/MHBNAPA\nBIVIBkPsc6ordfMLLupv89Wwu8WVLaLgUUjm82xqGcHbxboTZZocqEsOTJT2TAHA\n5CWUY//eyOf6Eq23bwYBBeq3143udQhZL1HYdVQUxO8+BVEgVb6rOXn+co/FvtFF\nSqCLeCsbXgoYJpDdIu4gw/U0dkf3kj0SuIojepp31AUQXIchbZfWSIeY5bRNY+oT\nPwr92gAIjmhN06/w2N3oU6FuOuBJBWHMqLtzbJ0WBXucqJC4AbCnbg3Q8ockOxP3\nVjCsPFDbAgMBAAECggEAL8v4OUVsOz4f6loB6teAq9ZDYuolxSv+krQ+IxSWU8Qx\nU4PHnaxayvZxvzdYm+C2TWBJ5obafO4kyq1ALN8UnqHUSTCM61qQebqWRWC9lmnl\n8TadoDyK5jcm54YHHlOShDlEzfiNjDPdcTr7Q1NNw/SqWs26kgyGP+Pm/3rPUzHq\nDVhLwOnbT84yul3IvV8qThy/dzOdoI9DWSSki9ovPpEpNSxPlfa2BRrdhZVj5sPL\nT7nLcBM4f4pOIv+du06/8fVr+9IOEO8Kkk9C9odS5p+ZXcVZ64kCO7FVFjE3Jhsa\nZyAlczUohsn7WaclqIfAA2RRnx7ZOH0GyW2LBayLXQKBgQD/EXmeTo02xPREm2wC\n7pEVMaKXgvb0JQ1gqSsviFkulw/dQtz2G8iRkmPBpk0+8EDiL8kzlKXcavfyuZDp\nb1eiycO+gW7dRc9vZdbDA0+ITSVbTwWukBTWHyUs/BQzwBDjWRge6I96Sh41q84i\n6ZiaraXzyLQKhBNyyu/n0j9VJwKBgQDsZGmoKJoG+GpgpqaHAR5btEwe5VSmzFx6\nLadkc9GOWdC8GIrpLe4T1mqy/kbhgfovZyc24HjRcDxP/LwbS7r7eVg3RulwrJHD\n2FhY9c9NjJtWrDuMAC+gVD5UbMtIlES+Abd2vZKjbYugdLetxEwHZFiy4PoeNBs1\ncrp9VsR/LQKBgDVb5INXj3cbsLYBhZD/c15pqcfkX+EnNys3eI9TCMUUWP9Ck5Lw\nsP6zDyddsN8vx4MJ2B9wQ1pfDku6wjPzVPP7HXXnAdhMWF7HgSv+r06mROBbIacp\nARLiJRbKDTfeQCovYzpkEE/W3YcAz/jBwWjqVsMvA2sHwkHLbnCirRkVAoGBAIft\nJSPgVND1PpXcvZybdA1fGvYZABf5IqPOZJZKUpD77B58LkPueRtHC4to0vEQf/+J\n3O6dHFuxobyMos0/OoEnQSZnzAtR728hk4tzrIP2+ctYtdTGtpwGVODOvgU53F01\nN307fHokn0jgVE3CtcT6WlZhLvD3HT4afklb/xjxAoGBAMN935iSbY1NkYedfFVO\nVLV7t5L3PL/ixRXS9Ky19S9at0oLRQFlkZ+1SZOebklt09hRNhuDYoDyzCf9mCnE\nbOcWEYYj2F7603BX0dsVBxgeRfiRPb4IMr9ijvGI5q4Oy0qadRhuPYM2rb1bcM8N\nqpJYd2d/b/POXEsMA2qOKQ7q\n-----END PRIVATE KEY-----\n'
    }),
    databaseURL: 'https://foodd.firebaseio.com'
  });
  

module.exports={food};