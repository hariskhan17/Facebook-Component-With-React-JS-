import React from "react";
import FbImageLibrary from 'react-fb-image-grid'
import { useState, useEffect } from "react";
import "./App.css"

function Fbost() {
  const [product, setProducts] = useState([]);


  useEffect(function () {
    getApi();
  }, [])

  function getApi() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
  }

  if (!product.length) {
    return <img className="loa" src="https://i.pinimg.com/originals/dc/cc/84/dccc846959dffafa30a836dfacf9bab9.gif" />
  }
  return <>

    <div className="facebook-post">
      <div className="main-card">


        {product.map(function (item, index) {
          return <div className="product-card">
            <div className="card-post">
              <span className="profile-header">
                <img className="profile-image" />
                <div className="name">    <img className="selfim" src="https://www.thestatesman.com/wp-content/uploads/2020/07/jazz.jpg" /> <h4 className="selfn" >Haris Khan</h4>
                </div> <br />

                <p className="pt" >id{item.id}</p>
                <p>  {item.title}  </p>
              </span>

              <p> Rs.  {item.price}</p>
              <p> {item.description} </p>
              <FbImageLibrary className="img" images={item.images} />
              <div className="all-buttons">
                <hr />
                <button  ><i class="fa-regular fa-thumbs-up"></i> Like</button>
                <button ><i class="fa-regular fa-comment"></i> comment</button>
                <button ><i class="fa-regular fa-paper-plane"></i> send</button>
                <button ><i class="fa-solid fa-share"></i> share</button>
                <hr />
                <div>
                  <button className="btn" >Write Something</button>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  </>

}

export default Fbost;