// JavaScript Document
 	var $san_pham=[{Name: '<div class="sanpham_name">BENTLEY B-001 WG</div>', Img:'<img class="sanpham_image" src="Bentley B-				001 WG_321.5m.jpg"/>', type:"bentley_gong"},
				   {Name: '<div class="sanpham_name">BENTLEY-18K-B014- RG</div>', Img:'<img class="sanpham_image" src="BENTLEY-18K-B014- RG_196m.jpg"/>', type:"bentley_gong"}
			  ];

(function ($){
	 "use strict";
     $(document).ready(function() {
         $('#list ul li').click(function(){
			 var strHtml='<div class="every_product">';
			 var strID1="";
			 var i;
			 var strID=$(this).attr('id');
			 for(i=0; i<$san_pham.length; i++)
			 {
				if(strID===$san_pham[i].type)
					{
						strHtml += strID1;
						strHtml += $san_pham[i].Name;
						strHtml += $san_pham[i].Img;
					} 
			}	
			 strHtml += '</div>';
			 document.getElementById("san_pham").innerHTML=strHtml;
			 });	  
	  });
 }) (jQuery);