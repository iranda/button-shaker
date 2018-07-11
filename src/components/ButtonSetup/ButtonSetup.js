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
      changesSaved: false,
      selectedAnimation: ANIMATION_LIST[0].id,
      selectedAnimationFrequency: ANIMATION_FREQUENCY[0].id,
    };

    this.pluginOnChange = this.pluginOnChange.bind(this);
    this.handleAnimationChange = this.handleAnimationChange.bind(this);
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
  }

  pluginOnChange() {
    this.setState({
      pluginTurnedOn: !this.state.pluginTurnedOn,
    });
  }

  handleAnimationChange(animationId) {
    this.setState({
      selectedAnimation: animationId,
    });
  }

  handleFrequencyChange(frequecyId) {
    this.setState({
      selectedAnimationFrequency: frequecyId,
    });
  }

  handleSaveChanges() {
    this.setState({
      changesSaved: true,
    });
  }

  render() {
    return (
      <div className='button-setup-container'>
        <h1>
          <Toggle
            defaultChecked={this.state.pluginTurnedOn}
            onChange={this.pluginOnChange} />
        </h1>
        
        <div className='button-settings-block'>
          <h2>
            Settings 
            {this.state.changesSaved && <span role='img' aria-label=''>💾</span>}
          </h2>

          <h3>Animation</h3>
          <div className='settings-items-container'>
            {
              ANIMATION_LIST.map((animation, idx) =>
                <div
                  key={idx}
                  className={`settings-item${this.state.selectedAnimation === animation.id ? ' selected' : ''}`}
                  onClick={() => {this.handleAnimationChange(animation.id)}}
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
                  className={`settings-item${this.state.selectedAnimationFrequency === animation.id ? ' selected' : ''}`}
                  onClick={() => {this.handleFrequencyChange(animation.id)}}
                >
                  {animation.label}
                </div>
              )
            }
          </div>

          <button onClick={this.handleSaveChanges}>Save changes</button>
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
