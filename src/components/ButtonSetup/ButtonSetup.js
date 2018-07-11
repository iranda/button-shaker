import React, { Component } from 'react';
import Toggle from 'react-toggle';
import {
  ANIMATION_LIST,
  ANIMATION_FREQUENCY,
} from '../../constants';
import './ButtonSetup.css';

class ButtonSetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pluginTurnedOn: true,
      selectedAnimation: '',
    };

    this.pluginOnChange = this.pluginOnChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  pluginOnChange() {
    this.setState({
      pluginTurnedOn: !this.state.pluginTurnedOn,
    });
  }

  handleOptionChange(itemId) {
    this.setState({
      selectedAnimation: itemId,
    });
  }

  render() {
    return (
      <div className='button-setup-container'>
        <h1>
          Button-shaker
          <Toggle
            defaultChecked={this.state.pluginTurnedOn}
            onChange={this.pluginOnChange} />
        </h1>
        
        <div className='button-settings-block'>
          <h2>Settings</h2>

          <h3>Animation</h3>
          <div className='settings-items-container'>
            {
              ANIMATION_LIST.map((animation, idx) =>
                <div
                  key={idx}
                  className={`settings-item${this.state.selectedAnimation === animation.id ? ' selected' : ''}`}
                  onClick={() => {this.handleOptionChange(animation.id)}}
                >
                  {animation.label}
                </div>
              )
            }
          </div>

          <h3>Animate</h3>
          <div className='settings-items-container'>
            {
              ANIMATION_FREQUENCY.map((animation, idx) =>
                <div
                  key={idx}
                  className={`settings-item`}
                >
                  {animation.label}
                </div>
              )
            }
          </div>
        </div>
        
        <div className="button-preview-block">
          <h2>Preview</h2>
          <button className={`preview-button ${this.state.selectedAnimation}`}>ADD TO CART</button>
        </div>
      </div>
    );
  }
}

export default ButtonSetup;
