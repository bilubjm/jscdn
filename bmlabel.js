function autoRelatedLabel(data) {
    var outLabel = data[1];		    

    for (i = 0; i < outLabel.length; i++) {
    	var kwLabel = outLabel[i];
        domla += `<aside><img alt="${kwLabel}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kwLabel)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /><small>title: <i>${kwLabel}</i></small><h3><a href="${baseUrl}search?q=${encodeURIComponent(kwLabel)}">${kwLabel}</a></h3><p align="justify"><b>${kwLabel}</b> is one of best result for ${postTitle}. Everything in here is for references perpose only. Feel free to save and bookmark ${kwLabel}</p><br/><a href="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kwLabel)}" target="_blank" class="button">Download</a></aside>`;
    }
}
