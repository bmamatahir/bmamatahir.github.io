import React, {useState, useEffect} from 'react';

const AutoScrollingBackground = ({src}) => {
    let [yPos, setYPos] = useState(0);
    let ref = null;

    useEffect(function(){
        ref = setInterval(()=> {
            setYPos(++yPos)
        }, 100)

        return stopAnimation
    },[])

    function stopAnimation() {
        clearInterval(ref)
    }

    return (
     <div className="h-full" style={{backgroundImage: 'url(' + src+ ')', backgroundPositionY: yPos  + '%', backgroundPositionX: 'center', backgroundSize: "cover" }} onMouseOver={stopAnimation}>
    </div>
 );
};

export default AutoScrollingBackground;