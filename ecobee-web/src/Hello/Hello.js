import React, {Component, useEffect, useState} from 'react';
import {useAuth0, withAuth0} from "@auth0/auth0-react";

class Hello extends Component {
  //const { error, loading, data, refresh } = useApi("http://localhost:8080/api/private",
  //  {
  //
  //  });
  //const {hello, setHello} = useState(null);
  //
  //useEffect(() => {
  //  const callSecureApi = async () => {
  //    console.log("CALLING API");
  //    try {
  //      const token = await getAccessTokenSilently( {
  //        audience: "https://ecobee-api.weizilla.com",
  //        scope: "write:ecobee",
  //      });
  //      const response = await fetch("http://localhost:8080/api/private", {
  //        headers: {
  //          Authorization: `Bearer ${token}`
  //        },
  //      });
  //
  //      const { hello } = await response.json();
  //
  //      setHello(hello);
  //      console.log("HELLO ", hello);
  //    } catch (error) {
  //      if (error.error !== "login_required") {
  //        console.log(error);
  //      }
  //    }
  //  };
  //
  //  callSecureApi();
  //
  //}, [getAccessTokenSilently]);

  constructor(props) {
    super(props);
    this.state = {
      hello: "not loaded",
    }
  }

  //TODO right one?
  async componentDidMount() {
    console.log("component did mount");
    await this.callSecureApi();
  }

  async callSecureApi() {
    console.log("CALLING API");
    try {
      console.log("getting token");
      const { getAccessTokenSilently } = this.props.auth0;
      const token = await getAccessTokenSilently( {
        audience: "https://ecobee-api.weizilla.com",
        scope: "write:ecobee",
      });
      console.log("got token");
      const response = await fetch("http://localhost:8080/api/private", {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      const { hello } = await response.json();

      this.setState({hello: hello});
      console.log("HELLO ", hello);
    } catch (error) {
      if (error.error !== "login_required") {
        console.log(error);
      }
    }

  }

  render() {
    const { isAuthenticated } = this.props.auth0;

    return isAuthenticated ? (
      <div>
        hello: {this.state.hello}
        <button onClick={() => this.callSecureApi()}>Call API</button>
      </div>
    ) : "not logged innnn"
  }
}

export default withAuth0(Hello);
