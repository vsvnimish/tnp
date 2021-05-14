import React, {useEffect} from 'react'

const Programs = React.forwardRef((props, ref)=> {

    useEffect(() => {
        ref.current.setNavState("navColor");
    }, [ref])

    
    return (
        <div className="programs" >
            <h1>This is Programs at IIITR</h1>
        </div>
    )
});

export default Programs;
