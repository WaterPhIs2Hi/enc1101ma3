import React, { ReactNode } from "react";

interface Props{
    title : string;
    paragraph? : string;
    height : number;
    children? : ReactNode[]
}

function HorizontalFullPagePanel(props : Props)
{
    const title = props.title;
    const height = props.height;
    
    return <div style={{maxHeight:height, width:"102%", padding:"30px 10%", backgroundColor:"var(--divColorD)", textShadow:"none"}}>
        <h4 style={{color:"var(--textColorB)", textAlign:"center", textShadow:"2px 2px rgb(0,0,0)"}}>
        <b>{title}</b>
        </h4>
        <p style={{color:"var(--textColorA)", textShadow:"2px 2px rgb(0,0,0)"}}>{props.paragraph}</p>
        {props.children}
    </div>;
}


export default HorizontalFullPagePanel;