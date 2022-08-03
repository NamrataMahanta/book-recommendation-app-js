import axios from "axios";
import { useEffect, useState } from "react";

const CategoryData = () => {
 let [id, setCategoryId] = useState('');
 let [categoryDataToDisplay, setCategoryDataToDisplay] = useState('');

    const handleChange = (evt) => {
        setCategoryId(evt.target.value ); 
        setCategoryDataToDisplay({
            id: '',
            name: ''
        });
    }

    const getCategoryById = (evt) => {
        console.log(id);
        axios.get(`http://localhost:9999/user/get-category-by-id/${id}`)
            .then((response) => {
                setCategoryDataToDisplay(response.data);
                setCategoryId('');
            })
            .catch(() => {
                alert(`Category with CategoryId ${id} not found!`);
                setCategoryId('');
                setCategoryDataToDisplay({
                   id: '',
                   name: ''
                });
            });
        evt.preventDefault();
    }

    return (
        <div className="container">
            <div>
                <p className="display-4 text-primary py-3">CategoryData</p>
                <hr />
                <p className="lead">Search Category by Id</p>
                <div className="row pt-3">
                    <div className="col-3 md-auto px-3 pt-3 bg-white shadow">
                        <p className="lead text-info">Search Category:</p>
                        <form className="form form-group">
                            <input
                                className="form-control mb-3"
                                type="number"
                                id="id"
                                name="id"
                                value={id}
                                placeholder="Enter id"
                                onChange={handleChange}
                                autoFocus>
                            </input>
                            <input
                                className="form-control btn btn-outline-primary"
                                type="submit"
                                value="Search Category"
                                onClick={getCategoryById}>
                            </input>
                        </form>
                    </div>
                    <div className="col-4 ml-auto mr-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info">Category details:</p>
                        <hr />
                        <p>CategoryId: {categoryDataToDisplay.categoryId}</p>
                        <p>CategoryName: {categoryDataToDisplay.category}</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryData;