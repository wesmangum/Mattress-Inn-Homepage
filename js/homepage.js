(function () {
	var $menu = $('.menu'),
		navigation =  $('#navigation')
	;
	function menu_listener() {
		$menu.on('click', toggle_menu);
	}

	function toggle_menu (e) {
		e.preventDefault();
		 navigation.toggleClass('show');
	}

	menu_listener();
})();