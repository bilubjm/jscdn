  var links = [
    'https://gadsatz.com/he94jri1?key=e35de26d400f7a5815cb1bcaa12e452d',
    'https://gadsatz.com/rypvyt8i?key=01d69f6788d70331ea14e39a822a115e'

  ];
   var max = (links.length)
    	$(document).ready(function()
    	{
    	  $('body').addClass('arilia_ads');
    	});

    	$(document).on('click','.arilia_ads',function(e)
    	{
    	    $(this).removeClass('arilia_ads');
    	    window.open(links[Math.floor(Math.random()*max)], '_blank');
    	});
