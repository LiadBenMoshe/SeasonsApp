import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import Spiner from "./Spiner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Hi there!</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, ErrorMassage: null };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ ErrorMassage: err.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.ErrorMassage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (this.state.ErrorMassage && !this.state.lat) {
      return (
        <div style={{ backgroundColor: "green" }}>
          Error: {this.state.ErrorMassage}
        </div>
      );
    }
    return <Loader />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
