var axios = require('axios');
var data = JSON.stringify({
    "collection": "votes",
    "database": "online_voting",
    "dataSource": "Vote",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-qrveo/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': '6WtkM8cPBtlWEyYAXW7zpR3utjoyvqRKrDFiT9ydCz6prrxCWY2RpZS1OTD00gw9'
    },
    data : data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });