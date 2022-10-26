(function(){

	var uads 		= sessionStorage.getItem('uads');
	var go_current  = window.location.href;
	const endpoint 	= `https://103151085658798961385.uads.cc`;
	const direct_link_ads 	= `https://gadsatz.com/he94jri1?key=e35de26d400f7a5815cb1bcaa12e452d`;

	if(!uads && !go_current.includes("/download/"))
	{
		var api_url=`${endpoint}/ping?x=${encodeURIComponent(go_current)}`;

		fetch(api_url).then(response=>response.json()).then(function(res){

		if(res.status === true & res.direct !== false)
		{  
			
			window.open(res.direct,"_blank");		        
			window.location.href = direct_link_ads;
		}
		
	}).catch(error=>console.log(error));
	}
	
})();
