import React from 'react';
import Top from './Top'
import { Link } from 'react-router-dom'
function Cards({ Carddata }) {
    return (
        <>
        <Top/>
            <div className='container-fluid bg-dark'>
                <div className='container'>
                    <div className='row m-auto'>
                        {
                            Carddata.map(a => {
                                const { title, thumbnail } = a
                                return (
                                    <div className='col mt-3'>
                                        <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                                            <img src={thumbnail} className="card-img-top" alt="..." style={{ height: 350 }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{title}</h5>
                                                {/* <Link to="/Detailproduct" className="btn btn-primary">Get Detail</Link> */}
                                                <Link to={`/detailproduct/${title}`} className="btn btn-primary">Watching Movie</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })




                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
