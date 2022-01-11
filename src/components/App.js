import React, { useState } from "react";
import ContactCard from "./ContactCard";
import Header from "./Header";
import ContactList from "./ContactList";
import AddConatct from "./AddContact";

const App = () => {
  const [contact, setContact] = useState([]);
const Addnow =(contactus)=>{
  console.log(contact)
  setContact([contactus])
}





  // const contact =[
  //   {
  //     id:"1",
  //     name:"ram",
  //     city:"chennai"

  //   },
  //   {
  //     id:"1",
  //     name:"ram",
  //     city:"chennai"

  //   },
  // ]

  return (
    <div className="ui container">
      <Header />
      <AddConatct Addnow={Addnow} />
      <ContactList contact={contact} />
    </div>
  );
};

export default App;
