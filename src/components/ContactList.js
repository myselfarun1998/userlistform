import React from "react";
import ContactCard from "./ContactCard";


const contactList = (props) => {
  const renderList = props.contact.map((contact) => {
    return (
      <ContactCard contact={contact}/>
    );
  });
  return (
    <div ui celled list>
      {renderList}
    </div>
  );
};

export default contactList;
