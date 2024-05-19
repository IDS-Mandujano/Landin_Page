import './item.css'

function Item(props){
    return(
        <a href={props.section}>
            <img id="Lp_icon" src={props.image}></img>
        </a>
    );
}

export default Item;