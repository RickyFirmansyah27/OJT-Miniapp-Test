import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getproducts, productSelector } from '../redux/productdbSlice';
import { useEffect } from 'react';
import ModalProduct from './ModalProduct';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  const selectedProduct = products.find(product => product.id === selectedId);

  const handleDetailClick = (productId) => {
    setSelectedId(productId);
    setIsModalOpen(true);
  };

  return (
    <div className="column is-10 main is-pulled-right">
      <div className="box">
        <h3 className="is-bold">Halaman Product Function</h3>
      </div>

      <div className="box">
        <h3>Daftar Product</h3>

        {isModalOpen && selectedProduct && (
          <ModalProduct
            product={selectedProduct}
            productId={selectedId}
            closeModal={() => setIsModalOpen(false)}
          />
        )}

        <table className="table is-striped is-fullwidth">
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
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    onClick={() => handleDetailClick(product.id)}
                    className="button is-info is-small"
                  >
                    Check
                  </button>
                  <Link to={`/auth/productDB/${product.id}`} className='button ml-3 is-info is-small'>
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPage;
