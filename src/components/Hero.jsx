import React from 'react'

export default function Hero() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://fakeapi.platzi.com/_astro/banner.5e0ee8a6_JMozV.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Discover Quality, Embrace Elegance</h1>
            <p className="lead">Welcome to our store, where exceptional quality meets modern elegance. Here, every item is a testament to fine craftsmanship and contemporary style. 
            We believe in offering products that not only elevate your lifestyle but also resonate with your personal taste.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a type="button" className="btn btn-success btn-lg px-4 me-md-2" href='#shop'>Shop</a>
            </div>
          </div>
        </div>
      </div>
  )
}
