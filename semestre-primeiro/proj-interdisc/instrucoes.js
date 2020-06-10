function instrucoes() {
	
this.preload = function () {
		game.load.image("fundo", "instrucoes.jpg");
		game.load.image("back", "reset.png");
	};
	
	this.create = function () {
		game.add.image(0,0, "fundo");
		btn = game.add.sprite(50,48, "back");
		
		btn.inputEnabled = true;
		btn.input.useHandCursor = true;
		btn.events.onInputDown.add(btnClicado);
		
		fadeIn();
	};
	
	function btnClicado() {
		fadeOut();
		game.state.start("menu");
	}
	
}
