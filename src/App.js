import React from "react";
import API from "./axios";

import Nav from "./components/Nav"; 
import BookSearch from "./components/BookSearch"; 
import Caro from "./components/Container"; 
API.getBook().then(function(data){
  console.log(data)
})


function App() {
  return (
    <div>
       <Nav /> 
      <BookSearch />
      <Caro />
    </div>
  );
}

export default App;
