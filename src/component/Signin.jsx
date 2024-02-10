import React from 'react'

const Signin = () => {
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col 12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">EmailId</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col 12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col 12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-info">Login</button>
                </div>
                <a href='/Signup'>New users click Here</a>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Signin
