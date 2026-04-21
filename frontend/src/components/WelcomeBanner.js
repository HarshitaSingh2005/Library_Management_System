import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="banner d-flex justify-content-between align-items-center mb-4" style={{ color: "#462C7D",backgroundColor:"#C9BEFF",padding:30}}>
      <div>
        <h5 style={{ color: "#462C7D",fontSize:40,fontWeight:800}}>Hi, Librarian 👋</h5>
        <p className="text-muted" style={{ color: "#462C7D",backgroundColor:"#C9BEFF"}}>
          Ready to manage today's books and members?
        </p>
      </div>
      <div>📖</div>
    </div>
  );
};

export default WelcomeBanner;