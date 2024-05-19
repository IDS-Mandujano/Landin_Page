import Item from "../atoms/List/Item";
import './list.css'

function List(props){
    return (
        <li id="Lp_list">
            <Item section={props.section} image={props.image}></Item>
        </li>
    );
}

export default List