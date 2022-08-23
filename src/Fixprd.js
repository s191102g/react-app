import React, { useEffect, useState } from "react";
import { useParams,useNavigate  } from "react-router-dom";
import productApi from "./api/productApi";
import "./fix.css";
export default function Fixprd() {
  const navigate = useNavigate();
  const params = useParams();
  const [id, setID] = useState(null);
  const [name_prd, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [date_prd, setDate] = useState(null);
  const [img, setImg] = useState(null);
  const [idCT, setIDCT] = useState(null);
  useEffect(() => {
    const getPrd = async () => {
      let res = await productApi.getOneProduct(params.prdID);
      setID(res.id)
      setName(res.name_prd)
      setDate(res.date_prd)
      setPrice(res.price)
      setIDCT(res.idCT)
      setImg(res.img)
    };
    getPrd();
  }, []);

  // const setImg = (src) =>{
  //   let img = document.querySelector('img')
  //   img.src = src
  // }
  const handleFix = async () =>{
    let namePrd = document.querySelector('#FixnamePrd');
    let pricePrd = document.querySelector('#FixpricePrd');
    let datePrd = document.querySelector('#FixdatePrd');
    let catePrd = document.querySelector('#FixcatePrd');
    let imgPrd = document.querySelector('#FiximgPrd');
    let idPrd = document.querySelector('#idPrd');
        
    let formData = {
      id:idPrd.value,
      data:{
        name_prd: namePrd.value,
        price: pricePrd.value,
        img: imgPrd.value,
        date_prd: datePrd.value,
        idCT: Number(catePrd.value) 
      }
        
    };

    let res =  await productApi.fixProduct(formData)
    if (res) {
       alert(res.pp)
       navigate("/product");
    }
  
  }
  return (
    <div className="fixCtn">
      <div className="model2">
        <div className="box-add2">
          <div className="side1">
            <label htmlFor="">ID</label>
            <input type="text" name="" id="idPrd" readOnly value={id} />
            <label htmlFor="">Tên hàng hóa</label>
            <input type="text" name="" id="FixnamePrd" onChange={(e)=>{setName(e.target.value)}}  value={name_prd}/>
            <label htmlFor="">Giá</label>
            <input type="text" name="" id="FixpricePrd" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            <label htmlFor="">Ngày Thêm</label>
            <input type="date" name="" id="FixdatePrd" onChange={(e)=>{setDate(e.target.value)}} value={date_prd}/>
            <label htmlFor="">Loại</label>
            <select name="" id="FixcatePrd" onChange={(e)=>{setIDCT(e.target.value)}}>
              <option value="1">ÁO</option>
              <option value="2">QUẦN</option>
              <option value="3">PHỤ KIỆN</option>
            </select>
          </div>
          <div className="side2">
            
            <label htmlFor="">Hình</label>
            <input type="texts" name="" id="FiximgPrd" placeholder="url" onChange={(e)=>{setImg(e.target.value)}} value={img} />
            <img src={img} alt=""  />
          </div>

         
        </div>
        <button onClick={handleFix} id="FixPrd">Sửa</button>
      </div>
    </div>
  );
}
