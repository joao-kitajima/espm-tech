var telas = ["menu", "instrucoes", "fase", "morte", "vitoria"];
// Tamanho padrão do jogo: 800x600
var larguraJogo = 800;
var alturaJogo = 600;
// Dimensão total da fase: 1600x1600

function menu() {
	
	var botaoInicio;
	var botaoInstrucoes;
	
	this.preload = function () {
		
		// Carregar trilha sonora
		game.load.audio("trilhaSonora", "5fdp_dot-your-eyes.ogg");
		var trilhaSonora;
		
		game.load.image("fundo", "espm.jpg");
		game.load.image("logo", "logo.png");
		game.load.image("teclado", "teclado.png", 90, 43);
		game.load.spritesheet("botao", "iniciar.png", 323, 76);		
				
	};
	
	this.create = function () {
		
		// Adicionar trilha sonora
		trilhaSonora = game.add.audio("trilhaSonora");
		trilhaSonora.loop = true;
		
		game.add.image(0, 0, "fundo");		
		game.add.image(133, 119, "logo");
		
		// Botão de Iniciar
		botaoInicio = game.add.sprite(243, 431, "botao");
		// Animar o botão de Iniciar
		botaoInicio.animations.add("neutro", [0], 1, true);
		botaoInicio.animations.add("clique", [1], 1, true);
		botaoInicio.animations.play("neutro");
		// Habilitar o botão
		botaoInicio.inputEnabled = true;
		botaoInicio.input.useHandCursor = true;
		botaoInicio.events.onInputDown.add(botaoAcionado);		
		
		// Botão de Instruções
		botaoInstrucoes = game.add.image(60, 530, "teclado");
		// Habilitar o botão
		botaoInstrucoes.inputEnabled = true;
		botaoInstrucoes.input.useHandCursor = true;
		botaoInstrucoes.events.onInputDown.add(botaoTeclado);		
		
		fadeIn();
				
	};	
	
	function botaoAcionado() {
		
		botaoInicio.animations.play("clique");
		fadeOut(telaJogo);
		
	}
	
	function telaJogo () {
		
		trilhaSonora.play();
		game.state.start("fase");
		
	}
	
	function botaoTeclado() {
		
		fadeOut();
		game.state.start("instrucoes");
		
	}	
	
}
