import React from 'react'
import Item from './Item';

export default function Cart() {
  const dataCart = [
    {
      id: 4,
      name: "Cake",
      price: 10,
      quantityOder: 15,
    },
    {
      id: 2,
      name: "Hamburger",
      price: 15,
      quantityOder: 32,
    },
  ];
  return (
    <>
      
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th width="4%">STT</th>
                    <th>Name</th>
                    <th width="15%">Price</th>
                    <th width="4%">Quantity</th>
                    <th width="25%">Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                  {dataCart && 
                  dataCart.map((item,index)=> {
                    return (
                      <tr key={item.id} >
                      <th scope="row"> {index + 1} </th>
                      <td> {item.name} </td>
                      <td>{item.price} USD</td>
                      <td>
                        <input
                          name={`cart-item-quantity-${item.id}`}
                          type="number"
                          defaultValue={item.quantityOder}
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                        >
                          Update
                        </a>
                        <a
                          className="label label-danger delete-cart-item"
                          data-product=""
                        >
                          Delete
                          </a>
                          </td>
                    </tr>
                    )
                  })
                  }
                 
                </tbody>
                <tfoot id="my-cart-footer">
                  <tr>
                    <td colSpan={4}>
                      There are <b>2</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      630 USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="alert alert-success" role="alert" id="mnotification">
            Add to cart successfully
          </div>
            </div>
        
    </>
  )
}
