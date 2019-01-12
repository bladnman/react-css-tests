import React, { Component } from 'react'
import styles from './Button.module.css'
class Button extends Component {
  render() {
    const {className, ...props} = this.props;
    return (
      <button {...props} className={[className, styles.base].join(' ')}></button>
    );
  }
}
export default Button;