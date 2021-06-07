import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

const EditProduct = ({ products, onUpdate }) => {
    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);

    const [currentProduct, setCurrentProduct] = useState(product);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentProduct);
        history.push('/admin/products');
    }
    const onHandleChange = e => {   
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            <div className="card shadow my-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-primary"> Sửa sản phẩm</h5>
            </div>
                <div className="card-body">

                    <form onSubmit={onHandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" name="name" className="form-control" value={currentProduct.name} onChange={onHandleChange} />

                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Image</label>
                            <input type="file" name="image" className="form-control-file" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Price</label>
                            <input type="text" name="price" className="form-control" value={currentProduct.price} onChange={onHandleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>

        </div>

    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct