import './container.css'
import Image from "../../atoms/Items_footer/Image"

function Container(props){
    return (
        <div id="Ft_imgContainer">
            <Image image={props.image}></Image>
       </div>
    );
}

export default Container;