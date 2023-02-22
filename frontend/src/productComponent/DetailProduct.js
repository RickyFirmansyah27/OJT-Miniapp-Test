import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getproducts, productSelector } from '../redux/productdbSlice';
import { useParams } from 'react-router-dom';



const DetailProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector((state) => productSelector.selectById(state, id));


    useEffect(() => {
        dispatch(getproducts());
    }, [dispatch]);


    return (
        <div className="column is-10 main is-pulled-right">
            <div className="box">
                <h3 className="is-bold">Halaman Detail Product</h3>
            </div>

            <div className="box">
                <h3>Detail Product</h3>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Discount</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >

                            <td>{product.title}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>{product.rating}</td>
                            <td>{product.discountPercentage}</td>
                            <td>{product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container">
                <div className="columns">
                    <div className="column is-pulled-left">
                        <div className="box">
                            <h3 className="is-bold">Description</h3>
                            <h3>{product.description}</h3>
                        </div>

                    </div>
                    <div className="column is-pulled-right">
                        <div className="box">
                            <h3 className="is-bold">Thumbnail</h3>
                            <img src={product.thumbnail} alt={product.title} />
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default DetailProduct;
