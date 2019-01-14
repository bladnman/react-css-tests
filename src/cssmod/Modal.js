import React from 'react'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Image from 'react-bootstrap/lib/Image';
import Popover from 'react-bootstrap/lib/Popover';
import Button from './Button'
import styles from './Modal.module.css'
export default function Modal(props) {
    const { children, 
            className, 
            
            image, 
            title, 
            message, 
            buttonTitle, 
            imageTooltipText,
            imageTooltipChild,

            buttonClassName, 
            titleClassName,
            messageClassName,
            imageClassName,
            tooltipClassName,

            onClick,

            ...remainingProps } = props;

    const ImgElem = image && <Image className={[imageClassName, styles.image].join(' ')} src={image} />
    let ImgComp;
    if (image) {
      if (imageTooltipChild) {
        ImgComp = (
          <OverlayTrigger overlay={<Popover>{imageTooltipChild}</Popover>} placement='bottom'>
            {ImgElem}
          </OverlayTrigger>
        );
      }
      else if (imageTooltipText) {
        ImgComp = (
          <OverlayTrigger overlay={<Tooltip className={[tooltipClassName].join(' ')}>{imageTooltipText}</Tooltip>} placement='bottom'>
            {ImgElem}
          </OverlayTrigger>
        );
      }

      else {
        ImgComp = ImgElem
      }

    }
    return (
      <div {...remainingProps} className={[className, styles.base, styles.xtra].join(' ')}>
        
        <div className={styles.metaArea}>

          {ImgComp}

          <div className={styles.textArea}>

            {title && <div className={[titleClassName, styles.title].join(' ')}>{title}</div>}
            {message && <div className={[messageClassName, styles.message].join(' ')}>{message}</div>}
          
            {children}
          </div>
        </div>
        
        <Button className={[buttonClassName, styles.button].join(' ')}
          onClick={onClick}>{buttonTitle ? buttonTitle : 'OK'}</Button>        
        
      </div>
    );
}