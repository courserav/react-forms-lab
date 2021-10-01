import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {input: ""};
  }
  saveInput = (event) => {
    this.setState({input: event.target.value})
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.input} onChange={(event) => this.saveInput(event)}/>
        <p>You have {this.props.maxChars - this.state.input.length} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
