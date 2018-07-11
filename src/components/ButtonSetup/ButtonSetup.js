import React, { Component } from 'react';
import Toggle from 'react-toggle';
import './ButtonSetup.css';

const ANIMATION_LIST = [
  {
    id: '',
    label: 'No animation',
  },
  {
    id: 'pulse',
    label: 'Pulse',
  },
  {
    id: 'pulse-grow',
    label: 'Pulse Grow',
  },
  {
    id: 'pulse-shrink',
    label: 'Pulse Shrink',
  },
  {
    id: 'rotate',
    label: 'Rotate',
  },
  {
    id: 'rotate-right',
    label: 'Rotate Right',
  },
  {
    id: 'rotate-left',
    label: 'Rotate Left',
  },
  {
    id: 'bounce',
    label: 'Bounce',
  },
  {
    id: 'bounce-top',
    label: 'Bounce Top',
  },
  {
    id: 'bounce-bottom',
    label: 'Bounce Bottom',
  },
  {
    id: 'buzz',
    label: 'Buzz',
  },
  {
    id: 'skew',
    label: 'Skew',
  },
  {
    id: 'skew-right',
    label: 'Skew right',
  },
  {
    id: 'skew-left',
    label: 'Skew left',
  },
];

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

  handleOptionChange(event) {
    this.setState({
      selectedAnimation: event.target.id,
    });
  }

  render() {
    return (
      <div className="button-setup-container">
        <h1>
          <span role="img" aria-label="">🦄</span> Button-shaker
          <Toggle
            defaultChecked={this.state.pluginTurnedOn}
            onChange={this.pluginOnChange} />
        </h1>
        
        <div className="button-settings-block">
          <h2>Settings</h2>

          <h3>Animation</h3>
          {
            ANIMATION_LIST.map((animation, idx) =>
              <div key={idx}>
                <input
                  type='radio'
                  name='animation-type'
                  id={animation.id}
                  onChange={this.handleOptionChange}
                />
                <label>{animation.label}</label>
              </div>
            )
          }

          <h3>Animate</h3>
            <input type='radio' name='animation-frequency'/> On hover
            <input type='radio' name='animation-frequency'/> Every X seconds
            <input type='radio' name='animation-frequency'/> Once on load
        </div>
        
        <div className="button-preview-block">
          <h2>Preview</h2>
          <button className={this.state.selectedAnimation}>ADD TO CART</button>
        </div>
      </div>
    );
  }
}

export default ButtonSetup;
