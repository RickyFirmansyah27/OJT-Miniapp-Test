import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproducts, productSelector } from "../redux/productdbSlice";


const ModalProduct = ({ product, productId, closeModal }) => {
    const dispatch = useDispatch();
    const active = true;
  
    product = useSelector((state) =>
      productSelector.selectById(state, productId)
    );
  
    useEffect(() => {
      dispatch(getproducts());
    }, [dispatch]);
  
    const handleClick = (e) => {
      closeModal();
    };

    return (
        <>
            <div className={`modal ${active ? "is-active" : ""}`} >
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="column is-fullwidth">

                        <div className="box">
                            <h3 className="is-bold"> Data Product</h3>
                            <table className='table is-striped is-fullwidth'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Product Name</th>
                                        <th>Brand</th>
                                        <th>Category</th>
                                        <th>Rating</th>
                                        <th>Discount</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.brand}</td>
                                        <td>{product.category}</td>
                                        <td>{product.rating}</td>
                                        <td>{product.discountPercentage}</td>
                                        <td>{product.stock}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button onClick={handleClick} className="mt-3 ml-3 is-success">
                            Exit
                        </button>



                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalProduct;
