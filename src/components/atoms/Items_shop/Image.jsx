import './image.css'

function Image(props){
    return (
        <img id="shop_img" src={props.image}></img>
    );
}

export default Image;