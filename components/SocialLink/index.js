import { Col, Image } from 'react-bootstrap'
import { Component } from 'preact'
import { physics } from 'popmotion';
import { MotionValue } from 'popmotion-react';

const SocialLink = class SocialLink extends Component {
  stateChangeHandlers = {
    notHoveredOver: ({ value }) => {
      const springProps = {
        to: 0,
        spring: 500,
        friction: .9
      };

      physics({
        ...springProps,
        acceleration: 500,
        from: value.get(),
        velocity: 1000,
        onUpdate: value
      }).start()
    },
    hoveredOver: ({ value }) => {
      const springProps = {
        to: value.current + 5,
        spring: 500,
        friction: .9
      };

      physics({
        ...springProps,
        acceleration: 500,
        from: value.get(),
        velocity: 1000,
        onUpdate: value
      }).start()
    }
  };

  render() {
    return (
      <MotionValue initialState="notHoveredOver" onStateChange={this.stateChangeHandlers}>
        {({v, setStateTo}) => {
          return (
            <a {...this.props} onMouseEnter={setStateTo.hoveredOver} onMouseLeave={setStateTo.notHoveredOver} style={{transform: `translateY(-${v}px)`}}>
              <i class={this.props.iconClass} />
            </a>
          )
        }}
      </MotionValue>
    )
  }
}

export default SocialLink;
