import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import './CSS/Product.css'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import Relatedproduct from '../Components/RelatedProducts/Relatedproduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id=== Number(productId))
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox />
      <Relatedproduct />
    </div>
  )
}

export default Product
