import mysql from "../../data/mysql";
import List from "../molecules/List";
import './Ul.css'

function Ul_list(){
    return (
        <div id="nav_bar">   
            <ul id="Lp_li_container">
                {
                    mysql.icons.map(ic => <List section={ic.section} image={ic.image}></List>)
                }
            </ul>
        </div>
    );
}

export default Ul_list