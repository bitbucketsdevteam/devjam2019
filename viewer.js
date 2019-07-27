var token = "";
var tuid = "";

var twitch = window.Twitch.ext;



function setAuth(token) {
  Object.keys(requests).forEach((req) => {
      twitch.rig.log('Setting auth headers');
      requests[req].headers = { 'Authorization': 'Bearer ' + token }
  });
}

twitch.onContext(function(context) {
  twitch.rig.log(context);
});

twitch.onAuthorized(function(auth) {
  // save our credentials
  token = auth.token;
  tuid = auth.userId;


  setAuth(token);
});

Twitch.ext.bits.getProducts().then(function(products) {
  console.log(products); // [ { sku: 'abc123', cost: { type: 'bits', amount: '10' } } ]
});

function buy(buttonSku) {
  let productSku = buttonSku;
  Twitch.ext.bits.useBits(productSku);
};

//begin my code


//function to 1) execute purchase ['buy' function already created by twitch] 2)update values for overlays ['updateBucket' function needs to be written]; productSku used when buy function is exectued will simply be the number of bits being used, which corresponds to the product's price as well. The bit redemption system from twitch's end will not know or care which value in the overlay is being updated, the productSku will be the same no matter what. the only difference will be in the updateBucket function, which I don't know how to build because I only know how to make static pages right now, haha!-->
	
function giveBits(buttonId, amount) {
	buy(amount);
	updateBucket(buttonId,amount);
};
//slider updates the value on all buttons simultaneously. This is meant to be a visual cue as to how it works so we don't have to waste panel space with that exposition.
function updateButtons() {
	button.value=chooser.value;
};

