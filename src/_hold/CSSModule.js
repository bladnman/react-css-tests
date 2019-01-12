import React from "react";

import styles from "./CSSModule.module.css";

class CSSModule extends React.Component {
  render() {
    return (
      <div className={styles.blueText}>I am a CSSModule component. thanks</div>
    );
  }
}
export default CSSModule;
