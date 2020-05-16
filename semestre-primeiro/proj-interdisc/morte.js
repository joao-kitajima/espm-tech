function morte() {
	
	var telam;
	var foto;
	var frase;
	var estilo;
	var vidaAtual = 3;
	var vidas;
	
	this.preload = function () {
		
		game.stage.backgroundColor = "#000000";
		game.load.image("tmorte", "Tela-morte.jpg");
		game.load.image("humberto", "humberto-1.jpg");
		
	};
	
	this.create = function () {
		telam = game.add.image(0, 0, "tmorte");
		foto = game.add.image(360,85, "humberto");
		
	var estilo = {
			font: "normal 16px 'Press Start 2P'",
			fill: "#ffffff",
			fontSize: "60px"
		};
		
		frase = game.add.text(150, 500, "\"Ódio no coração\"", estilo);
		
		mostraVida();
		setTimeout(Fade, 3000);
		fadeIn();
	};
	
	this.update = function () {
		
	};
	
	function Fade() {
		
		fadeOut(fadeOutAcabou);
	}
	
	function fadeOutAcabou() {
		
		game.state.start("menu");
		
	}
	
	function mostraVida() {
		estilo = {
			font: "normal 16px 'Press Start 2P'",
			fill: "#ffffff",
			fontSize: "45px"
		};
		
		vidas = game.add.text(200, 243, vidaAtual, estilo);
		vidaAtual--;
	}
}
