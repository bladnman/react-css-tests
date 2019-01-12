import React from 'react'
import Button from './Button'
import styles from './Modal.module.css'
export default function Modal(props) {
    const { children, 
            className, 
            
            image, 
            title, 
            message, 
            buttonTitle, 

            buttonClassName, 
            titleClassName,
            messageClassName,
            imageClassName,

            ...remainingProps } = props;
    return (
      <div {...remainingProps} className={[className, styles.base, styles.xtra].join(' ')}>
        
        <div className={styles.metaArea}>

          {image && <img alt="" className={[imageClassName, styles.image].join(' ')} src={image} />}
          
          <div className={styles.textArea}>

            {title && <div className={[titleClassName, styles.title].join(' ')}>{title}</div>}
            {message && <div className={[messageClassName, styles.message].join(' ')}>{message}</div>}
          
            {children}
          </div>
        </div>
        
        <Button className={[buttonClassName, styles.button].join(' ')}>{buttonTitle ? buttonTitle : 'OK'}</Button>        
        
      </div>
    );
}