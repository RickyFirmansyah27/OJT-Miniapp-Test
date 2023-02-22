import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, productSelector } from '../redux/productSlice';
import { useEffect } from 'react';

const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());

    }, [dispatch]);

    const product = useSelector(productSelector.selectAll);
    
    
    

    return (
        <div className="column is-10 main is-pulled-right">

            <div className="box">
                <h3 className="is-bold">Halaman Product Function</h3>
            </div>

            <div className="box">
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stok</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product, index) => (
                             <tr key={product.id}>
                            <td>{index + 1}</td>
                             <td>{product.title}</td>
                             <td>{product.description}</td>
                             <td>{product.price}</td>
                             <td>
                               <button className="button is-info is-small">edit</button>
                             </td>
                           </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default ProductList;
