import React, {useState} from 'react';
import items from './Menu';
import Categories from "./Categories";
import CategoriesMenu from "./Categories_Menu";
import Nav from "./Navbar";

const allCategories = ['all', ...new Set(items.map(item => item.category))]

const App = () => {

    const filterItems = (category) => {
        if(category==='all') {
            setMenuList(items);
            return;
        }
        const newItems = items.filter(item => item.category === category)
        setMenuList(newItems);
    }

    const [menuList, setMenuList]=useState(items);
    // const [categories, setCategories] = useState([]);

    return(
        <div>
            <Nav />
            <h1 className="text-center">OUR CAKES</h1>
            <CategoriesMenu categories={allCategories} filterItems={filterItems}/>
            <Categories itemsList={menuList} />
        </div>
    )
}

export default App;