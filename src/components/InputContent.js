import React, {Component} from "react";

class InputContent extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    }
    render() {
        let {value, type, display} = this.props;
        return (
            <div>
                <input type={type} value={value} display={display}></input>
            </div>
        )
    }
}