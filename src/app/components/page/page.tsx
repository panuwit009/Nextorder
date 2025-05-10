import Navbar from "./navbar";
import Search from "./search";
import SelectMenu from "./selectmenu";
import ListFood from "./listfood";

export default function Main () {
    return (
        <>
            <Navbar />
            <Search />
            <SelectMenu />
            <ListFood />
        </>
    );
}