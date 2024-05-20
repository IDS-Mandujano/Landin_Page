import './section.css'
import Container from "../../molecules/Ctn_Products/Container"
import mysql from "../../../data/mysql"

function Section(){
    return (
        <div id="Productos">
            {
                mysql.frutas.map(fruits => 
                <Container 
                    key={""}
                    title={fruits.name} 
                    image={fruits.image} 
                    text={fruits.description}>
                </Container>)
            }
        </div>
    );
}

export default Section;