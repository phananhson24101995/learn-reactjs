import React from "react";


function LearnJSX () {
    const course = 'ReactJS';
    const element = <div>
        <p title="Xin chào" style={{ color: 'yellow' }}>Hello, {course}!</p>
    </div>


    const element2 = React.createElement('div', {}, 
    React.createElement('p', {
        title: 'Hello',
        className: 'course',
        style: { color: 'red' }
    }, `Xin chào, ${course}`))


    return element
}

export default LearnJSX