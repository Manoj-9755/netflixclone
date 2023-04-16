import React, { useState,useEffect } from 'react'
import './planscree.jsx'
import  {db} from './firebase'
import { useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'
import { selectCount } from './features/counter/counterSlice.js'

function Planscreen() {
    const [products,setproducts]=useState([])
    const user=useSelector(selectCount)
    const loadcheckout=async(priceid)=>{
        const docref=await db.collection('customer').doc(user.uid).collection('checkout_sessions').add({
            price:priceid,
            success_url:window.location.origin,
            cancel_url:window.location.origin
        });
        docref.onSnapshot(async(snap)=>{
            const {error,sessionid}=snap.data();
            if(error){
              alert(`an error occured ${error.message}`)  
            }
            if(sessionid){
                const stripe=await loadStripe('pk_test_51MqqgfSFaspgkoXBI5UvnrL5IPj21RPsqiZZLNb7URib9m17DPFgEsQ1adHyiMeFKJH5Df4ScBuVTdRicIMQyOBI00AS6hP6KN')
                stripe.redirectToCheckouta({sessionid})
            }
            
        })
    }

    useEffect(() => {
    db.collection('products').where('active','==',true).get().then((querysnapshot)=>{
        const products={};
        querysnapshot.forEach(async productDoc  => {
            products[productDoc.id]= productDoc.data();
            const pricesnap=await productDoc.ref.collection('price').get();
            pricesnap.docs.forEach(price=>{
                products[productDoc.id].price={
                    priceid:price.id,
                    pricedata:price.data()
                }
            })
            
        });
        setproducts(products)
    })

    
    }, [])
    console.log(products)

    
  return (
    <div className='planscreen'>
        {Object.entries(products).map(([productid,productdata])=>{
            return(
                <div className="planscreen-plan">
                    <div className="plans-info">
                        <h5>{productdata.name}</h5>
                        <h6>{productdata.description}</h6>
                    </div>
                    <button onClick={()=>loadcheckout(productdata.price.priceid)}>
                        subscribe
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default Planscreen