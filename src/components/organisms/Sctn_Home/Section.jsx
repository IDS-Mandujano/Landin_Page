import './section.css'
import Container from "../../molecules/Cnt_Home/Container"
import ContainerTxt from "../../molecules/Cnt_Home/ContainerTxt"
import mysql from '../../../data/mysql';

function Section(){
    return (
        <div id="Home">
            <div id="Lp_imgContainer">
                {
                    mysql.image_products.map(ic=> <Container key={""} image={ic.image}></Container>)
                }
            </div>
            <div id="Lp_infoContainer">
                <ContainerTxt></ContainerTxt>
            </div>
        </div>
    );
}

export default Section;