import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getproducts, productSelector } from '../redux/productdbSlice';


const CardProduct = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getproducts());
    }, [dispatch]);
    const product = useSelector(productSelector.selectAll);

    return (
        <>
            <div className="box">
                <h3 className="is-bold">Product List</h3>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Stok</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.slice(0, 5).map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <button className='is-info is-small'>
                                        Ready
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CardProduct;
