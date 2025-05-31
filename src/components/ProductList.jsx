import React, { useEffect} from 'react'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux'
import { PORT_BE } from '../evn';
import actionGetListProduct from '../actions/productAction';
import axios from 'axios';

export default function ProductList() {
  const dispatch = useDispatch();
  const state = useSelector((state)=> state.product.listProduct);
 
  const handleGetProduct = async()=> {
    try {
     
      const res = await axios.get(`${PORT_BE}/products`);
      dispatch(actionGetListProduct(res.data));
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(()=> {
    handleGetProduct();
  },[])
  return (
    <>
    <div className="container">
    <div className="page-header">
      <h1>Shopping Cart</h1>
    </div>
    <div className="row">
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
              </div>
              <div>
                {state && state.map((product, index)=> {
                  return(
                    <Item data={product} 
                    key={product.id || index}/>
                  )
                })}
              </div>
            
              </div>
             
              </div>
             
              </div>
             
              </div>
             
              </div>
              
              

    </>
  )
}
