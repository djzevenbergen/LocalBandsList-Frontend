import React from 'react';

class Bands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      bands: []
    };
  }


  makeApiCall = () => {
    var client = new RestClient("localhost:5000/api/bands");
    client.Timeout = -1;
    var request = new RestRequest(Method.GET);
    request.AddHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJuYmYiOjE1OTUwMDc0ODMsImV4cCI6MTU5NTYxMjI4MywiaWF0IjoxNTk1MDA3NDgzfQ.LU0QT3NP4yg8unNffNOEJX0KAsITjMRi9OGPCM02dac");
    request.AddHeader("Content-Type", "application/json");
    request.AddParameter("application/json", "{\r\n\r\n\"name\": \"Rickety Sherpa\",\r\n \"genre\": \"indie\",\r\n  \"bio\": \"Two boozers screechin\",\r\n   \"yearFormed\": \"2016\",\r\n    \"videoLink\": \"https://www.youtube.com/watch?v=QwyGwSEcMro\",\r\n    \"musicLink\": \"https://soundcloud.com/ricketysherpa/i-could-be-your-best-friend\",\r\n     \"zipCode\": \"98020\",\r\n      \"gigging\": false,\r\n       \"together\": false,\r\n        \"userId\": 1\r\n}", ParameterType.RequestBody);
    let response = client.Execute(request);
    console.log(response.Content);
  }






  render() {
    this.makeApiCall();
  }
}

export default Bands;