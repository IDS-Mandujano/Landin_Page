import './section.css'
import Container from "../../molecules/Image_container/Container"
import ContainerTxt from '../../molecules/Text_home/ContainerTxt';
import mysql from "../../../data/mysql"

function Section(){
    return (
        <div id="Lp_section">
            <div id="Lp_imgContainer">
                {
                    mysql.image_products.map(ic=> <Container image={ic.image}></Container>)
                }
            </div>
            <div id="Lp_infoContainer">
                <ContainerTxt></ContainerTxt>
            </div>
        </div>
    );
}

export default Section;