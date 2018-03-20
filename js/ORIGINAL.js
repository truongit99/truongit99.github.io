// JavaScript Document
 	var $san_pham=[{branches: 'CARTIER'}, Name: '<div class="sanpham_name">CARTIER-18K-T8120165</div>', Img:'<img class="sanpham_image" src="cartier/gong/CARTIER-18K-T8120165_288m.jpg"/>', Price:'<div class="price">288.000.000<sup>đ</sup></div>', type:"cartier"},
				{branches: 'BENTLEY'}, Name: '<div class="sanpham_name">BCARTIER-18K-T8120166</div>', Img:'<img class="sanpham_image" src="cartier/gong/CARTIER-18K-T8120166_0m.jpg"/>', Price:'<div class="price">999.999.999<sup>đ</sup></div>', type:"cartier"},
				{Name: '<div class="sanpham_name">BENTLEY B-001 WG</div>', Img:'<img class="sanpham_image" src="bentley/gong/Bentley B-001 WG_321.5m.jpg"/>', Price:'<div class="price"> 321.500.000<sup>đ</sup></div>', type:"bentley"},
				{Name: '<div class="sanpham_name">BENTLEY-18K-B014- RG</div>', Img:'<img class="sanpham_image" src="bentley/gong/BENTLEY-18K-B014- RG_196m.jpg"/>', Price:'<div class="price"> 196.000.000<sup>đ</sup></div>', type:"bentley"}
			  ];

function click(element){
	var strHtml="";
	var i;
	var strID=element.id;
	var aIndex= strID.substr(1);
	strHtml+=$san_pham[aIndex].Img;
	document.getElementById("san_pham").innerHTML=strHtml;
	}

( function ($){
     $(document).ready(function() {
         $('#list li').click(function(){
			 var strHtml='<ul id="list">';
			 var strID1="";
			 var i;
			 var strID=$(this).attr('id');
			 for(i=0; i<$san_pham.length; i++)
			 {
				if(strID==$san_pham[i].type)
					{
						strHtml += '<li onClick="click()" id="';
						strHtml += $san_pham[i].type;
						strHtml +=	'"><a href="#">';
						strHtml += $san_pham[i].branches;
						strHtml	+= '</a></li>';
					} 
			}	
			 strHtml += '</ul>';
			 document.getElementById("menu_gong").innerHTML=strHtml;
			 
			 });      	
	  });
 }) (jQuery);