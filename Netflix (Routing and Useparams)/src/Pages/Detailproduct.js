import React from 'react'
import Data from '../Cardsdata/Data'
import { useParams, useNavigate } from 'react-router'
function Detailproduct() {
  let {title} = useParams();
  let navigate = useNavigate()
  let fData = Data.find(x => x.title == title)

  return (
  <>
   <div className='d-flex justify-content-center'>

        <div className="card" style={{ width: '28rem' }}>
          <img src={fData.thumbnail} style={{height: 400}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{fData.extract}</p>
            <a className='btn btn-warning my-4'onClick={()=>navigate('/')}>Back to Home</a>
          </div>
        </div>


{/* 
<a className='btn btn-warning my-4'
onClick={()=>navigate('/')}>Back to Home</a>

<h1>Product Detail Page</h1>
<h1>Title : {title}</h1>
<h1>Year : {fData.year}</h1>
<h1>Image : {fData.thumbnail}</h1> */}
</div>
  </>
  )
}

export default Detailproduct
