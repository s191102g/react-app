import React, { useEffect, useState } from "react";
import "./prd.css";
import { useDispatch, useSelector } from "react-redux";
import productApi from "./api/productApi";
import { setList } from "./store/productSlice";
import { Link,Outlet } from "react-router-dom";

export default function Product() {
  const [change, setChange] = useState(true)
  const dispatch = useDispatch();
  const listPrd = useSelector((state) => state.product);
  useEffect(() => {
    const getList = async () => {
      let res = await productApi.getProduct();
      let arr = await res.reverse()
      dispatch(setList(arr));
    };
    getList();
  },[change]);

  const handleAddPrd = () => {
    let popup = document.querySelector(".popup");
    let model = document.querySelector(".model");
    popup.style.display = "block";
    model.style.display = "block";
  };
  const closeModelAdd = () => {
    let popup = document.querySelector(".popup");
    let model = document.querySelector(".model");
    popup.style.display = "none";
    model.style.display = "none";
  };

  const handleDel = async (id) =>{
      let res =  await productApi.removeProduct(id);
      setChange(change => !change)
      alert(res.pp)
  }
  const AddnewPrd = async () =>{
        let namePrd = document.querySelector('#namePrd');
        let pricePrd = document.querySelector('#pricePrd');
        let datePrd = document.querySelector('#datePrd');
        let catePrd = document.querySelector('#catePrd');
        let imgPrd = document.querySelector('#imgPrd');
      
       
        let formData = {
            name_prd: namePrd.value,
            price: pricePrd.value,
            img: imgPrd.value,
            date_prd: datePrd.value,
            idCT: Number(catePrd.value)
        };

      let res = await  productApi.addProduct(formData);
      if (res) {
        closeModelAdd() 
        setChange(change => !change)
        alert(res.pp)
      }
  }
  return (
    <div className="main">
      <div className="popup"> </div>
      <div className="model">
        <i className="fas fa-times btnclose1" onClick={closeModelAdd}></i>
        <div className="box-add">
          <form id="form-add" onSubmit={e=> e.preventDefault()} >
            <label htmlFor="">T??n h??ng h??a</label>
            <input type="text" name="" id="namePrd" />
            <label htmlFor="">Gi??</label>
            <input type="text" name="" id="pricePrd" />
            <label htmlFor="">Ng??y Th??m</label>
            <input type="date" name="" id="datePrd" />
            <label htmlFor="">Lo???i</label>
            <select name="" id="catePrd">
              <option value="1">??O</option>
              <option value="2">QU???N</option>
              <option value="3">PH??? KI???N</option>
            </select>
            <label htmlFor="">H??nh</label>
            <input type="text" name="" id="imgPrd" />

            <button id="addPrd" onClick={AddnewPrd} >Th??m m???i</button>
          </form>
        </div>
      </div>
      
      <div className="main-top">
        <span>QU???N TR??? H??NG H??A</span>
      </div>
      <button id="btn-add" onClick={handleAddPrd}>
        Th??m
      </button>
      <div className="setting">
        <div className="main-setting">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">T??N H??NG H??A</th>
                <th scope="col">GI??</th>
                <th scope="col">H??NH ???NH</th>
                <th scope="col">LO???I</th>
                <th scope="col">CH???C N??NG</th>
              </tr>
            </thead>
            <tbody>
              {listPrd == undefined
                ? false
                : listPrd.map((e, index) => {
                  let cate = null
                            if (e.idCT == 1) {
                              cate = "??O"
                              } else if (e.idCT == 2) {
                                cate = "QU???N"
                              } else {
                                cate = "PH??? KI???N"
                              }
                    return (
                     
                      <tr key={index}>
                        <td scope="row">{e.id} </td>
                        <td>{e.name_prd}</td>

                        <td>{e.price}</td>
                        <td className="td-img">{<img src={e.img} alt="" />}</td>
                        <td>{ 
                          cate
                              }
                          </td>
                        <td className="td-st">
                        <Link to={`/fix/${e.id}`}>
                        <button
                            className="btnFix"
                           
                          >
                            S???A
                          </button>
                        </Link>
                          
                          <button
                            className="btnDel"
                            onClick={() => {handleDel(e.id)}}
                          >
                            X??A
                          </button>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
