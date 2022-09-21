//hatdoooooooooooooooooooog

import React, {useState, useEffect} from "react";
import ItemsTable from "../components/ItemsTable";

//get values from local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('items');
  if(data){
    return JSON.parse(data);
  }else{
    return []
  }
}

const Items = () => {
  //array of items
  const [items, setItem]=useState(getDatafromLS);
  //input field states
  const [itemName, setItemName]=useState('');
  const [price, setPrice]=useState('');
  const [stocks, setStocks]=useState('');

  // create on submit
  const handleAddItems = (e)=>{
    e.preventDefault();
    //create
    let item={
      itemName,
      price,
      stocks,
    }
    setItem([...items, item]);
    setItemName('');
    setPrice('');
    setStocks('');
  }

   //save to table
   useEffect(()=>{
    localStorage.setItem('items', JSON.stringify(items));
  },[items])

  //deletion
  const deleteItem=(itemName)=>{
    // alert(index);
    setItem(items.filter(i => i.itemName !== itemName));
  }


  return ( 
    <div className="wrapper">
      <h1 className="text-center">ALL ITEMS</h1>
      <p className="text-center">These are all the items sold in Jan's shop, their prices, and quantity. </p>
      <div className="main">

        <div className="form-container">
          <form className="form-group" action="" autoComplete="off" onSubmit={handleAddItems}>
            <label htmlFor="">Item</label>
            <input className="form-control" type="text" required onChange={(e)=>setItemName(e.target.value) } value={itemName} /> <br />
            <label htmlFor="">Price</label>
            <input className="form-control" type="text" required onChange={(e)=>setPrice(e.target.value) } value={price}/> <br />
            <label htmlFor="">Stocks</label>
            <input className="form-control" type="text" required onChange={(e)=>setStocks(e.target.value) } value={stocks}/> <br />
            <button className="add-btn" type="submit"> Add item</button>
          </form>
        </div>

        <div className="view-container">
          {items.length > 0 && <>
            <div className="table-responsive">
              <table className="table">
              <thead className="table-header">
                <tr>
                  <th className="text-center">Item</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Stocks</th>
                  <th className="text-center">Remove</th>
                </tr>
              </thead> 
              <tbody className="text-center">
                <ItemsTable items={items} deleteItem={deleteItem}/>
              </tbody>
              </table>
              
            </div>
          </>}
          <div className="view-container">
          {items.length < 1 && <div className="when-empty text-center">No items added in inventory yet</div>}
            
          </div>
        </div>
      </div>

    </div>
  );
}
 
export default Items;