// import UserItem, { FruitItem } from "./UserItem";  //first mode of importing
import { UserItem, FruitItem } from "./UserItem";     //second mode of importing

function Homepage() {
    return (
    <div>
        <UserItem name="homepage" email="sssssss"/>

        <FruitItem name="Apple" kg="1"/>
    </div>
    );
}

export default Homepage;