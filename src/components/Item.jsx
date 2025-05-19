import React from 'react'

export default function Item() {
  return (
    <>
      <div className="panel-body" id="list-product">
              <div>
                <div className="media product">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="./images/image copy 3.png"
                        alt="pizza"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Pizza</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At dicta asperiores veniam repellat unde debitis quisquam
                      magnam magni ut deleniti!
                    </p>
                    <span className="price"> 30 USD</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="media product">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="./images/image copy 2.png"
                        alt="pizza"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Hamburger</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At dicta asperiores veniam repellat unde debitis quisquam
                      magnam magni ut deleniti!
                    </p>
                    <input
                      name="quantity-product-1"
                      type="number"
                      defaultValue={4}
                    />
                    <a data-product={1} className="price">
                      15 USD{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="media product">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="./images/image copy.png"
                        alt="pizza"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Bread</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At dicta asperiores veniam repellat unde debitis quisquam
                      magnam magni ut deleniti!
                    </p>
                    <input
                      name="quantity-product-1"
                      type="number"
                      defaultValue={1}
                    />
                    <a data-product={1} className="price">
                      20 USD{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="media product">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="./images/image.png"
                        alt="pizza"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Cake</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At dicta asperiores veniam repellat unde debitis quisquam
                      magnam magni ut deleniti!
                    </p>
                    <input
                      name="quantity-product-1"
                      type="number"
                      defaultValue={1}
                    />
                    <a data-product={1} className="price">
                      10 USD{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
      
    </>
  )
}
