import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Ship-rocket",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Quicker",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Delhivery",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Xpress Bees",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Showdow Fax",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Blue Dart",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Shipping </h1>
          <h1>Partners </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Catg
