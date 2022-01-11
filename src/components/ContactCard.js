import React from "react";

const ContactCard = (props) => {
   function myalert(){
        alert("testing");
    }
  return (
    <div className="box">
      <div className="ui cards">
        <div className="card">
          <div className="header1">
          <h2 className="test">Name:</h2>
          <h5 className="txt1">{props.contact.name}</h5>
          </div>
          <h2 className="test">City</h2>
         <h5 className="txt2">{props.contact.city}</h5> 
          <div class="ui two buttons">
        <div class="ui basic green button" onClick={myalert}>Approve</div>
        <div class="ui basic red button" onClick={myalert}>Decline</div>
      </div>
    </div>
        </div>
        <div class="extra content">
   
      </div> 
    </div>
  );
};

export default ContactCard;
