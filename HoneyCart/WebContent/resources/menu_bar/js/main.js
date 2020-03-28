window.onload = function() {
	(function() {

		var bodyEl = document.body, content = document
				.querySelector('.content-wrap'), openbtn = document
				.getElementById('open-button'), closebtn = document
				.getElementById('close-button'), isOpen = false;

		function init() {
			initEvents();
		}

		function initEvents() {
			openbtn.addEventListener('click', toggleMenu);
			if (closebtn) {
				closebtn.addEventListener('click', toggleMenu);

			}

			// close the menu element if the target it´s not the menu element or
			// one of its descendants..
			/*content.addEventListener('click', function(ev) {
				var target = ev.target;
				if (isOpen && target !== openbtn) {
					toggleMenu();

				}
			},true);*/
		}

		function toggleMenu() {
			if (isOpen) {
				classie.remove(bodyEl, 'show-menu');
				$("#close-button").css("display", "none");

			} else {
				classie.add(bodyEl, 'show-menu');
				$("#close-button").css("display", "block");
			}
			isOpen = !isOpen;
		}

		init();

	})()
};