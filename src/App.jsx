import React from "react";
// import Demo from './01/Demo.jsx'
// import Clock from './02/Clock.jsx'
// import Dimensions from './03/Dimensions.jsx'
import User from './04/User.jsx'

const App = () => {
    return (
        <>
            <User userId="facebook" />
        </>
    )
}


// class App extends React.Component {
//     state = {
//         visible: true
//     }
//     toggle = () => {
//         this.setState({
//             visible: !this.state.visible
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.toggle}>Toggle</button>
//                 <div>{this.state.visible && <Clock/>}</div>
//             </div>
//         )
//     }
//
// }



export default App