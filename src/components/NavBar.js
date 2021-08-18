import React from "react";

export default function NavBar(params) {
    return (
        <nav className="navBar">
            <div className="navAll">
                <button href={"#"} tabIndex="0">
                    {" "}
                    All
                </button>
            </div>
            <div className="todaysDeals">
                <button href={"#"} tabIndex="0">
                    {" "}
                    Today's Deals
                </button>
            </div>
            <div className="customerService">
                <button href={"#"} tabIndex="0">
                    {" "}
                    Customer Service
                </button>
            </div>
            <div className="buyAgain">
                <button href={"#"} tabIndex="0">
                    {" "}
                    Buy Again
                </button>
            </div>
            <div className="browsingHistory">
                <button href={"#"} tabIndex="0">
                    {" "}
                    Browsing History
                </button>
            </div>
            <div className="giftCards">
                <button href={"#"} tabIndex="0">
                    {" "}
                    Gift Cards
                </button>
            </div>
            <div className="registry">
                <button href={"#"} tabIndex="0">
                    {" "}
                    Registry
                </button>
            </div>
            <div className="sell">
                <button href={"#"} tabIndex="0">
                    {" "}
                    Sell
                </button>
            </div>
        </nav>
    );
}
