import './container.css'
import Image from "../../atoms/Items_products/Image"
import Text from "../../atoms/Items_products/Text"
import Title from '../../atoms/Items_products/Title';

function Container(props){
    return (
        <div id="Lp_ctnProducst">
            <Image image={props.image}></Image>
            <Title title={props.title}></Title>
            <Text text={props.text}></Text>
        </div>
    );
}

export default Container;