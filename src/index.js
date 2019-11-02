import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";

// const App = () => {
//     // get current location
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );

//     return <div>Hello World!</div>;
// };

class App extends React.Component {
    // THIS IS THE ONLY TIME we do direct assignment
    state = { lat: null, long: null, errorMessage: "" };

    componentDidMount() {
        // get current location
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // WE CALLED setState to assign the value !!!
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });

                // WE DID NOT assign the value like this !!!
                // this.state.lat = position.coords.latitude
                // this.state.long = position.coords.longitude;
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // it is a must for you to define render method
    render() {
        if (this.state.lat && this.state.long && !this.state.errorMessage) {
            return (
                <DisplaySeason lat={this.state.lat} long={this.state.long} />
            );
        }
        if (!this.state.lat && !this.state.long && this.state.errorMessage) {
            return <div>error: {this.state.errorMessage}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
