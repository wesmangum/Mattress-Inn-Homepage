(function () {
	var $menus = $('[class^="menu-item"]');

	function menu_toggle() {
		$menus.on( 'click', toggle_menu );
	}
	function toggle_menu() {
		var $this = $( this ),
			$mattress_info = $this.siblings( '.mattress-info' ),
			$pricing = $mattress_info.find( '.pricing' ),
			$features = $mattress_info.find( '.features' )
		;

		if ( $this.hasClass( 'menu-item-pricing' ) ) {
			$this.addClass('active');
			$this.siblings('[class^="menu-item"]').removeClass('active');
			$pricing.removeClass('hide');
			$features.addClass('hide');
		} else {
			$this.addClass('active');
			$this.siblings('[class^="menu-item"]').removeClass('active');
			$features.removeClass('hide');
			$pricing.addClass('hide');
		}
	}

	menu_toggle();
})();