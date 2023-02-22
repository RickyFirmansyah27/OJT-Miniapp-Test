import React from 'react'
import CardProduct from "../Card/cardProduct";
import CardProfile from "../Card/cardProfile";


const Dashboard = () => {
    
    return (
        <div className="column is-10 main is-pulled-right">
            <div className="box">
                <h3 className="is-bold">OJT Test - MiniApp</h3>
            </div>

            <div className="container">
                <div className="columns">
                    <div className="column is-pulled-left">
                        <CardProduct />
                    </div>
                    <div className="column is-pulled-right">
                        <CardProfile />
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Dashboard
