import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
import Spinner from "./Spinner";

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
    state = {
        lat: null,
        long: null,
        errorMessage: "",
        time: new Date().toLocaleTimeString()
    };

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

        // get current time and will be update every second
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    getDisplay() {
        if (this.state.lat && this.state.long && !this.state.errorMessage) {
            return (
                <DisplaySeason
                    lat={this.state.lat}
                    long={this.state.long}
                    time={this.state.time}
                />
            );
        }

        if (!this.state.lat && !this.state.long && this.state.errorMessage) {
            return <div>error: {this.state.errorMessage}</div>;
        }

        return <Spinner message="Please accept location request!" />;
    }

    // it is a must for you to define render method
    render() {
        return this.getDisplay();
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
