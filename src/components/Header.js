import React from "react";
// import Amazon_logos from "/images/Amazon_logos.png";

export default function Header(params) {
    return (
        <header>
            <div className="logo">logo</div>
            {/* <Amazon_logos></Amazon_logos> */}
            <div className="location">location</div>
            <div className="search">
                <select class="navSearchDropdown" id="searchDropdownBox" tabindex="0" title="Search in">
                    <option selected="selected" value="aps">
                        All Departments
                    </option>
                    <option value="artsCrafts">Arts &amp; Crafts</option>
                    <option value="automotive">Automotive</option>
                    <option value="babyProducts">Baby</option>
                    <option value="beauty">Beauty &amp; Personal Care</option>
                    <option value="stripbooks">Books</option>
                    <option value="computers">Computers</option>
                    <option value="digitalMusic">Digital Music</option>
                    <option value="electronics">Electronics</option>
                    <option value="digitalText">Kindle Store</option>
                    <option value="instantVideo">Prime Video</option>
                    <option value="fashionWomens">Women's Fashion</option>
                    <option value="fashionMens">Men's Fashion</option>
                    <option value="fashionGirls">Girls' Fashion</option>
                    <option value="fashionBoys">Boys' Fashion</option>
                    <option value="deals">Deals</option>
                    <option value="hpc">Health &amp; Household</option>
                    <option value="kitchen">Home &amp; Kitchen</option>
                    <option value="industrial">Industrial &amp; Scientific</option>
                    <option value="luggage">Luggage</option>
                    <option value="moviesTv">Movies &amp; TV</option>
                    <option value="music">Music, CDs &amp; Vinyl</option>
                    <option value="pets">Pet Supplies</option>
                    <option value="software">Software</option>
                    <option value="sporting">Sports &amp; Outdoors</option>
                    <option value="tools">Tools &amp; Home Improvement</option>
                    <option value="toysAndGames">Toys &amp; Games</option>
                    <option value="videogames">Video Games</option>
                </select>
                <input className="searchInput"></input>
                <button className="searchButton">search</button>
            </div>
            <div className="user">user</div>
            <div className="history">history</div>
            <div className="cart">cart</div>
        </header>
    );
}
