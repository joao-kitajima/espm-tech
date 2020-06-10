var telas = ["menu","fase","morte","vitoria", "instrucoes"];
var larguraJogo = 800;
var alturaJogo = 600;

function menu() {
	var btn;
	var key;
	
	this.preload = function () {
		game.load.image("fundo", "ESPM.jpg");
		game.load.image("logo", "logo.png")
		game.load.spritesheet("button", "start.png",323,76);
		game.load.image("teclado", "keyboard.png", 90,43);
	};
	
	this.create = function () {
		game.add.image(0,0, "fundo");
		game.add.image(133,119, "logo");
		btn = game.add.sprite(243,431, "button");
		
		btn.animations.add("neutro", [0], 1, true);
		btn.animations.add("click", [1], 1, true);
		btn.animations.play("neutro");
		
		btn.inputEnabled = true;
		btn.input.useHandCursor = true;
		btn.events.onInputDown.add(btnClicado);
		
		//instrucoes
		key = game.add.image(60,530, "teclado");
		key.inputEnabled = true;
		key.input.useHandCursor = true;
		key.events.onInputDown.add(btnKeyboard);
		
		fadeIn();
	};
	
	function btnClicado() {
		btn.animations.play("click");
		fadeOut(telaJogo);
	}
	
	function telaJogo () {
		game.state.start("fase");
	}
	
	function btnKeyboard() {
		fadeOut();
		game.state.start("instrucoes");
	}
}
