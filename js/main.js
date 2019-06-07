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
				breakpoint: 1199,
				settings: {
					vertical: false,
					verticalSwiping: false
				}
			},
			{
				breakpoint: 575,
				settings: {
					prevArrow: '<button type="button" class="slick-prev"></button>',
					nextArrow: '<button type="button" class="slick-next"></button>',
					arrows: true,
					vertical: false,
					verticalSwiping: false
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
		asNavFor: '.gallery-sliderFor',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					vertical: false,
					verticalSwiping: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					vertical: false,
					verticalSwiping: false,
					slidesToShow: 5
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
				breakpoint: 1199,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.about-sliderFor').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		asNavFor: '.about-sliderNav'
	});
	$('.about-sliderNav').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		speed: 500,
		asNavFor: '.about-sliderFor'
	});

	//

	// Click Event

	$(document).on('click', '.js-toggle', function() {
		$('.head-nav').addClass('open');
	});
	$(document).on('click', '.js-order', function() {
		$('.popup').removeClass('open');
		$('.popup-order').addClass('open');
	});
	$(document).on('click', '.js-call', function() {
		$('.popup').removeClass('open');
		$('.popup-call').addClass('open');
	});
	$(document).on('click', '.js-price', function() {
		$('.popup').removeClass('open');
		$('.popup-price').addClass('open');
	});
	$(document).on('click', '.js-close', function() {
		$('.head-nav').removeClass('open');
		$('.popup').removeClass('open');
	});
	$(document).on('click', '.gallery-sliderNav .slick-center', function() {
		$('.gallery-sliderFor').addClass('open');
		$('.gallery-sliderFor')[0].slick.refresh();
	});
	$(document).bind('mouseup touchend', function(e) {
		if ($(e.target).closest('.popup-form').length || $(e.target).closest('.popup-block').length || $(e.target).closest('.popup-note').length || $(e.target).closest('.gallery-sliderFor').length) return;
		$('.popup').removeClass('open');
		$('.gallery-sliderFor').removeClass('open');;
	});

	//

	// Accordion Event

	$(function() {
		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find('.questions-box-head');
			links.on('click', {
				el: this.el,
				multiple: this.multiple
			}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.questions-box-body').not($next).slideUp().parent().removeClass('open');
			};
		}
		var accordion = new Accordion($('.questions-accordion'), false);
	});

	//

	// Tab Event

	$(function() {
		var clickedTab = $('.services-tabItem.active');
		var tabWrapper = $('.services-tabWrap');
		var activeTab = tabWrapper.find('.open');
		var activeTabHeight = activeTab.outerHeight();

		activeTab.show();
		tabWrapper.height(activeTabHeight);

		function tabInit() {
			clickedTab = $('.services-tabItem.active');
			activeTab.fadeOut(300, function() {
				$('.services-tabInfo').removeClass('open');
				var clickedTabIndex = clickedTab.index('.services-tabItem');
				$('.services-tabInfo').eq(clickedTabIndex).addClass('open');
				activeTab = $('.services-tabWrap .open');
				activeTabHeight = activeTab.outerHeight();
				scroll = $('.services-tabWrap').offset().top;
				$('html, body').animate({
					scrollTop: scroll - 50
				}, 700);
				tabWrapper.stop().delay(50).animate({
					height: activeTabHeight
				}, 250, function() {
					activeTab.delay(50).fadeIn(250);
				});
			});
		}
		$('.services-tabList').on('click', '.services-tabItem', function() {
			$('.services-tabItem').removeClass('active');
			$(this).addClass('active');
			tabInit();
		});
	});
	$(function() {
		var clickedTab = $('.popup-tabItem.active');
		var tabWrapper = $('.popup-tabWrap');
		var activeTab = tabWrapper.find('.open');
		var activeTabHeight = activeTab.outerHeight();
		
		activeTab.show();
		tabWrapper.height(activeTabHeight);

		function tabInit() {
			clickedTab = $('.popup-tabItem.active');
			activeTab.fadeOut(300, function() {
				$('.popup-tabInfo').removeClass('open');
				var clickedTabIndex = clickedTab.index('.popup-tabItem');
				$('.popup-tabInfo').eq(clickedTabIndex).addClass('open');
				activeTab = $('.popup-tabWrap .open');
				activeTabHeight = activeTab.outerHeight();
				tabWrapper.stop().delay(50).animate({
					height: activeTabHeight
				}, 250, function() {
					activeTab.delay(50).fadeIn(250);
				});
			});
		}
		$('.popup-tabList').on('click', '.popup-tabItem', function() {
			$('.popup-tabItem').removeClass('active');
			$(this).addClass('active');
			tabInit();
		});
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
		if ($(document).scrollTop() > 600) {
			$('.nav').addClass('fixed');
		} else if ($(document).scrollTop() < 600) {
			$('.nav').removeClass('fixed');
		}
	}
	$(window).bind('scroll', function() {
		$('.animated').each(function(){
			if ($(document).scrollTop() >= $(this).offset().top - 600) {
				$(this).removeClass('animated');
			}
		});
		fixedNav();
	});
	$(document).on('click', '.js-anchor', function() {
		var id = $(this).attr('href');
				scroll = $(id).offset().top;
		if ($('.head-nav').hasClass('open')) {
			$('.head-nav').removeClass('open');
		}
		$('html, body').animate({
			scrollTop: scroll
		}, 1500);
		return false;
	});

	//

	// Load Event

	$(window).on('load', function() {
		$('.pulse').fadeOut();
		$('.preloader').delay(400).fadeOut('slow');
		fixedNav();
		setTimeout(function(){
			$('.animated').each(function(){
				if ($(document).scrollTop() >= $(this).offset().top - 600) {
					$(this).removeClass('animated');
				}
			});
		}, 500);
	});

	//
	
});