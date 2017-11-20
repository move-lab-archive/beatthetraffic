import React, { Component } from 'react';
import { TweenMax, TimelineMax } from 'gsap';

class Carrot extends Component {
  
  componentDidMount() {
    // TODO HERE ANIM TO ROTATE ASSET 3D
    var tl = new TimelineMax({repeat: -1});
    tl.set(this.el,{ className:"-=active-sprite7"});
    tl.set(this.el,{ className:"+=active-sprite1"});
    tl.set(this.el,{ className:"-=active-sprite1"},'+=0.1');
    tl.set(this.el,{ className:"+=active-sprite2"});
    tl.set(this.el,{ className:"-=active-sprite2"},'+=0.1');
    tl.set(this.el,{ className:"+=active-sprite3"});
    tl.set(this.el,{ className:"-=active-sprite3"},'+=0.1');
    tl.set(this.el,{ className:"+=active-sprite4"});
    tl.set(this.el,{ className:"-=active-sprite4"},'+=0.1');
    tl.set(this.el,{ className:"+=active-sprite5"});
    tl.set(this.el,{ className:"-=active-sprite5"},'+=0.1');
    tl.set(this.el,{ className:"+=active-sprite6"});
    tl.set(this.el,{ className:"-=active-sprite6"},'+=0.1');
    tl.set(this.el,{ className:"+=active-sprite7"});
    tl.play();
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
      <svg
        ref={(el) => this.el = el}
        x={this.props.x}
        y={this.props.y}
        width={this.props.w}
        height={this.props.h}
        className="carrot active-sprite1"
        viewBox="0 0 54 52"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => this.collectCarrot()}
      >
        <g fill="none" fillRule="evenodd">
            <g>
              <g>
                  <g className="sprite sprite1">
                    <path d="M39 20.663L47.05 12M39 8v11.71h11.088" stroke="#2EFF65" strokeWidth="3" />
                    <path fill="#EE8700" d="M9 48.95L27.144 17h8.682l6.378 5.256v9.07" />
                    <path fill="#FF9E00" d="M9.044 48.946l30.33-29.05 2.83 2.396v9.276" />
                  </g>
                  <g className="sprite sprite2">
                    <path d="M41.138 24.214l10.526-5.388M45.47 12.314l-4.006 11.004 10.42 3.793" stroke="#2EFF65" strokeWidth="3" />
                    <path fill="#EE8700" d="M3.272 40.535L31.25 16.717l8.158 2.97 4.196 7.12-3.102 8.52" />
                    <path fill="#FF9E00" d="M3.315 40.546l38.437-16.924 1.84 3.218-3.173 8.717" />
                  </g>
                  <g className="sprite sprite3">
                    <path d="M41.932 28.282l11.734-1.463M50.072 18.58l-7.528 8.972 8.495 7.127" stroke="#2EFF65" strokeWidth="3" />
                    <path fill="#EE8700" d="M.768 30.668l34.436-12.813 6.65 5.58 1.51 8.126-5.83 6.95" />
                    <path fill="#FF9E00" d="M.804 30.692l41.908-2.757.627 3.654-5.963 7.105" />
                  </g>
                  <g className="sprite sprite4">
                    <path d="M41.287 32.376l11.527 2.64M52.254 26.044L42.112 31.9l5.544 9.602" stroke="#2EFF65" strokeWidth="3" />
                    <path fill="#EE8700" d="M1.79 20.54l36.74-.263 4.342 7.52-1.362 8.15-7.854 4.534" />
                    <path fill="#FF9E00" d="M1.815 20.575l40.323 11.742-.66 3.648-8.033 4.638" />
                  </g>
                  <g className="sprite sprite5">
                    <path d="M39.28 36.002l9.93 6.423M51.75 33.803l-11.53 2.034 1.925 10.92" stroke="#2EFF65" strokeWidth="3" />
                    <path fill="#EE8700" d="M6.213 11.37L40.83 23.69l1.507 8.55-4.068 7.194-8.933 1.575" />
                    <path fill="#FF9E00" d="M6.225 11.413L40.1 36.238l-1.867 3.203-9.135 1.612" />
                  </g>
                  <g className="sprite sprite6">
                    <path d="M36.155 38.724l7.134 9.43M48.626 40.923L37.093 38.89l-1.925 10.92" stroke="#2EFF65" strokeWidth="3" />
                    <path fill="#EE8700" d="M13.507 4.268L41.82 27.685l-1.506 8.55-6.284 5.368-8.93-1.575" />
                    <path fill="#FF9E00" d="M13.503 4.312l23.342 34.914-2.85 2.37-9.136-1.61" />
                  </g>
                  <g className="sprite sprite7">
                    <path d="M32.287 40.213l3.478 11.302M43.254 46.544L33.112 40.69l-5.544 9.602" stroke="#2EFF65" strokeWidth="3" />
                    <path fill="#EE8700" d="M22.79.088l18.597 31.69-4.34 7.518-7.74 2.895-7.855-4.533" />
                    <path fill="#FF9E00" d="M22.77.128l9.993 40.793-3.49 1.253-8.032-4.638" />
                  </g>
              </g>
            </g>
        </g>
        <style jsx>{`
          .sprite {
            opacity: 0;
          }

          .active-sprite1 .sprite1 {
            opacity: 1;
          }

          .active-sprite2 .sprite2 {
            opacity: 1;
          }

          .active-sprite3 .sprite3 {
            opacity: 1;
          }

          .active-sprite4 .sprite4 {
            opacity: 1;
          }

          .active-sprite5 .sprite5 {
            opacity: 1;
          }

          .active-sprite6 .sprite6 {
            opacity: 1;
          }

          .active-sprite7 .sprite7 {
            opacity: 1;
          }
        `}</style>
      </svg>      
    );
  }
}

export default Carrot;
