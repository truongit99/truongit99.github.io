//script của trang sản phẩm 			 
function noidungsanpham(element){
	"use strict";
	//alert(element.id);
	var strHtml="";
	var strID=element.id;
	var aIndex= strID.substr(1);
	strHtml += $san_pham[aIndex].name;
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
						strHtml += $san_pham[i].name;
						strHtml +=	'</a></li>';
					} 
			}	
			 strHtml += '</ul></nav>';
			 document.getElementById("product_menu").innerHTML=strHtml;
			 });
	  });
 })(jQuery);
 
// script của trang liên hệ tự viết hehe


function lien_he()
{
	"use strict";
document.getElementById("section").innerHTML='<div id="product_menu"><div id="lien_he_button"><input class="lien_he_button" type="button" value="Cửa hàng 1" onClick="show1()"/><center style="padding-top: 10px; font-size: 20px; color: deeppink;">CỬA HÀNG SỐ 1</center><br><br><input class="lien_he_button" type="button" value="Cửa hàng 2" onClick="show2()"/><center style="padding-top: 10px; font-size: 20px; color: deeppink;">CỬA HÀNG SỐ 2</center></div><div id="lien_he_map"><div id="lien_he_map_1"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9307701538314!2d105.81663121457862!3d21.035455885994697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d6eedb3b9%3A0xe096499f4f1f76be!2sAPTECH!5e0!3m2!1svi!2s!4v1521376416883" width="100%" height="290px" frameborder="0" style="border:0" ></iframe></div><div id="lien_he_map_2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2150296714467!2d105.84092161457755!3d20.98401588602264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac428c3336e5%3A0xb7d4993d5b02357e!2sAptech+Computer+Education!5e0!3m2!1svi!2s!4v1521376869766" width="100%" height="290px" frameborder="0" style="border:0" allowfullscreen></iframe></div></div></div><div id="product_content"></div>';
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
 
function xoa_noidung()
		{
			document.getElementById("product_content").innerHTML='';
		}