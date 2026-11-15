import React from "react";

interface Props{
    title : string;
    height : number;
    children: React.ReactNode[];
}

function HorizontalPanelGroup(props : Props)
{
    const title = props.title;
    const height = props.height;
    const children = props.children;

    return <div style={{margin:"3% -2%"}}>
    <h4 style={{textAlign:"center"}}>
        {title}
    </h4>
    <div style={{maxHeight:height, width:"100%", display:"flex", justifyContent:"center"}}>
        {children}
    </div>
    </div>;
}


export default HorizontalPanelGroup;