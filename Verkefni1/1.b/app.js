
var svg = document.getElementById("fullLogo");
// Sæki allt svg-ið á HTML og set það í breytu.

var logoOnly = Snap.select('#logo');
var textOnly = Snap.select('#text');
// Tek svo svg teikningarnar í gegnum ID í HTML-inu og set þær í sitthvora breytur

var logoOnlyPath = logoOnly.node.getAttribute('d');
var textOnlyPath = textOnly.node.getAttribute('d');
// Fá svo líka path á svg.

var transformIntoText = function(){
	logoOnly.animate({ d: logoOnlyPath }, 1000, mina.easeout);  
}

var transformIntoLogo = function(){
	logoOnly.animate({ d: textOnlyPath }, 1000, mina.easein); 
}
// Bý svo til tvö föll sem taka inn destination(sem er path), lengd animation,
// og hvers konar animation, í þessu tilviki nota ég easein og easeout

svg.addEventListener('mouseover', function(e) {

  transformIntoLogo();
})

svg.addEventListener('mouseout', function(e) {

  transformIntoText();
})
// Svo tveir eventlisteners til þess að kveikja á animation.