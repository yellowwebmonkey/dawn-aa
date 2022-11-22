(function() {
  var cartContainer = document.getElementById("CartContainer");
  var checkouts = document.getElementsByName('checkout')
  var checkout = checkouts[checkouts.length - 1];

  var idme = `<div class="idme">
    <div class="idme-shopify">
      <p class='idme-btn-affinity'>Hospital Employees, Medical Providers, Military, Nurses, and First Responders receive 15% off</p>
      <a class="idme-btn-unify" href="https://discountify.id.me/oauth/checkpoint/authentically-american-llc" >
        <img src="https://s3.amazonaws.com/idme/developer/idme-buttons/assets/img/verify.svg" alt="ID.me" style="height:42px"/>
      </a>
    </div>
  </div>`;


  document.location.pathname === "/cart" && checkout && checkout.insertAdjacentHTML("afterend", idme);
})();

