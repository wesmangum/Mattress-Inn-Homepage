(function () {
	var $menu = document.getElementsByClassName('menu'),
		navigation =  document.getElementById('navigation')
	;
	console.log($menu[0]);
	function menu_listener() {
		$menu[0].addEventListener('click', toggle_menu);
	}

	function toggle_menu (e) {
		e.preventDefault();
		if (navigation.classList) {
		  navigation.classList.toggle('show');
		} else {
		  var classes = navigation.className.split(' ');
		  var existingIndex = classes.indexOf('show');

		  if (existingIndex >= 0)
		    classes.splice(existingIndex, 1);
		  else
		    classes.push('show');

		  navigation.className = classes.join(' ');
		}
	}

	menu_listener();
})();