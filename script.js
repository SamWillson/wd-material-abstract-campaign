$(document).ready(function(){
	windowResized();
	$(window).on('resize', windowResized)

	product_image_height = $(".product-image").height()
	product_image_width  = $(".product-image").width()


	$(".product-gallery").on("mouseover", function(){
		$(this).addClass("hover");
	})
	$(".product-gallery").on("mouseout", function(){
		$(this).removeClass("hover");
	})
	$(".product-image img").on("mouseover", function(){
		$(this).addClass("hover");
		$(this).addClass("mouse-pan");
	})
	$(".product-image img").on("mouseout", function(){
		$(this).removeClass("hover");
		$(this).css({
			"margin-top": "0px",
			"margin-left": "0px",
		});
		$(this).removeClass("mouse-pan");
	})
	$(document).on("mousemove", function(e){
		my = e.offsetY;
		mx = e.offsetX;
		$(".mouse-pan").css({
			"margin-top": my / 10,
			"margin-left": mx / 10,
		})
	})
})

function windowResized() {
	$(".product-height-fix").css({
		"margin-top": ($(window).height())/10 + "px"
	});
}