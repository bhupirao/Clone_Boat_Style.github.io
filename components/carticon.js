function slidebox(){
    return `
    
    <div id="not_main">

      <button id="but2"><i class="fa-solid fa-xmark"></i></button>
      <div class="ribbon">Free Shipping sitewide | <b>Cash On Delivery</b> available for order value upto <b>₹3000</b></div>
      <div id="not_main_scroll"></div>
      <div id="not_main_footer">
        <div id="discount_div">
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/coupon-code_1.png?v=1650373547">
          <input id="discount" placeholder="Discount Code">
        </div>
        <div id="free">
          <h3>Shipping:</h3>
          <h3>FREE</h3>
        </div>
        <div id="total">
          <h3>Total:</h3>
          <h3 id="amount"></h3>
        </div>
        <div id="card">
          <button id="upi">Pay Via UPI/COD</button>
         <a href="checkout.html"> <button id="atm">Pay Via Card</button></a>
        </div>
      </div>
  </div>
`
}
export {slidebox};