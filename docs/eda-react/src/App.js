import React from "react";
import "./App.css";
import Footer from "./components/footer";
import CookieNotification from "./components/cookie-notification";
import EDA from "./components/event-driven-architecture";
function App() {
  return (
    <div>
      <EDA></EDA>
      <Footer></Footer>
      <CookieNotification></CookieNotification>
    </div>
  );
}

export default App;
