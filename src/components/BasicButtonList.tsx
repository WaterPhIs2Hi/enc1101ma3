import { SetStateAction, useState } from "react";

interface Props
{
    numberAction: (number:Number) => void;
    buttonLabels: string[];
}

function BasicButtonList(props : Props)
{
    return <div style={{display:"flex", alignContent:"center", width:"100%", margin:"0%", justifyContent:"space-evenly"}}>
        {props.buttonLabels.map((label, index) => <button 
            style={{backgroundColor:"var(--divColorA)", border:"1px", padding:"10px", textDecorationLine:"underline",color:"var(--textColorA)", borderRadius:"1cap"}} onClick={()=>props.numberAction(index)}>
                {label}
         </button>)}
      </div>;
}

export default BasicButtonList;