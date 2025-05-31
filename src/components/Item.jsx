import React from 'react'

export default function Item({data}) {
  return (
  <>
     

     <div className="panel-body" id="list-product">
              <div>
                <div className="media product">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src={data.image}
                        alt={data.name}
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{data.name}</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At dicta asperiores veniam repellat unde debitis quisquam
                      magnam magni ut deleniti!
                    </p>
                    <input
                    type="number"
                    min="0"
                    value={data.quantity}
                    className="w-12 mt-2 border rounded text-center text-sm"
                    disabled={data.disabled}
                />
                    <a data-product={1} className="price"> {data.price} USD</a>
                  </div>
                </div>
              </div>
              <div>
             </div>
           </div>

     </>
  )
}
