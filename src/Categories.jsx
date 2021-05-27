import React from 'react';

const Categories = ({itemsList}) => {
    return (
        <div className="container">
            <div className="row">
                {
                    itemsList.map((item) => {
                        const {id, title, desc, price, img, category} = item;
                        return <div className="col-md-4" style={{marginBottom:'1rem'}}>
                            <div className="card" key={id} style={{height:'78vh'}}>
                                <img src={img} alt={title} className="card-img-top" style={{height:'45vh'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">
                                        {desc}
                                    </p>
                                    <div>
                                        <h5 className="float-start">Rs.{price}</h5>
                                        <h5 className="float-end">{category}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )

}

export default Categories;
