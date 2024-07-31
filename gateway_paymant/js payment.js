const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e)
{
    e.preventDefault();

    let handler = PaystackPop.setup({
       Key: 'pk_test_6e4ec77a1a80a82e72f508b8ee44b826df8214c8', //replace with the public key 
       email : document.getElementById("email-address").Value,
       amount : document.getElementById("amount").Value *100,
       currency: "ZAR",
       ref : ''+math.floor((Math.random() * 1000000000 + 1)),

       onClose: function()
       {
        alert('window closed');
       },
       callback: function(response)
       {
        let message = 'Payment complete! Reference : response.reference';
        alert(message);
       }

    });
    handle.openIframe();
}