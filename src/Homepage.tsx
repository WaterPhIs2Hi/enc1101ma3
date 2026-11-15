import HorizontalPanelGroup from "./components/HorizontalPanelGroup";
import HorizontalFullPagePanel from "./components/HorizontalFullPagePanel";
import BasicFlexImage from "./components/BasicFlexImage";
import BasicFlexText from "./components/BasicFlexText";
import BasicButtonList from "./components/BasicButtonList";
import BigButton from "./components/BigButton";
import ArtifactPage from "./ArtifactPage";
import { useState } from "react";



function Homepage() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [shownCriteria, setShownCriteria] = useState(0);
  const [description1, culturalSignificance1, criteria1] = ["VCS will often compete in events known as Game Jams. At the start time of a Game Jam, each team is given the same prompt and an end date. Between the start and end times of the Jam, which is often around a 3-day time window, teams must make a fully playable game from scratch, based on the prompt. After the window, all submitted games are judged and graded against each other, with the team behind the highest-rated-game being awarded a prize. The artifact above a piece of concept art VCS created during a game jam in Summer 2026.","Despite the idea of a Game Jam being fairly straightforward, the approaches development teams actually take are shockingly different. In a way, they define who we are as developers by putting us under pressure and leading us to make quick decisions that lead to putting lots of hard work into a short amount of time. \nVCS, for example, will have our major team members take days off from school or work to stay on the phone in a Discord call. This isn't usually an approach teams will take, calling for essentially 3 days straight with hardly any break time isn't exactly viable for most people, but it works toward our goal of making a game everyone is happy with. With constant feedback from all parties, everything is discussed and no one person is forced to keep their ideas to themselves. \nAfter the initial planning stage, we spend the remainder of our time in the jam hard at work, showing what we're actively working on live by streaming our screens to each other. This gives us the ability to criticize and give opinions about what's being made as it’s happening and helps unify all our visions past the initial agreed upon \"Mission Statement\" description of the game created at the beginning.\nDuring these critiques we often will try and create a dialogue between all of us before major changes are made. For example, during our first ever Jam, Gio, our artist, had designed this cat character for a tutorial. It initially was just a tiny anthropomorphic cat that would meow instructions at you; you play as this evil skeleton guy, so we thought it'd be funny to have them own a tiny cat to contrast your villainousness. Max, our musician, then brought up the point that no one would really think of going up to a random cat for instructions, so we should make him more visually interesting. Zach then suggested we make the character \"buff and wear a tuxedo\". We all agreed that this was the best approach.\nEssentially all of the decisions we make largely contribute to our goals as a team. Constantly talking to eachother and giving feedback allows us to make games we are happy with.","1. Swales defines the first criterion as \"a DC has a broadly agreed set of goals,\" and adds, \"these may be publicly and explicitly formulated (as in \"mission\" or \"vision\" statements).\" (7) Through our initial plan, part of our goal is to come up with an explicitly said \"Mission Statement\" for the game. We make sure everyone is fully on board before finalizing it as it guides our work towards a unified idea. While technically this mission statement would contribute more towards a Game Jam Team discourse community, our created statement reflects the team’s goals as a whole: to make an enjoyable game we can be proud of. After all, the purpose of completing any game jam is to improve our skills and make something we’re happy with\n2. The second criterion is that \"a DC has mechanisms of intercommunication among its members.\" (7) In this case, we use our standard communication channel Discord. We've used this to share files, discuss ideas, and talk about basically anything relating to our games. For example, see figure 1 below as concept art sent through discord that we each iterated within a call together.\n3. The third criterion: \"A DC uses its participatory mechanisms to provide information and feedback.\" (7) In this case, our participatory mechanism would be our group phone calls during the jam. Max used this to suggest changing Gio's art, and we all discussed our thoughts and came to a decision to alter it for the better. Max \"...used (the) participatory mechanism to manage the operation of the DC and to promote...change, growth, and development.\" (8)\n6. the sixth criterion Swales gives is \"A DC has a threshold of members with a suitable degree of relevant content and discoursal expertise.\" (8) In this example, Max, our musician, had a level of understanding to the point he could suggest something to improve the game from a design standpoint, which is outside of his standard work in the DC, and each of us, too, had enough design knowledge to understand and reciprocate his thoughts. "]
  const [description2, culturalSignificance2, criteria2] = ["The second artifact I'd like to discuss is our team's meetings. At VCS, while working on a major project, Zach, the project manager, will schedule a meeting each weekend. During these meetings, we enter a Discord call and follow an agenda he's created, which is the artifact pictured above. We take time discussing what we'd like to see for the game going forward, any announcements, worries, essentially anything relating to the current project. Most importantly, we discuss what work has been completed this week, and whether we're all happy with the result, changes we want to make, etc.","One of our most important values is that everyone working on the game is happy with what we’ve made. These meetings give us a great time to step back and analyze what we’ve made together and really shape the game we end up with. Another one of our values is that we care if we’re making a FUN game. It’s not easy making a game in the first place, but making something others will actually enjoy playing is much harder. We get the chance to play the game all together and see if the fun comes naturally, sometimes we’ll even have a guest come in and play-test a new level or feature for us to watch. Additionally, these standardized meetings really set the vibe for the workplace culture we have and usually have a large social aspect to them.","4. Criterion four states \"A DC utilizes and hence possesses one or more genres in the communicative furtherance of its aims.\" (8) The genre for this artifact would be the genre of a meeting itself. They're a way we interact with each other and discuss our work within the DC. Swales says, \"These sets of genres are often particularized, as the genres are performed, re-performed, and refined...\" (8) This applies here as throughout our meetings, we've refined them to be as effective as possible, and Swales even goes on to give staff meetings as an example for this.\n5. Criterion 5: \"In addition to owning genres, it has acquired some specific lexis\" (8) During our meetings, we have lots of shorthand tasks. For example, during The Revenge of Icarus' development, we abbreviated it to TROI. During one of our meetings for it, Gio was tasked with drawing a pixel-art version of some palm trees used for the jungle area in the game, which needed to use the jungle color palette. Additionally, we needed them animated with 4-8 frames of idle animation, so they would move in the background rather than staying still. When giving him this task, we didn't say all of that; we instead just said \"create a 4-frame sprite of a palm tree.\" \n7. The example from criterion 5 ties into this one, \"A DC develops a sense of “silential relations.”\" (8) It's expected that our artist knew what this meant without us having to say it, through his time in VCS he's done tasks like this dozens of times, so he knows as well as we do what a \"4-frame sprite\" entails, without the instructions being explicitly told to him.\n8. Criterion eight explains \"A DC develops horizons of expectation.\" This comes up in the form of us discussing our work from the week prior. There is a certain level of quality expected in what we show off during these meetings, and if they aren't up to the wanted standard, we share criticism and reflect on what can be changed. This, too, plays towards one of our values as a DC. Having this time to do a quality check ensures we’re actually making a well-put-together game. We could easily spend 5 minutes on every feature and just call it a day, but as a DC we care immensely about the quality of the final build of the game."]

  const criteriaList = [
    "1. A DC has a broadly agreed set of goals",
    "2. A DC has mechanisms of intercommunication among its members",
    "3. A DC uses its participatory mechanisms to provide information and feedback",
    "4. A DC utilizes and hence possesses one or more genres in the communicative furtherance of its aims",
    "5. In addition to owning genres, it has acquired some specific lexis",
    "6. A DC has a threshold of members with a suitable degree of relevant content and discoursal expertise",
    "7. A DC develops a sense of \"silential relations\"",
    "8. A DC develops horizons of expectation"
  ];

  switch(selectedIndex)
  {
    default:
      return <div>
        <div className='headerArea'>
          <MainTitleHeader/>
          <HorizontalPanelGroup title="" height={800} children={
            [
            <BasicFlexText 
            widthPercentage={55}
            heading="Indie Game Development" 
            text={"Game development has become significantly larger as a hobby in the last 20 years. When video games first began being commercially successful, companies would often code their games from scratch or make the tools for creation themselves. \nIn the early 90s, when computers became easily accessible for personal use, the public gained access to community-made level editors, drawing programs, and DAWs. In the late 2000s, video games often stopped using proprietary software; content stopped being developed in-house and was made using these same public programs that hobbyists would use. \nIn the 2010s, independent game development became a much simpler task with popular engine-driven-development through software like Unity and Unreal Engine. Game developers generally have always been a community, often sharing knowledge and ideas, speaking about their interests, and professionals connecting with professionals to make the perfect project. The smaller, freelance teams spawned in the 2010s, however, are separate communities too, encapsulated within this larger developer community."}  
            key="a"/>,

          <BasicFlexImage 
            widthPercentage={30}
            imgPath="src/assets/indie_dev_image_0.png"
            altText="A photo of level 5 of The Revenge of Icarus"
            key="b"/>
          ]}/>

          <HorizontalFullPagePanel height={400} 
            title="Discourse Communities" 
            paragraph="A discourse community (DC) is a group of people that, together, fulfil certain criteria. The criteria we will use to define a DC within this website come from linguist John Swales. Swales has 8 simple criteria --which will be expanded upon further throughout-- however we can also define them here. Click through the buttons below to see each criteria as he defines."
            children={[
            <BasicButtonList buttonLabels={["Criteria #1","Criteria #2","Criteria #3","Criteria #4","Criteria #5","Criteria #6","Criteria #7","Criteria #8"]} numberAction={(value: Number) => { setShownCriteria(Number(value));}}/>,
            
            <p style={{padding:"3%", fontSize:"25px", color:"var(--textColorB)"}}>{criteriaList[shownCriteria]}</p>
            ]}

            key="a"/>
            

          <HorizontalPanelGroup title="" height={500} children={
            [
            <BasicFlexImage 
            widthPercentage={30}
            imgPath="src/assets/vcs_image.png"
            altText="A photo of the 4 members of VCS"
            key="a"/>,

            <BasicFlexText 
            widthPercentage={50}
            heading="Void Coffee Studios" 
            text={"Dev teams each have several unique practices and ideas determined by who is on them, their experience, and their interests. No team is the same, but we all have at least one common goal: To make a video game. Every team goes about it in their own way. I personally work on a team named \"Void Coffee Studios.\" \nVCS consists of 4 main people, with additional help from a few others. We have our own methods of creating, our own ideas on what makes a game good, our own skills, and our own unique vision, which we communicate and use with each other to form our projects. \nOur goals include making a fun video game, openly collaborating, and making sure by the end, everyone is happy with what we've made."}  
            key="b"/>
          ]}/>

          <HorizontalPanelGroup title="Some of our games:" height={500} children={
            [
            <BasicFlexImage 
            widthPercentage={25}
            imgPath="src/assets/icarus_image_0.png"
            altText={"A photo of level 5 of \"The Revenge of Icarus\""}
            key="a"/>,
          
            <BasicFlexImage 
            widthPercentage={25}
            imgPath="src/assets/amplobus_image_0.png"
            altText={"A photo of a level from \"AMPLOBUS\""}
            key="b"/>,

            <BasicFlexImage 
            widthPercentage={25}
            imgPath="src/assets/agdtbal_image_0.png"
            altText={"A photo of \"A good day to be a lunatic\""}
            key="c"/>
          ]}/>

          <HorizontalPanelGroup title="" height={500} children={[
            <BigButton label="Artifact Analysis 1: Game Jam Calls" numberAction={() =>  setSelectedIndex(1)} imageURL="src/assets/artifact_1_button_bg.png"/>,
            <BigButton label="Artifact Analysis 2: Meetings" numberAction={() =>  setSelectedIndex(2)} imageURL="src/assets/artifact_2_button_bg.png"/>
          ]}/>
          
          <MainFooter setSelected={setSelectedIndex}/>
          
        </div>
      </div>;
      
      case 1:
        return <ArtifactPage 
        artifactName="Game Jam Calls" 
        artifactDescription={description1} 
        imageSource="src/assets/artifact_1.png"
        culturalSignificance={culturalSignificance1}
        swalesCriteriaFulfliment={criteria1}
        setSelected={setSelectedIndex}
        />;

      case 2:
        return <ArtifactPage 
        artifactName="Meetings" 
        artifactDescription={description2} 
        imageSource="src/assets/artifact_2.png"
        culturalSignificance={culturalSignificance2}
        swalesCriteriaFulfliment={criteria2}
        setSelected={setSelectedIndex}
        />;
    }
}

