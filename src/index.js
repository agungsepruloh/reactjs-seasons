import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//     // get current location
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );

//     return <div>Hello World!</div>;
// };

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment
        this.state = { lat: null, long: null };

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
            err => console.log(err)
        );
    }

    // it is a must for you to define render method
    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Longitude: {this.state.long}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
