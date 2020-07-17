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


  // makeApiCall = () => {
  //   var client = new RestClient("localhost:5000/api/bands");
  //   client.Timeout = -1;
  //   var request = new RestRequest(Method.GET);
  //   request.AddHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJuYmYiOjE1OTUwMDc0ODMsImV4cCI6MTU5NTYxMjI4MywiaWF0IjoxNTk1MDA3NDgzfQ.LU0QT3NP4yg8unNffNOEJX0KAsITjMRi9OGPCM02dac");
  //   request.AddHeader("Content-Type", "application/json");
  //   request.AddParameter("application/json", "{\r\n\r\n\"name\": \"Rickety Sherpa\",\r\n \"genre\": \"indie\",\r\n  \"bio\": \"Two boozers screechin\",\r\n   \"yearFormed\": \"2016\",\r\n    \"videoLink\": \"https://www.youtube.com/watch?v=QwyGwSEcMro\",\r\n    \"musicLink\": \"https://soundcloud.com/ricketysherpa/i-could-be-your-best-friend\",\r\n     \"zipCode\": \"98020\",\r\n      \"gigging\": false,\r\n       \"together\": false,\r\n        \"userId\": 1\r\n}", ParameterType.RequestBody);
  //   let response = client.Execute(request);
  //   console.log(response.Content);
  // }

  makeApiCall = () => {
    fetch(`http://localhost:5000/api/bands`, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer' + process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      })
    })//${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          this.setState({
            isLoaded: true,
            bands: jsonifiedResponse
          });
          console.log("current state: " + this.state.bands);
          console.log(typeof (this.state.bands));
        }

      )
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });

  }


  componentDidMount() {
    this.makeApiCall()

  }



  render() {
    const { error, isLoaded, bands } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>bands</h1>
          <ul>
            {Object.values(bands).map((band, index) =>
              <li key={index}>
                <h3>{bands[index].Name}</h3>
                {/* <p>{band.musicLink}</p> */}
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}
export default Bands;