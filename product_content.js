// JavaScript Document
 	var $san_pham=[{Name: "<h1 style='color: black;'>Kính xịn</h1>", Img:'<img src="Cartier ESW00039_27.5m.png"/>', type:"A"},
			  {Name: "<h1 style='color: black;'>Kính đểu</h1>", Img:'<img src="Cartier ESW00050_25m.png"/>', type:"B"},
			  {Name: "<h1 style='color: black;'>Kính cực xịn</h1>", Img:'<img src="Cartier ESW00093_26.5m.png"/>', type:"C"}
			  ];

function click(element){
	alert(element.id);
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
			 //alert($(this).attr('id'));
			 //alert($(this).text());
			 var strHtml='<ul id="list1">';
			 var strID1="";
			 var i;
			 var strID=$(this).attr('id');
			 for(i=0; i<$san_pham.length; i++)
			 {
				if(strID==$san_pham[i].type)
					{
						strID1="1";
						strID1 +=i;
						strHtml += '<div onclick="Click(this)" id="';
						strHtml += strID1;	
						strHtml +=	'">';
						strHtml += $san_pham[i].Name;
						strHtml	+= '</div>';
						strHtml += '<div onclick="Click(this)" id="';
						strHtml += strID1;	
						strHtml +=	'"><a href="#"><span>';
						strHtml += $san_pham[i].Img;
						strHtml	+= '</span></a></div>';
					} 
			}	
			 strHtml += '</ul>';
			 document.getElementById("san_pham").innerHTML=strHtml;
			 
			 }); 
			 
			  
	  });
 }) (jQuery);