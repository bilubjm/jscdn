function autoRelated1(dataz) {
			    var outz = dataz[1];		    

			    for (i = 0; i < outz.length; i++) {
			    	var kwz = outz[i];
			        domz += `<aside><img alt="${kwz}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kwz)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /><small>title: <i>${kwz}</i></small><h3><a href="${baseUrl}search?q=${encodeURIComponent(kwz)}">${kwz}</a></h3><p align="justify"><b>${kwz}</b> is one of best result for ${postTitle1}. Everything in here is for references perpose only. Feel free to save and bookmark ${kwz}</p><br/><a href="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kwz)}" target="_blank" class="button">Download</a></aside>`;
			    }
			}
