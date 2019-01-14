import React from "react";
import ReactDOM from "react-dom";
import ModalcssModule from './cssmod/Modal'
// import TTTests from './TTTests'

import dog from './icons/dog.svg'
import chipmunk from './icons/chipmunk.svg'

import styles from './index.module.css'
import './variables.css'

function App() {

  const modals = [
    {
        image                 : dog,
        title                 : "Good Boy",
        message               : "Thanks for always being there and excited to see me!" ,
        buttonTitle           : "Pat",
        imageClassName        : [styles.modalImage].join(' '),
        onClick               : evt => console.log('thank you master'),
        imageTooltipText      : 'I like bacon',
    },
     {
        image                 : chipmunk,
        title                 : "Hey Dude!",
        message               : "I could really go for a hamburger right about now..." ,
        buttonTitle           : "Feed",
        titleClassName        : [styles.fantasyFont].join(' '),
        messageClassName      : [styles.fantasyFont].join(' '),
        imageClassName        : [styles.modalImage].join(' '),
        onClick               : evt => console.log('num num'),
        imageTooltipText      : 'friends?',
        imageTooltipChild     : <img src='http://clipart-library.com/images/8ixKaobip.gif' className={[styles.imgPopover].join(' ')}/>,
        tooltipClassName      : [styles.fantasyFont].join(' '),
    },   
     {
        title                 : "Party Time",
        message               : "Let us get our jam on and get out there on that there dancing floor." ,
        buttonTitle           : "Dance Dance",
        buttonClassName       : [styles.smallButton, styles.orangeButton].join(' '),
        onClick               : evt => console.log('dab'),
    },   
  ];

  return (
    <div className={styles.modalGrid} >
      
      {/* <TTTests /> */}

      {modals.map((modal, idx) =>
        <ModalcssModule key={idx} className={styles.modalItem} {...modal} />
      )}

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
