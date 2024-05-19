import './container.css'
import Image from "../../atoms/Image_home/Image"

function Container(props){
    return (
        <div id="img_home">
            <Image image={props.image}></Image>
        </div>
    );
}

export default Container;