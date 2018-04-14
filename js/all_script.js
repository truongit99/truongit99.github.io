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
	strHtml += $san_pham[aIndex].detail;
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
document.getElementById("section").innerHTML='<div id="product_menu"><br><div id="email" style="text-align: center"><form action="mailto:lamlon1999@gmail.com" method="post" enctype="text/plain"><input class="btn btn-outline-primary" type="submit" value="Send e-mail to us"></form></div><br><div id="lien_he_button"><input class="lien_he_button" type="button" value="Store 1" onClick="show1()"/><center style="padding-top: 10px; font-size: 20px; color: deeppink;">STORE 1</center><br><br><input class="lien_he_button" type="button" value="Store 2" onClick="show2()"/><center style="padding-top: 10px; font-size: 20px; color: deeppink;">STORE 2</center><br></div><div id="lien_he_map"><div id="lien_he_map_1"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9307701538314!2d105.81663121457862!3d21.035455885994697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d6eedb3b9%3A0xe096499f4f1f76be!2sAPTECH!5e0!3m2!1svi!2s!4v1521376416883" width="100%" height="290px" frameborder="0" style="border:0" ></iframe></div><div id="lien_he_map_2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2150296714467!2d105.84092161457755!3d20.98401588602264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac428c3336e5%3A0xb7d4993d5b02357e!2sAptech+Computer+Education!5e0!3m2!1svi!2s!4v1521376869766" width="100%" height="290px" frameborder="0" style="border:0" allowfullscreen></iframe></div></div></div><div id="product_content"></div>';
	document.getElementById("contact_us").style.display = "none";
}

function show1() //show map
{
	"use strict";
	document.getElementById("lien_he_map_1").style.display = "block";
	document.getElementById("lien_he_map_2").style.display = "none";
}

function show2() //show map
{
	"use strict";
	document.getElementById("lien_he_map_1").style.display = "none";
	document.getElementById("lien_he_map_2").style.display = "block";
}
 
function delete_content() //liek dat function name
		{
			"use strict";
			document.getElementById("product_content").innerHTML='';
			document.getElementById("contact_us").style.display = "none";
		}

function magnify(imgID, zoom) {
	"use strict";
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

