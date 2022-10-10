import React from "react";
import "./stylish.css";

function Helper(props) {
    return <div id="wrapper">
        <a href="#help" data-toggle="collapse"><i className="far fa-question-circle"></i></a>
        <p id="sneaky">
            You're not supposed to be here are you? No. No you're not. Don't worry,
            this tag shouldn't be here either. But I've spent too much time debugging
            this part of this website that I'm settling for this workaround. For now,
            this'll be gone soon. Mark my words. At 00:09 on the 20th of August 2018, I
            vowed to get rid of this cheeky little beaky a tag. <br/> <br/>

            I fixed it. It's been 5 minutes and I fixed it using a z-index... Great...
            There's no real reason for this tag to be here now. Or you for that matter. 
            You can stop inspecting now. Go on. Shoo.
        </p>
        <div id="helper">
            <div id="help" className="collapse show">
                <p>{props.children}</p>
            </div>  
        </div>
    </div>;
}

export default Helper;