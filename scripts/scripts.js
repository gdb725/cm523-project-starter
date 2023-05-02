(function () {
  "use strict";

  var items = document.querySelectorAll(".journey li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

map = L.map('map').setView([42.3601, -71.0589], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
}).addTo(map);

marker = L.marker([42.3432517, -71.1227484]).addTo(map);
marker.bindPopup("<b>Boston General Store</b><br> 305 Harvard St Brookline, MA 02446").openPopup();

marker = L.marker([42.3432517, -71.1227484]).addTo(map);
marker.bindPopup("<b>VomFass</b><br> 305 Harvard St Brookline, MA 02446").openPopup();

marker = L.marker([42.381230, -71.174630]).addTo(map);
marker.bindPopup("<b>The Spirited Gourmet</b><br> 448 Common St Belmont, MA 02478").openPopup();

marker = L.marker([42.405910, -71.143150]).addTo(map);
marker.bindPopup("<b>Yes! Plastic Free!</b><br>212 Massachusetts Ave Arlington, MA 02474").openPopup();

marker = L.marker([42.362280, -71.080310]).addTo(map);
marker.bindPopup("<b>Brother's MarketPlace</b><br>1 Broadway St Cambridge, MA 02142").openPopup();

marker = L.marker([42.389690, -71.118190]).addTo(map);
marker.bindPopup("<b>Cambridge Naturals</b><br>23 White St Cambridge, MA 02140").openPopup();

marker = L.marker([42.366460, -71.100660]).addTo(map);
marker.bindPopup("<b>Cleenland</b><br>89A Norfolk St Cambridge, MA 02139").openPopup();

marker = L.marker([42.3942643, -71.1269294]).addTo(map);
marker.bindPopup("<b>Curio Spice</b><br>2265 Massachusetts Ave Cambridge, MA 02140").openPopup();

marker = L.marker([42.3939195, -71.1254085]).addTo(map);
marker.bindPopup("<b>Pemberton Market</b><br>2225 Massachusetts Ave Cambridge, MA 02140").openPopup();

marker = L.marker([42.3169359, -71.1057952]).addTo(map);
marker.bindPopup("<b>City Feed and Supply</b><br>66a Boylston St Jamaica Plain, MA 02130").openPopup();

marker = L.marker([42.4117184, -71.1218144]).addTo(map);
marker.bindPopup("<b>Trove Green Provisions</b><br>330 Boston Ave Medford, MA 02155").openPopup();

marker = L.marker([42.3527806, -71.2017338]).addTo(map);
marker.bindPopup("<b>Fulfilled Goods</b><br>612 Washington St Newton, MA 02458").openPopup();

marker = L.marker([42.3989548, -71.1091156]).addTo(map);
marker.bindPopup("<b>Neighborhood Produce</b><br>691 Broadway Somerville, MA 02145").openPopup();

marker = L.marker([42.31299, -71.074767]).addTo(map);
marker.bindPopup("<b>Supply Bulk Foods</b><br>196 Quincy St, Boston, MA 02122").openPopup();




