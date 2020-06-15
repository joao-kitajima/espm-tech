function vitoria() {
	
	var botao;
	
	this.preload = function () {
		
		// Parar a trilha sonora
		trilhaSonora.stop();
		
		game.load.image("fundo", "auditorio.jpg");
		game.load.image("heroi", "heroi.png");
		game.load.spritesheet("retornar", "retornar.png", 403, 76);			
		
		// Carregar música da vitória
		game.load.audio("exaltacao", "queen_we-are-the-champions.ogg");
		var musicaVitoria;
		
	};
	
	this.create = function () {
		
		game.add.image(0, 0, "fundo");
		game.add.image(339, 229, "heroi");
		
		// Adicionar música da vitória
		musicaVitoria = game.add.audio("exaltacao");
		musicaVitoria.loop = true;
    	musicaVitoria.play();
		
		// Estilização do texto
		var estilo = {
			
			font: "normal 16px 'Press Start 2P'",
			fill: "#ffffff",
			fontSize: "24px"
			
		};
		
		game.add.text(85, 36, "Você é um verdadeiro herói,", estilo);
		game.add.text(120, 69, "Parabéns pela aprovação!", estilo);
		
		// Adicionar botão
		botao = game.add.sprite(200, 491, "retornar");
		// Animar do botão
		botao.animations.add("neutro", [0], 1, false);
		botao.animations.add("clique", [1], 1, false);
		botao.animations.play("neutro");
		// Habilitar botão
		botao.inputEnabled = true;
		botao.input.useHandCursor = true;
		botao.events.onInputDown.add(botaoClicado);
		
		fadeIn();
		
	};	
	
	function botaoClicado() {
		
		botao.animations.play("clique");
		
		// Redefinição da Vida e Pontuação
		pontuacao = 0;
		vidaAtual = 3;
		
		fadeOut(telaJogo);		
		
		musicaVitoria.stop();
		
	}
	
	function telaJogo () {
		
		game.state.start("menu");
		
	}
	
}
