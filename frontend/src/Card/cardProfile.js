import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from '../redux/authSlice';


const CardProfile = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);
    const { user } = useSelector((state) => state.auth);


    return (
        <>
            <div className="box">
                <h3 className="is-bold">Profile</h3>

                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td>{user && user.name}</td>
                            <td>{user && user.email}</td>
                            <td>{user && user.gender}</td>
                            <td><button className='is-info is-small'>
                                Active</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CardProfile;
