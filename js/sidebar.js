(function () {
	var $menu = $('.mobile-menu'),
		$sidebar =  $('.sidebar')
	;
	function menu_listener() {
		$menu.on('click', toggle_menu);
	}

	function toggle_menu (e) {
		e.preventDefault();

		$sidebar.toggleClass('reveal');
	}

	menu_listener();
})();