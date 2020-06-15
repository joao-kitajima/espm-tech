function instrucoes() {
	
	this.preload = function () {
		
		game.load.image("fundo", "instrucoes.jpg");
		game.load.image("voltar", "voltar.png");
		
	};
	
	this.create = function () {
		
		game.add.image(0, 0, "fundo");
		
		// Botão de Retorno
		botao = game.add.sprite(50, 48, "voltar");
		// Habilitar o botão
		botao.inputEnabled = true;
		botao.input.useHandCursor = true;
		botao.events.onInputDown.add(botaoClicado);

		fadeIn();
		
	};
	
	function botaoClicado() {
		
		fadeOut();
		game.state.start("menu");
		
	}
	
}