function MainTitleHeader()
{
  return <div className="basic-div">
      <h1 style={{fontSize:"70px"}}><b>Game Developers as Discourse Communities</b></h1>
      <hr className="basic-seperator-line"></hr>
      <h4>My goal is to prove to you--through analyzing my own--that all game development teams are nested discourse communities.</h4>
      <p style={{color:"var(--textColorC)"}}>Zakary DeDominick | ENC 1101 | 11-14-2026</p>
  </div>
}

interface FooterProps
{
    setSelected : (value:number) => void;
}

function MainFooter(props:FooterProps)
{
  return <div style={{height:"200px", alignContent:"center", width:"100%", padding:"0px 10%", marginTop:"50px", backgroundColor:"var(--divColorD)", textShadow:"none"}}>
        <h4 style={{textAlign:"center", textShadow:"2px 2px rgb(0,0,0)"}}>
        <b>Game Developers as Discourse Communities</b>
        </h4>
        <p style={{textAlign:"center"}}>This website is based off of an essay on the same topic, which you can read by clicking <a>HERE</a>.</p>
        <hr className="basic-seperator-line"></hr>
        <div className="navigation-div" style={{maxHeight:100, width:"100%", display:"flex", justifyContent:"center"}}>
          {[
            <button onClick={() => props.setSelected(0)} key="a">Home</button>,
            <button onClick={() => props.setSelected(1)} key="b">Artifact 1</button>,
            <button onClick={() => props.setSelected(2)} key="c">Artifact 2</button>,
            <button onClick={() => props.setSelected(3)} key="d">Discourse Communities</button>
          ]}
        </div>

    </div>;
}




/*function App() {

  let items = ["1", "2", "ss", "4"];
  
  return <div>
    <ListGroup topLabel='test' items={items} onSelectItem={(item, index) => console.log(item + " which is at index #" + index)}/>
  </div>
}*/

export default Homepage;
export { MainFooter };