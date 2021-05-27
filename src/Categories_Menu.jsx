import React from 'react';

const CategoriesMenu = ({filterItems, categories}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Button Menu</h1>
                    <div className="text-center">
                    {categories.map((category, index)=>{
                        return <button type="button" className="btn btn-primary mx-2 my-2" key={index} onClick={()=>filterItems(category)}>{category}</button>
                    })}
                    </div>
                    {/*{allCategories}*/}
                    {/*{categories.map((category, index) => {*/}
                    {/*    return <button key={index} type="button" className="btn btn-primary">{category}</button>*/}
                    {/*})}*/}
                </div>
            </div>
        </div>
    )
}

export default CategoriesMenu;
