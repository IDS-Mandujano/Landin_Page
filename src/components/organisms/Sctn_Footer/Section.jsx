import './section.css'
import mysql from "../../../data/mysql"
import Container from "../../molecules/Ctn_Footer/Container"
import ContainerTxt from "../../molecules/Ctn_Footer/ContainerTxt"

function Section(){
    return (
        <div id="Footer">
            <div id="Sctn_Img">
                {
                    mysql.Social_Links.map(Sls => <Container key={""} image={Sls.icon}></Container>)
                }
            </div>
            <div id="Sctn_Txt">
                <ContainerTxt></ContainerTxt>
            </div>
        </div>
    );
}

export default Section;