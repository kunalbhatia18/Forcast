import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (error)=>console.log(error)
//     );
//     return <div> Hi there! </div>;
// };

class App extends React.Component {
    state = { lat:null, errorMessage:'' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error=>this.setState({errorMessage: error.message})
            );
    }
    // render(){
    // return (
    //    <div>
    //        Latitude: {this.state.lat}<br/>
    //        Error: {this.state.errorMessage}
    //     </div>
    // );
    // }

    render(){
        if(this.state.errorMessage && !this.state.lat){
            return<div> Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return < Spinner message="Please accept the location request"/>; 
    }
}
ReactDOM.render(
    <App/>,document.querySelector('#root')
);