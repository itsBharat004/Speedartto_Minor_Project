import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Couple Art",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Single Person Art",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Kids Art",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Pencil Art",
    },
  ]

  return (
    <>
      <div className='category'>
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

export default Categories
