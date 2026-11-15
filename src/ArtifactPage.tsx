import { MainFooter } from "./Homepage";
import HorizontalFullPagePanel from "./components/HorizontalFullPagePanel";
import BasicFlexImage from "./components/BasicFlexImage";
import BasicFlexText from "./components/BasicFlexText";


interface Props
{
    artifactName : string;
    imageSource : string;
    artifactDescription : string;
    culturalSignificance : string;
    swalesCriteriaFulfliment : string;
    setSelected : (value:number) => void;
}

function ArtifactPage(props:Props)
{
    return <>
        <HorizontalFullPagePanel height={400} 
            title={props.artifactName} 
            paragraph=""
            children={[
            ]}
            key="a"/>
            
            <div style={{display:"flex", justifyContent:"center",}}>
                <BasicFlexImage widthPercentage={50} height={500} imgPath={props.imageSource} altText="An artifact described below"/>
            </div>
            
            <div style={{justifyItems:"center"}}>
            
            <BasicFlexText text={props.artifactDescription} heading="Artifact Explanation" widthPercentage={80}/>
            <BasicFlexText text={props.culturalSignificance} heading="Cultural Significance to VCS" widthPercentage={80}/>
            <BasicFlexText text={props.swalesCriteriaFulfliment} heading="Swales' Criteria Fulfilled by this Artifact" widthPercentage={80}/>
            
            </div>

            <MainFooter setSelected={props.setSelected}/>
        </>;
}

export default ArtifactPage