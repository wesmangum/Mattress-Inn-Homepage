(function () {
	var $menu = $('.mobile-menu'),
		$site_wrapper =  $('.site-wrapper')
	;
	function menu_listener() {
		$menu.on('click', toggle_menu);
	}

	function toggle_menu (e) {
		e.preventDefault();

		$site_wrapper.toggleClass('show-nav');
	}

	menu_listener();
})();