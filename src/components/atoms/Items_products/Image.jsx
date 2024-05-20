import './image.css'

function Image(props){
    return (
        <img id="img_fruits" src={props.image}></img>
    );
}

export default Image;