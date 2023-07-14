import React from "react";

// Class component
class LearnComponent extends React.Component {
    render () {
        return <p>Hello, Class Component</p>
    }
}

export default LearnComponent

function Welcome () {
    return <p>Hello, Function Component</p>
}

export  {Welcome}