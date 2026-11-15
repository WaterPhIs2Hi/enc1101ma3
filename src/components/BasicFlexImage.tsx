
interface Props{
    widthPercentage : number;
    imgPath : string;
    altText : string;
    height? : number;
}

function BasicFlexImage(props:Props)
{
    return <img src={props.imgPath} 
    alt={props.altText}
    className="basic-img-div" 
    style={{border:"10px solid var(--divColorD)", objectFit:"cover", maxWidth:props.widthPercentage+"%", height:props.height}}
    />
}

export default BasicFlexImage;