import { useContext, useState } from 'react';
import { categoryContext } from '../../store/CategoryProvider';
import ManufacturerForm from '../Form/Supplier/ManufacturerForm';
import Tier1 from '../Form/Supplier/Tier1';
import Tier2 from '../Form/Supplier/Tier2';
import VendorForm from '../Form/Supplier/VendorForm';
// import Layout from '../Layout/Layout';
import classes from './SupplierPage.module.css';
const SupplierPage = () => {

  const categoryItemsCtx=useContext(categoryContext);
  console.log(categoryItemsCtx)

  const [selected, setSelected]=useState('');
  const handleChange=(e)=>{
    console.log(e.target.value)
    setSelected(e.target.value)
  }

  if(selected==='manufacturer'){
    localStorage.setItem('manufacturer',selected)
  }
  else{
    localStorage.removeItem('manufacturer')
  }

  if(selected==='vendor'){
    localStorage.setItem('vendor',selected)
  }
  else{
    localStorage.removeItem('vendor')
  }

  if(selected==='tier1'){
    localStorage.setItem('tier1',selected)
  }
  else{
    localStorage.removeItem('tier1')
  }

  if(selected==='tier2'){
    localStorage.setItem('tier2',selected)
  }
  else{
    localStorage.removeItem('tier2')
  }

  return (
    <>
    
      <div className={classes.container}>
      <h3 style={{marginTop:"2px",
                textAlign: "center",
                fontWeight:"bold",
                border:"2px solid rgba(25, 24, 24, 0.153)",
                padding:"15px",
                backgroundColor: "rgb(181, 179, 177)",
                boxShadow: "0 15px 20px rgba(0,0,0,1)",}}>Create Supplier</h3>
         <div className={classes.supplier_page}>
           <div className={classes.supplier_label}>
              <label>Category*</label>
                    <select 
                    style={{ height:"30px", width:"10.5rem",borderRadius:"5px",borderStyle:"none"}}
                    value={selected} onChange={(e)=>handleChange(e)}>
                      <option>choose category</option>
                      {categoryItemsCtx.category.map((item,ind)=>{
                          return (
                          <option key={ind}>{item.value}</option>)
                      })}
                        
                    </select>
            </div>
            </div>
            <div className={classes.components}>
            {selected==="manufacturer"?<ManufacturerForm/>:""}
            {selected === "vendor"?<VendorForm/>:""}
            {selected === "tier1"?<Tier1/>:""}
            {selected === "tier2"?<Tier2/>:""}
            </div>
            </div>

    </>
  )
}

export default SupplierPage