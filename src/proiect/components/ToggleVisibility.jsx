import React, { useState } from "react";

function ToggleVisibility(){
    const [isVisibile, setIsVisibile] = useState(false);

    // function handleClick(){
    //     if(isVisibile){
    //         setIsVisibile(false);
    //     } else {
    //         setIsVisibile(true);
    //     }
    // }

    return(
        <div>
            {/* echivalent cu  handleClick()*/}
            <button onClick={() => setIsVisibile(!isVisibile)}> 
                {isVisibile ? 'Hide Details' : 'Show Details'}
            </button>

            {isVisibile && <p>Now you see me</p>}
        </div>
    )
}

export default ToggleVisibility;