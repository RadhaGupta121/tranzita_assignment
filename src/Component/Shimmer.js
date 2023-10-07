import React from 'react'

const ShimmerCard=()=>{
    return(
        <>
          <div  style={{padding:"14px",paddingBottom:"12px"}}>
              <div style={{display:"flex",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
                 <div  style={{padding:"22px",height:"12.5rem",width:"15rem",backgroundColor:"grey",margin:"2rem", borderRadius:"50%"}}> </div>
                 <div  style={{padding:"22px",height:"12.5rem",width:"15rem",backgroundColor:"grey",margin:"2rem"}}> </div>
                 <div  style={{padding:"22px",height:"12.5rem",width:"15rem",backgroundColor:"grey",margin:"2rem"}}> </div>
                 <div  style={{padding:"22px",height:"12.5rem",width:"15rem",backgroundColor:"grey",margin:"2rem"}}> </div> 
                 
              </div>
              
           
            </div>
        </>
    )
}

const Shimmer = () => {
    const emptyArray = Array.from({ length: 10 });

  return (
    <div>
          
         {emptyArray.map(()=>{
            return(
                <div >
                  <ShimmerCard />
                </div>
            )
         })}
    </div>
  )
}

export default Shimmer;