
interface Props
{
    imageURL:string;
    label:string;
    numberAction: (number:Number) => void;
}

function BigButton(props:Props)
{
    return <div onClick={() => props.numberAction(1)} className="basic-div"  style={{filter:"blur(0px)", backgroundRepeat:"no-repeat", backgroundSize:"100%", backgroundImage:"url("+props.imageURL+")", display:"inline-block", width:"fit-content", height:"fit-content", padding:"0", justifyContent:"space-evenly"}}>
        <h1  style={{backgroundColor:"var(--divColorD)",fontWeight:"bold",height:140, WebkitTextStroke:"2px rgb(0,0,0)",textShadow:"0px 0px 10px 10px rgb(0,0,0)", filter:"revert", marginTop:"360px", marginBottom:0, wordWrap:"normal", width:500}}>{props.label}</h1>
    </div>
}

export default BigButton;