
interface Props
{
    text: string;
    heading: string;
    widthPercentage: number;
}

function BasicFlexImage(props : Props)
{
    const textSplit = props.text.split('\n');

    return <div className="basic-div" style={{objectFit:"contain", maxWidth:props.widthPercentage+"%", margin:"5px"}}>
        <h4>
            {props.heading}
        </h4>
        {textSplit.map((str) => <><p key={str[0]}>{str}</p></>)}
    </div>
}

export default BasicFlexImage;