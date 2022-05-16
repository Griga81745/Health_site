const measurement_id = `G-DSQP2F3R6V`;
const api_secret = `<secret_value>`;

POST /mp/collect HTTP/1.1
HOST: www.google-analytics.com
Content-Type: application/json
<payload_data>


fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
  method: "POST",
  body: JSON.stringify({
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    events: [{
      name: 'tutorial_begin',
      params: {},
    }]
  })
});
