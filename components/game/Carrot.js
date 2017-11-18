import React, { PureComponent } from 'react';
import { TweenMax } from 'gsap';

class Carrot extends PureComponent {
  
  componentDidMount() {
    // TODO anim 3d
  }

  // shouldComponentUpdate() {
  //   return true;
  // }

  collectCarrot() {
    this.anim = TweenMax.to(this.el, 1,{
      attr: {
        x: 0,
        y: 0
      },
      opacity: 0.1,
      onComplete: () => this.props.removeCarrot(this.props.id)
    });
    this.anim.play();
  }

  render() {
    return (
      <image
        ref={(el) => this.el = el}
        key={`carrot-${this.props.id}`} 
        x={this.props.x}
        y={this.props.y}
        width={this.props.w}
        height={this.props.h}
        xlinkHref="/static/assets/icons/icon-carrot.svg"
        mask="url(#myMask)"
        onClick={() => this.collectCarrot()}
      />
    );
  }
}

export default Carrot;
