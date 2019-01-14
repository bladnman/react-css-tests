import React, { Component } from 'react'
// import { Overlay, Button } from 'react-bootstrap'
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';


const popover = (
  <Popover id="popover-basic" title="Popover right">
    And here's some <strong>amazing</strong> content. It's very engaging. right?
  </Popover>
);

export default class TTTests extends Component {
  constructor(...args) {
    super(...args);

    this.attachRef = target => this.setState({ target });
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div>
          
          <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
            <Button variant="success">Overlay</Button>
          </OverlayTrigger>

          <OverlayTrigger 
            overlay={<Tooltip id="tooltip-disabled">now you got it</Tooltip>}
            placement='bottom'>
            <span className="d-inline-block">
              <Button style={{ pointerEvents: 'none' }}>
                Tooltip
              </Button>
            </span>
          </OverlayTrigger>


      </div>
    )
  }
}
