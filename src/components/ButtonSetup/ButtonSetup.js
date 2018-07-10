import React, { Component } from 'react';
import Toggle from 'react-toggle';
import './ButtonSetup.css';

class ButtonSetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pluginTurnedOn: true,
    };

    this.pluginOnChange = this.pluginOnChange.bind(this);
  }

  pluginOnChange() {
    this.setState({
      pluginTurnedOn: !this.state.pluginTurnedOn,
    });
  }

  render() {
    return (
      <div className="button-setup-container">
        <h2><span role="img" aria-label="">🦄</span> Button-shaker</h2>
        <span>
          {this.state.pluginTurnedOn ? 'On' : 'Off'}
          <Toggle
            defaultChecked={this.state.pluginTurnedOn}
            onChange={this.pluginOnChange} />
        </span>
        
        <div className="button-settings-block">
          <h3>Settings</h3>
        </div>
        
        <div className="button-preview-block">
          <h3>That is what you get</h3>
        </div>
      </div>
    );
  }
}

export default ButtonSetup;
