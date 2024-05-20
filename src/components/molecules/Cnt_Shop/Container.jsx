import './container.css'
import Image from "../../atoms/Items_shop/Image"
import Price from "../../atoms/Items_shop/Price"
import Text from "../../atoms/Items_shop/Text"
import Name from '../../atoms/Items_shop/Name'


function Container(props){
    return (
        <div id="shop_container">
            <div id="shp_imgContainer">
                <Image image={props.image}></Image>
                <Name name={props.name}></Name>
                <Price price={props.price}></Price>
                <Text text={props.text}></Text>
            </div>
        </div>
    );
}

export default Container