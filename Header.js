import React from 'react'
import logo from '../images/logo.png'
import { FaSearch } from 'react-icons/fa';
function Header( {search} ) {

  const onSearch = (word)=>{
    search(word)
  }

  return (
   <header className="bg-warning py-3">
  <div className="container">
    <div className="row">
      <div className="col-2">
        <a href="/">
          <img src={logo} className="w-50" alt="الافلام" />
        </a>
      </div>{/* col-2  */}
      <div className="col-10">
        <div className="input-group mt-3">
          <span className="input-group-text" > <FaSearch/> </span>
          <input type="text" onChange={ (e)=> onSearch(e.target.value) } className="form-control form-control-lg" placeholder="ابحث عن اى فيلم" />
        </div>
      </div>
    </div>{/*  row */}
  </div>{/*  container */}
</header>
  )
}

export default Header