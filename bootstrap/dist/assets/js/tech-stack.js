function getQueryStringParameters() {
    var BuyNowLink = "";
    var isp = "";
    try {
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);

        if (params.get("isp") == 1) { // is single product
            isp = "?isp=1";
            BuyNowLink = "https://themeforest.net/item/able-pro-bootstrap-admin-dashboard-template/50170229";
        }
        else {
            BuyNowLink = "https://themeforest.net/item/able-pro-responsive-bootstrap-4-admin-template/19300403";
        }
    }
    catch (err) {
        BuyNowLink = "https://themeforest.net/item/able-pro-responsive-bootstrap-4-admin-template/19300403";
    }
    document.addEventListener('DOMContentLoaded', function () {
        var elem = document.querySelectorAll('.btn-buy');
        for (var j = 0; j < elem.length; j++) {
            elem[j].setAttribute('href', BuyNowLink)
        }
    })
    document.addEventListener('DOMContentLoaded', function () {
        var elem = document.querySelectorAll('.technology-block a');
        for (var j = 0; j < elem.length; j++) {
            var dattr = elem[j].getAttribute('href');
            elem[j].setAttribute('href', dattr + isp);
        }
    })
}

getQueryStringParameters();