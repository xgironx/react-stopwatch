import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  render() {
    return (
      <div className="stopwatch">
          <h1>0</h1>
              <div className="controls">
                  <h3>  {this.props.pStatus} </h3>
                  <h3>  {this.props.pNeedReset} </h3>
                  <h3>  {this.props.pPeanutGallery[0]} </h3>
              </div>
      </div>
      );
    }
  }
export default Stopwatch;
// class Stopwatch extends Component {
//   render() {
//     return (
//       <div className="stopwatch">
//         <h1>0</h1>
//         <div className="controls">
//           <button>Reset</button>
//           <button>Start</button>
//           <button>Pause</button>
//         </div>
//       </div>
//     );
//   }
// }
