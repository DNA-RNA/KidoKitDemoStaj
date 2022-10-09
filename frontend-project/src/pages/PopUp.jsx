import React from 'react'

function PopUp(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className="popup-inner">
        <button className='close-btn' onClick={()=> props.setTrigger(false)}>Kapat</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default PopUp