$(document).ready(function() {


	// Slider Event

	$('.gallery-sliderFor').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		asNavFor: '.gallery-sliderNav',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false
				}
			}
		]
	});
	$('.gallery-sliderNav').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		dots: true,
		arrows: true,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		adaptiveHeight: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		touchThreshold: 200,
		speed: 500,
		lazyLoad: 'ondemand',
		asNavFor: '.gallery-sliderFor',
		responsive: [
			{
				breakpoint: 575,
				settings: {
					dots: false,
					variableWidth: false,
					adaptiveHeight: false,
					slidesToShow: 1,
					touchThreshold: 5,
				}
			}
		]
	});
	$('.reviews-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					dots: false
				}
			}
		]
	});
	$('.popup-sliderFor').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		asNavFor: '.popup-sliderNav',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					arrows: true
				}
			}
		]
	});
	$('.popup-sliderNav').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 14 26" svg"><path d="M11.9557 12.6474L12.3096 13.0013L11.9554 13.3549L0.864263 24.4243C0.712239 24.5763 0.712239 24.8241 0.864263 24.9761L0.511629 25.3287L0.864264 24.9761C1.01429 25.1261 1.25369 25.1266 1.40553 24.9653L1.41072 24.9598L1.41607 24.9544L13.1153 13.2552C13.189 13.1814 13.2293 13.0727 13.2293 12.9793C13.2293 12.8707 13.1934 12.7815 13.1153 12.7034L1.41607 1.00416C1.26405 0.852131 1.01629 0.852131 0.864263 1.00416C0.712238 1.15618 0.712238 1.40394 0.864263 1.55596L11.9557 12.6474Z"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		speed: 500,
		lazyLoad: 'ondemand',
		asNavFor: '.popup-sliderFor'
	});

	//

	// Click Event

	$(document).on('click', '.js-toggle', function() {
		$(this).toggleClass('open');
		$('.head-mobile').toggleClass('open');
	});
	$(document).on('click', '.js-call', function() {
		$('.js-toggle').removeClass('open');
		$('.head-mobile').removeClass('open');
		$('.popup').removeClass('open');
		$('.popup-call').addClass('open');
	});
	$(document).on('click', '.js-order', function() {
		$('.js-toggle').removeClass('open');
		$('.head-mobile').removeClass('open');
		$('.popup').removeClass('open');
		$('.popup-order').addClass('open');
	});
	$(document).on('click', '.js-price', function() {
		$('.js-toggle').removeClass('open');
		$('.head-mobile').removeClass('open');
		var id = $(this).attr('href');
		$('.popup').removeClass('open');
		$(id).addClass('open');
		return false;
	});
	$(document).on('click', '.js-close', function() {
		$('.popup-info-form').removeClass('open');
		$('.popup').removeClass('open');
		$('.modal').removeClass('open');
	});
	$(document).on('click', '.js-popup-form', function() {
		$('.popup-info-form').addClass('open');
	});
	$(document).on('click', '.select', function() {
		$(this).toggleClass('open');
	});
	$(document).on('click', '.gallery-sliderNav .slick-center', function() {
		$('.gallery-sliderFor').addClass('open');
		$('.gallery-sliderFor')[0].slick.refresh();
	});
	$(document).bind('mouseup touchend', function(e) {
		if ($(e.target).closest('.select').length || $(e.target).closest('.gallery-sliderFor').length || $(e.target).closest('.modal-success').length) return;
		$('.select').removeClass('open');
		$('.gallery-sliderFor').removeClass('open');
		$('.modal').removeClass('open');
	});

	//

	// IE 'object-fit: cover' fix

	function ObjectFitIt() {
		$('.js-obj').each(function() {
			var imgSrc = $(this).attr('src');
			var fitType = 'cover';
			if ($(this).data('fit-type')) {
				fitType = $(this).data('fit-type');
			}
			$(this).parent().css({ 
				'background' : 'transparent url("' + imgSrc + '") no-repeat center center/' + fitType
			});
			$('.js-obj').css('display','none'); 
		});
	}
	if ('objectFit' in document.documentElement.style === false) {
		ObjectFitIt();
	}

	//

	// Mouse Event

	$(window).mousemove(function(e) {
		var xpos = e.clientX;
				ypos = e.clientY;
				xpos = xpos * 2;
				ypos = ypos * 2;
		$('.js-parallax').css('top', ((0 + (ypos / 50)) + 'px'));
		$('.js-parallax').css('right', ((0 + (xpos / 80)) + 'px'));
		$('.js-parallax').css('bottom', ((0 + (ypos / 50)) + 'px'));
		$('.js-parallax').css('left', ((0 + (xpos / 80)) + 'px'));
	});

	//

	// Scroll Event

	function fixedNav() {
		var mainHeight = $('.main').outerHeight();
		if ($(document).scrollTop() > (mainHeight / 2)) {
			$('.nav').addClass('fixed');
			$('.nav').css('visibility', 'visible');
		} else if ($(document).scrollTop() < (mainHeight / 2)) {
			if ($('.nav').hasClass('fixed')) {
				$('.nav').removeClass('fixed');
				setTimeout(function() {
					$('.nav').css('visibility', 'hidden');
				}, 1000);
			}
		}
	};
	function inWindow(s){
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var currentEls = $(s);
		var result = [];
		currentEls.each(function(){
			var el = $(this);
			var offset = el.offset();
			if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
				result.push(this);
		});
		return $(result);
	};
	function addLetter() {
		$('h1+p').each(function() {
			var $this = $(this);
			$this.html($this.text().replace(/./g, '<span class="js-letter fadeLeft paused">$&</span>'));
		});
		$('h2+p').each(function() {
			var $this = $(this);
			$this.html($this.text().replace(/./g, '<span class="js-letter fadeLeft paused">$&</span>'));
		});
	};
	$(window).on('load', function() {
		if ($(window).width() >= 992) {
			addLetter();
		}
	});
	$(window).on('resize', function() {
		if ($(window).width() >= 992) {
			addLetter();
		}
	});
	setInterval(function() {
		var i = 0;
		inWindow('.js-letter').each(function() {
			i++;
			$(this).css('animation-delay', 50 * i + 'ms');
		});
		$('.js-letter').each(function() {
			var emptyLetter = $(this).text();
			if (emptyLetter === ' ') {
				$(this).html(emptyLetter.replace(/./g, '&nbsp'));
			}
		});
	}, 100);
	$(window).bind('scroll', function() {
		fixedNav();
		$('.js-toggle').removeClass('open');
		$('.head-mobile').removeClass('open');
		var InAnimated = inWindow('.animated');
				InPaused = inWindow('.paused');
		InAnimated.removeClass('animated');
		InPaused.removeClass('paused');
		$('.animated').each(function() {
			if ($(document).scrollTop() >= $(this).offset().top - 600) {
				$(this).removeClass('animated');
			}
		});
		$('.paused').each(function() {
			if ($(document).scrollTop() >= $(this).offset().top - 600) {
				$(this).removeClass('paused');
			}
		});
	});
	$(document).on('click', '.js-anchor', function() {
		var id = $(this).attr('href');
				scroll = $(id).offset().top;
		if ($(window).width() >= 992) {
			$('html, body').animate({
				scrollTop: scroll - 25
			}, 1500);
			return false;
		} else if ($(window).width() >= 576) {
			$('html, body').animate({
				scrollTop: scroll + 50
			}, 1500);
			return false;
		} else {
			$('html, body').animate({
				scrollTop: scroll + 30
			}, 1500);
			return false;
		}
		return false;
	});

	//

	// Load Event

	$(window).on('load', function() {
		$('.head-phone').clone().appendTo('.head-mobile');
		$('.head-link').clone().appendTo('.head-mobile');
		$('.head-socials').clone().appendTo('.head-mobile');
		fixedNav();
		setTimeout(function() {
			var InAnimated = inWindow('.animated');
					InPaused = inWindow('.paused');
			InAnimated.removeClass('animated');
			InPaused.removeClass('paused');
			$('.animated').each(function() {
				if ($(document).scrollTop() >= $(this).offset().top - 600) {
					$(this).removeClass('animated');
				}
			});
			$('.paused').each(function() {
				if ($(document).scrollTop() >= $(this).offset().top - 600) {
					$(this).removeClass('paused');
				}
			});
		}, 500);
	});

	//
	
});