function autoRelatedLabel(datala) {
    var olla = datala[1];         

    for (i = 0; i < olla.length; i++) {
        var kwl = olla[i];
        domla += `<aside><img alt="${kwl}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kwl)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /><small>title: <i>${kwl}</i></small><h3><a href="${baseUrl}search?q=${encodeURIComponent(kwl)}">${kwl}</a></h3><p align="justify"><b>${kwl}</b> is one of best result for ${postTitle}. Everything in here is for references perpose only. Feel free to save and bookmark ${kwl}</p><br/><a href="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kwl)}" target="_blank" class="button">Download</a></aside>`;
    }
}
