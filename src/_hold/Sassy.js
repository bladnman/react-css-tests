import React from "react";

import "./Sassy.scss";

class Sassy extends React.Component {
  render() {
    return (
      <>
        <div className="blueText">
          Call me <span className="fancy">Sassy</span>
        </div>
      </>
    );
  }
}
export default Sassy;
