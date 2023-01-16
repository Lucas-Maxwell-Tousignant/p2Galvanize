import React from "react";
import HeaderComponent from "./Header"

export function Header() {
  return (
      <header>
      <nav>
          <ul>
              <li><a href="">App</a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
          </ul>
      </nav>
  </header>
)
}

export function Nav() {
  return(
    <>
    </>
  )
}

function App() {
  
  
  return (
    <HeaderComponent />
  );
}

export default App;
