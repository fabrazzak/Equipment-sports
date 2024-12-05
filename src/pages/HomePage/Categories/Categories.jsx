import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../component/AuthProvider/AuthProvider';
import Product from '../Products/product';

const Categories = () => {
    const { products} = useContext(AuthContext)
    const [isAddData,setAddData]=useState(false)  
    const [activeBtn,setActiveBtn]=useState("all-product")

    

    const [showProducts,setShowProducts]=useState([...products])    

    let allCategory = [];
    products.forEach(product => {
        if (!allCategory.includes(product.categoryName)) {
            allCategory.push(product.categoryName);
        }
    });

  

   
    const categoryHandle=(category)=>{
        if(category==true){            
            setActiveBtn("all-product")            
         return   setShowProducts([...products].slice(0,6))

        }
        
      const filterProduct= products.filter(product => product.categoryName === category);
      setShowProducts(filterProduct)
      setAddData(true)
       console.log(filterProduct,"Hello world")
        setActiveBtn(category)
    }
    return (
        <div className='pb-8 md:pb-16 container mx-auto '>
            <h2 className='section-title text-center md:text-4xl text-2xl font-bold pb-6'>Categories</h2>
            <div className='grid md:grid-cols-4 mt-10 gap-10  relative mx-4 '>
                {/* categories  */}
                <div className='flex md:flex-col flex-wrap md:gap-5 gap-2 sticky top-0' >
                    <button onClick={() => categoryHandle(true)} className={`btn w-40 md:w-full  font-bold text-lg border-0 border-b-4  hover:border-b-0 ${activeBtn=="all-product" ? "border-[#dc3545]" : "border-[#146c43]"}    text-white bg-[#146c43] hover:bg-black `}>All Product</button>
                    {
                        allCategory.map((category, index) => <button key={index} onClick={() => categoryHandle(category)} className={`btn w-40 md:w-full  font-bold text-lg border-0 border-b-4 hover:border-b-0 ${activeBtn == category? "border-[#dc3545]" : "border-black"} text-white bg-[#146c43] hover:bg-[#146c43] `}>{category}</button>)
                    } 
                </div>
                {/* products  */}
                <div className='grid md:grid-cols-3 gap-7 col-span-3'>
                    {
                        !isAddData ? products.slice(0,6).map(product => <Product product={product} key={product.id}></Product>) 
                        :
                        showProducts.map(product => <Product product={product} key={product.id}></Product>) 
                    }

                </div>
            </div>           
        </div>
    );
};

export default Categories;