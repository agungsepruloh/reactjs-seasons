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
    // it is a must for you to define render method
    render() {
        // get current location
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );

        return <div>Hello World!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
