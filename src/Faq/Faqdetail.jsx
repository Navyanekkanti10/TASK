import React from 'react'
import Faq from './Faq'
import Faqdata from './Faqdata'

function Faqdetail(){
    return (
        <div>
           {
            Faqdata.map(({id,que,detail})=>{
                return <Faq id={id} que={que} detail={detail}/>
            })
           } 
        </div>
    )
}

export default Faqdetail