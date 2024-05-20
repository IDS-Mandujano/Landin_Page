import './section.css'
import mysql from "../../../data/mysql"
import Container from "../../molecules/Cnt_Shop/Container"

function Section(){
    return (
        <div id="Comprar">
            {
                mysql.stock.map(stk => 
                    <Container key={""} 
                        name={stk.name} 
                        image={stk.image} 
                        price={stk.price} 
                        text={stk.description}>
                    </Container>)
            }
        </div>
    );
}

export default Section;