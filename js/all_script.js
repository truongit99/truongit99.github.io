//script của trang sản phẩm 			 
function noidungsanpham(element){
	"use strict";
	//alert(element.id);
	var strHtml='';
	var strID=element.id;
	var aIndex= strID.substr(1);
	strHtml += $san_pham[aIndex].name_display;
	strHtml += $san_pham[aIndex].image;
	strHtml += $san_pham[aIndex].price;
	document.getElementById("product_content").innerHTML=strHtml;
	}

(function ($){
	"use strict";
     $(document).ready(function() {
         $('nav.secondary_header ul div a').click(function(){
			 var strHtml='<nav class ="vertical"><ul id="list">';
			 var strID1="";
			 var i;
			 var strID=$(this).attr('id');
			 for(i=0; i<$san_pham.length; i++)
			 {
				if(strID===$san_pham[i].brand)
					{
						strID1 = "1";
						strID1 += i;
						strHtml += '<li onclick="noidungsanpham(this)" id="';
						strHtml += strID1;
						strHtml += '"><a href="#">';
						strHtml += $san_pham[i].name_menu;
						strHtml +=	'</a></li>';
					} 
			}	
			 strHtml += '</ul></nav>';
			 document.getElementById("product_menu").innerHTML=strHtml;
			 });
	  });
 })(jQuery);
 
// script của trang ABOUT US tự viết hehe


function about_us()
{
	"use strict";
document.getElementById("section").innerHTML='<div id="product_menu"><div id="lien_he_button"><input class="lien_he_button" type="button" value="Cửa hàng 1" onClick="show1()"/><center style="padding-top: 10px; font-size: 20px; color: deeppink;">CỬA HÀNG SỐ 1</center><br><br><input class="lien_he_button" type="button" value="Cửa hàng 2" onClick="show2()"/><center style="padding-top: 10px; font-size: 20px; color: deeppink;">CỬA HÀNG SỐ 2</center><br></div><div id="lien_he_map"><div id="lien_he_map_1"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9307701538314!2d105.81663121457862!3d21.035455885994697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d6eedb3b9%3A0xe096499f4f1f76be!2sAPTECH!5e0!3m2!1svi!2s!4v1521376416883" width="100%" height="290px" frameborder="0" style="border:0" ></iframe></div><div id="lien_he_map_2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2150296714467!2d105.84092161457755!3d20.98401588602264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac428c3336e5%3A0xb7d4993d5b02357e!2sAptech+Computer+Education!5e0!3m2!1svi!2s!4v1521376869766" width="100%" height="290px" frameborder="0" style="border:0" allowfullscreen></iframe></div></div></div><div id="product_content"></div>';
	document.getElementById("contact_us").style.display = "none";
	document.getElementById("go_top").style.display = "none";
	
}

function show1()
{
	"use strict";
	document.getElementById("lien_he_map_1").style.display = "block";
	document.getElementById("lien_he_map_2").style.display = "none";
}

function show2()
{
	"use strict";
	document.getElementById("lien_he_map_1").style.display = "none";
	document.getElementById("lien_he_map_2").style.display = "block";
}
 
function delete_content()
		{
			"use strict";
			document.getElementById("product_content").innerHTML='';
			document.getElementById("contact_us").style.display = "none";
		}


// Script của modal box 4 cái ảnh ở cuối trang homepage

function modal_box(){
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    	}
	}
}


function modal_box1(){
// Get the modal
var modal = document.getElementById('myModal1');
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    	}
	}
}



function modal_box2(){
// Get the modal
var modal = document.getElementById('myModal2');
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    	}
	}
}



function modal_box3(){
// Get the modal
var modal = document.getElementById('myModal3');
// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn3.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    	}
	}
}

