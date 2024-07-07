import React, { useState } from "react";

function ToggleVisibility(){
    const [isVisibile, setIsVisibile] = useState(false);


    const [isShow, showText] = useState(false);
    
    function handleClick(){
        if(isShow){
            //isShow = true, schimba-l in false
            showText(false);
        } else {
            //isVisible = false, schimba-l in true

            showText(true);
        }
    }

    return(
        <div style={{ display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',}}>
            {/* echivalent cu  handleClick() ~ byDefault statul este in IF*/}
            <button onMouseEnter={() => setIsVisibile(!isVisibile)}> 
                {isVisibile ? 'Hide Details' : 'Show Details'}
            </button>

            {isVisibile && <p>Now you see me</p>}

            {/* exemplul 2 cu handleClick() ~ byDefault statul este in IF*/}

            <button onClick={handleClick}> 
                {isShow ? 'HIDE TEXT' : 'SHOW TEXT'}
            </button>
            {isShow && <p>Now you see THE TEXT </p>}
        </div>
    )
}

export default ToggleVisibility;