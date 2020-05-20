var telas = ["menu", "fase", "morte"];
var larguraJogo = 800;
var alturaJogo = 600;

function menu() {
	
	var texto;
	
	this.preload = function () {
		
		// Define a cor do fundo para azul claro.
		game.stage.backgroundColor = "#0066ff";
		
	};
	
	this.create = function () {
		
		// Especifica o formato básico do texto de forma similar
		// ao atributo font do CSS normal. A diferença é que a cor
		// é determinada pelo atributo fill, e não color como
		// ocorre no CSS normal.
		//
		// Mais atributos e métodos dos textos e seus estilos:
		// https://phaser.io/docs/2.6.2/Phaser.Text.html
		var estilo = {
			font: "normal 16px Arial",
			fill: "#ffffff"
		};
		
		// Adiciona um texto na coordenada (0, 0) da tela,
		// lembrando que (0, 0) está no canto superior esquerdo!
		//
		// Como iremos trabalhar com o sprite depois, precisamos
		// armazenar em uma variável.
		texto = game.add.text(0, 0, "Clique aqui para iniciar!", estilo);
		
		// Habilita que o texto seja clicado.
		texto.inputEnabled = true;
		// Altera o cursor do mouse quando ele estiver sobre
		// o texto.
		texto.input.useHandCursor = true;
		// Diz qual função deve ser executada quando o texto
		// for clicado.
		texto.events.onInputDown.add(textoFoiClicado);
		
		// Faz o fade de entrada (de preto para transparente).
		// Deve ser a última linha do create() para garantir
		// que cubra todos os outros elementos.
		fadeIn();
		
	};
	
	this.update = function () {
		
	};
	
	function textoFoiClicado() {
		
		// Em vez de simplesmente iniciar a tela, como
		// estamos utilizando fade, devemos esperar o
		// fade acabar para começar a outra tela!
		fadeOut(fadeOutAcabou);
		
	}
	
	function fadeOutAcabou() {
		
		// Apenas inicia a primeira tela do jogo.
		game.state.start("fase");
		
	}
	
}
