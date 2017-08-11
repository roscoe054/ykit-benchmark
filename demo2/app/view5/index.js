import React from 'react';
import ReactDOM from 'react-dom';

for(let i = 0; i < 50; i++) {
    let m = require('./modules/module' + i);
    console.log('Loaded module ' + i);
}

export default class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="wrapper">
                <h1>page {this.props.name}</h1>
            </div>
        )
    }
}

const render = () => ReactDOM.render(
    <HelloMessage name="view5"/>, document.getElementById('app')
);

render();
