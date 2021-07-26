function submitFunction() {
  document.getElementById("checkout").submit();

}

function showCart(){
  var parameters = location.search.substring(1).split("&");
  var temp = parameters[0].split("=");
  l = unescape(temp[1]);
  var imgShowHtml = "";
  
  window.globalSize = l;
  
  if(l === 'cafeteira'){
    imgShowHtml += '<h5 style="color:white;margin-top:20px;" class="details">Cafeteira</h5><img class="imgCartPage" src="assets/img/cafeteira.png">';
  }else if (l === 'batedeira'){
    imgShowHtml += '<h5 style="color:white;margin-top:20px;" class="details">Batedeira</h5><img class="imgCartPage" src="assets/img/batedeira.png">';
  }else if(l === 'panela'){
    imgShowHtml += '<h5 style="color:white;margin-top:20px;" class="details">Panela</h5><img class="imgCartPage" src="assets/img/panela.png">';
  }else{
    imgShowHtml += '<h5 style="color:white;margin-top:20px;" class="details">Talher</h5><img class="imgCartPage" src="assets/img/talher.png">';
  }

  document.getElementById("cartPagePicture").innerHTML = imgShowHtml;

}
showCart();

var showPictureFrame = "";
var textPicture = l.toUpperCase();
showPictureFrame += '<h5 style="margin-top:20px;" class="details">'+textPicture+'</h5><img class="imgCartPage" src="assets/img/'+l+'.png">';
document.getElementById("cartPagePictureFrame").innerHTML = showPictureFrame;


function assignValues(){
  var inputFirstName = document.getElementById("customerFirstName");
  var inputLastName = document.getElementById("customerLastName");
  var inputEmailAddress = document.getElementById("customerEmailAddress");
  var inputPhoneNumber = document.getElementById("customerPhoneNumber");
  var inputSSN = document.getElementById("customerSSN");
  var inputBirthDate = document.getElementById("customerBirthDate");

  var inputShipAddress = document.getElementById("customerShipAddress");
  var inputProvincy = document.getElementById("customerProvincy");
  var inputAddressNumber = document.getElementById("customerAddressNumber");
  var inputReference = document.getElementById("customerReference");
  var inputCity = document.getElementById("customerCity");
  var inputUF = document.getElementById("customerUF");
  var inputZipCode = document.getElementById("customerZipCode");

  localStorage.setItem("customerFirstName", inputFirstName.value);
  localStorage.setItem("customerLastName", inputLastName.value);
  localStorage.setItem("customerEmailAddress", inputEmailAddress.value);
  localStorage.setItem("customerPhoneNumber", inputPhoneNumber.value);
  localStorage.setItem("customerSSN", inputSSN.value);
  localStorage.setItem("customerBirthDate", inputBirthDate.value);

  localStorage.setItem("customerShipAddress", inputShipAddress.value);
  localStorage.setItem("customerProvincy", inputProvincy.value);
  localStorage.setItem("customerAddressNumber", inputAddressNumber.value);
  localStorage.setItem("customerReference", inputReference.value);
  localStorage.setItem("customerCity", inputCity.value);
  localStorage.setItem("customerUF", inputUF.value);
  localStorage.setItem("customerZipCode", inputZipCode.value);

}