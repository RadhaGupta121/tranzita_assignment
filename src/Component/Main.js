import {useEffect, useState} from 'react'
import Shimmer from './Shimmer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  let[isEditing,setEditing]=useState(false);
  let[prevTitle,setTitle]=useState(props.title);
  let [prevUserId,setPrevUserId]=useState(props.userid);
  const Delete = (id) => {
    props.onDelete(id);
  };
  const Update=(id)=>{
    setEditing(!isEditing);
    props.onUpdate(id);
  }

  return (
    <Card style={{ width: '18rem',border:"2px solid black",padding:"1rem",backgroundColor:"lavender" }}>
      <Card.Body>
        <Card.Title>{isEditing?<textarea value={prevTitle} onChange={(e)=>setTitle(e.target.value)}/>:prevTitle}</Card.Title>
        <Card.Text>
         {isEditing?<textarea value={prevUserId} onChange={(e)=>setPrevUserId(e.target.value)}/>:prevUserId}
        </Card.Text>
        <Button onClick={()=>Update(props.id)} className='button update' variant="">{isEditing?'Save':'Update'}</Button>
        <Button onClick={() => Delete(props.id)} className='button delete' variant="">Delete</Button>
        
      </Card.Body>
    </Card>
  );
}


const Main=()=>{
     let[data,setdata]=useState([]);
     
     useEffect(()=>{
      getData();
  },[])

  const getData=async()=>{
     const data=await fetch("https://jsonplaceholder.typicode.com/todos");
     const json=await data.json();
     console.log(json);
     setdata(json);
   }

const handleDelete=(id)=>{
  setdata((prev)=>(prev.filter((item)=>item.id!==id)))
  console.log(data);
  console.log(id);
}
const handleUpdate=(id)=>{
  console.log('update');
}
const handleAdd=(id)=>{
  const newCard={
     id:Date.now(),
     title:'Add title',
     completed:false,
     userid:Date.now()
  };
  setdata((prev)=>[newCard,...prev])
  console.log("unshifted");
  console.log(data.length);
 
}
   
    return data.length==0?(<Shimmer/>): (
        <>
        
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap", gap:"5rem"}}>
       <div style={{width:"18rem", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Button className='add button' onClick={handleAdd}><i className='fa fa-plus fa-2x'></i></Button>
        
       
        </div> 
        {
        data.map((item) => (
       
          <MyCard key={item.id} userid={item.userId} id={item.id} title={item.title}
           onDelete={handleDelete} onUpdate={handleUpdate} />
        ))
        }
        </div>
        </>
    )
     }

export default Main;