import React, { Component } from 'react';
import { TweenMax } from 'gsap';

class Carrot extends Component {
  
  componentDidMount() {
    // TODO HERE ANIM TO ROTATE ASSET 3D
    // const anim = TweenMax.to(this.el, 1,{
    //   rotation:360,
    //   transformOrigin:"50% 50%",
    //   repeat:-1
    // });
    // anim.play();
  }

  shouldComponentUpdate() {
    return false;
  }

  collectCarrot() {
    const anim = TweenMax.to(this.el, 1,{
      attr: {
        x: 0,
        y: 0
      },
      opacity: 0.1,
      onComplete: () => this.props.removeCarrot(this.props.id)
    });
    anim.play();
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
