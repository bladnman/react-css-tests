import React from "react";
import ReactDOM from "react-dom";
import ModalcssModule from './cssmod/Modal'
import styles from './index.module.css'
import dog from './icons/dog.svg'
import chipmunk from './icons/chipmunk.svg'
import './variables.css'

function App() {

  const modals = [
    {
        image:dog,
        title:"Good Boy",
        message:"Thanks for always being there and excited to see me!" ,
        buttonTitle:"Pat",
        imageClassName:[styles.modalImage].join(' '),
    },
     {
        image:chipmunk,
        title:"Welcome",
        message:"Nice to see you are hungry again." ,
        buttonTitle:"Feed",
        imageClassName:[styles.modalImage].join(' '),
    },   
     {
        title:"Party Time",
        message:"Let us get our jam on and get out there on that there dancing floor." ,
        buttonTitle:"Dance Dance",
        buttonClassName:[styles.smallButton, styles.orangeButton].join(' '),
    },   
  ];

  return (
    <div className={styles.modalGrid} >

      {modals.map(modal =>
        <ModalcssModule className={styles.modalItem} {...modal} />
      )}

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
