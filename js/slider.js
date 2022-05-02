$(".slideWrap").bxSlider({
	nextText: '<i class="fa-solid fa-chevron-right"></i>',
	prevText: '<i class="fa-solid fa-chevron-left"></i>',
	auto: true,
	pause: 3000,
	autoHover: true,
});
//design
const design = () => {
	var page = $(".imgBox .page .view");
	var current = 0;
	var prev = $(".imgBox .btn_img .img_prev");
	var next = $(".img_next");
	var btns = $(".btn_bt a");
	var timer;
	timer = setInterval(event, 3000);
	function event() {
		if (current == 6) {
			current = 0;
		} //0,1,2 (3 은 없다)
		var next = current + 1;
		if (current == 2) {
			next = 0;
		}
		page.eq(current).css({ "z-index": 0 }).removeClass("right"); //eq0 번째 클래스 삭제, 깊이낮춤
		page.eq(current).children("img").removeClass("right");
		page.eq(current).stop().animate({ width: "0%" }, 1500);
		page.eq(next).css({ "z-index": 1 }).addClass("right");
		page.eq(next).children("img").addClass("right");
		page.eq(next).stop().animate({ width: "100%" }, 1510);
		current++;
		btns.removeClass("on");
		btns.eq(next).addClass("on");
	}
	$(".imgBox .page,.imgBox .btn_img,.btn_bt a").hover(
		function () {
			clearInterval(timer);
		},
		function () {
			timer = setInterval(event, 3000);
		},
	);
	next.click(function () {
		if (current == 6) current = 0;
		var next = current + 1;
		if (current == 2) next = 0;
		page.eq(current).css({ "z-index": 0, width: "100%" }).removeClass("right");
		page.eq(current).children("img").removeClass("right");
		page.eq(current).stop().animate({ width: "0%" }, 1500);
		page.eq(next).css({ "z-index": 1, width: 0 }).addClass("right");
		page.eq(next).children("img").addClass("right");
		page.eq(next).stop().animate({ width: "100%" }, 1550);
		current++;
		btns.removeClass("on");
		btns.eq(next).addClass("on");
		return false;
	});
	prev.click(function () {
		if (current < 0) current = 6;
		var next = current - 1;
		if (current == 0) next = 2;
		page.eq(current).css({ "z-index": 0, width: "100%" }).addClass("right");
		page.eq(current).children("img").addClass("right");
		page.eq(current).stop().animate({ width: "0%" }, 1500);
		page.eq(next).css({ "z-index": 1, width: 0 }).removeClass("right");
		page.eq(next).children("img").removeClass("right");
		page.eq(next).stop().animate({ width: "100%" }, 1550);
		current--;
		btns.removeClass("on");
		btns.eq(next).addClass("on");
		return false;
	});
	btns.click(function () {
		var target = $(this).index();
		page.eq(current).css({ "z-index": 0, width: "100%" }).removeClass("right");
		page.eq(current).children("img").removeClass("right");
		page.eq(current).stop().animate({ width: "0%" }, 1500);
		page.eq(target).css({ "z-index": 1, width: 0 }).addClass("right");
		page.eq(target).children("img").addClass("right");
		page.eq(target).stop().animate({ width: "100%" }, 1550);
		current = target;
		btns.removeClass("on");
		btns.eq(target).addClass("on");
		return false;
	});
};
design();
