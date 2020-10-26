import React from "react";

function LifeCycle (props) {    
    return (
            
     <div className='time'>
       
       <span>{(props.mint>=10)? props.mint : '0' + props.mint}</span>&nbsp;:&nbsp;
       <span>{(props.secd>=10)? props.secd : '0' + props.secd}</span>
      </div>    
    );
}


export default LifeCycle;