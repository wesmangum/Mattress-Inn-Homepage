(function () {
	var $menu = $('.menu')
	;
	function menu_listener() {
		$menu.on('click', toggle_menu);
	}

	function toggle_menu (e) {
		e.preventDefault();
		var $this = $(this);
		var navigation = $this.parent().siblings('.navigation');

		if ( navigation.length < 1 ) {
			navigation = $this.siblings('.navigation');
		}
		navigation.toggleClass('show');
	}

	menu_listener();
})();