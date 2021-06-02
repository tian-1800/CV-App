import React, {Component} from "react";

class Label extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <label>{this.props.label}</label>
        )
    }
}
export default Label;