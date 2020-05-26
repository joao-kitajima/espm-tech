function vitoria() {
	var btn;
	
	this.preload = function () {
		game.load.image("fundo", "auditorio.jpg");
		game.load.image("estudante", "formado.png");
		game.load.spritesheet("button", "return.png",403,76);
		
	};
	
	this.create = function () {
		game.add.image(0,0, "fundo");
		game.add.image(339,229, "estudante");
		
		var estilo = {
			font: "normal 16px 'Press Start 2P'",
			fill: "#ffffff",
			fontSize: "24px"
		};
		
		game.add.text(85, 36, "Você é um verdadeiro herói,", estilo);
		game.add.text(120, 69, "Parabéns pela aprovação!", estilo);
		btn = game.add.sprite(200,491, "button");
		
		btn.animations.add("neutro", [0], 1, false);
		btn.animations.add("click", [1], 1, false);
		btn.animations.play("neutro");
		
		btn.inputEnabled = true;
		btn.input.useHandCursor = true;
		btn.events.onInputDown.add(btnClicado);
		
		fadeIn();
	};
	
	function btnClicado() {
		btn.animations.play("click");
		fadeOut(telaJogo);
	}
	
	function telaJogo () {
		game.state.start("menu");
	}
}
