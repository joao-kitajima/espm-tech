function morte() {
	
	var frases;
	var imagens;
	var estilo;
	var vidaAtual;
	
	this.preload = function () {
		
		game.stage.backgroundColor = "#000000";
		game.load.image("tmorte", "Tela-morte.jpg");
		game.load.image("humberto", "humberto-1.jpg");
		game.load.image("humberto2", "humberto-2.jpg");
		game.load.image("humberto3", "humberto-3.jpg");
		
	};
	
	this.create = function () {
		frases = [
			"\"Ódio no coração!\"",
			"\"Quem sabe se você\n endireitar as costas vai\n conseguir jogar melhor!\"",
			"\"Cuidado com as palavras\n de baixo calão!\"",
			"Não diga isso, diga:\n \"que desafiador!\"",
			"\"Chegou cedo para o\n próximo semestre!\"",
			"\"Então você quer dizer que\n a culpa é minha, é isso?\"",
			"\"Total deselegante\"",
			"\"Veja só que linguajar chulo!\"",
			"\"O nome disso é preconceito\"",
			"\"O que é uma pandemia\n perto da minha aula\"",
			"\"Como assim sem reprovações?\n Para que eu dou aula então?\"",
			"\"Vai nessa que vai dar\n super certo.\"",
			"\"Fim de carreira,\n Sr. Jogador.\"",
			"\"A honestidade vale mais\n do que o conhecimento\"",
			"\"(Colaram na prova?)\"\n\"Os inocentes irão pagar\n hoje também\"",
		];
		imagens = [
			"humberto",
			"humberto2",
			"humberto3",
		];
		//------ Aleatorização das frases e imagens -------
		var vez, i, total = frases.length;
		for (vez = 0; vez < 4; vez++) {
			for (i = 0; i < total; i++) {
				frases.push(frases[i]);
			}
		}		
		total = imagens.length;
		for (vez = 0; vez < 4; vez++) {
			for (i = 0; i < total; i++) {
				imagens.push(imagens[i]);
			}
		}
		//------------------------------------------
		var x = (Math.random() * imagens.length) | 0;
		game.add.image(0, 0, "tmorte");
		game.add.image(360,85, imagens[x]);
		
		var estilo = {
			font: "normal 16px 'Press Start 2P'",
			fill: "#ffffff",
			fontSize: "60px"
		};
		//------------------------------------------
		x = (Math.random() * frases.length) | 0;
		game.add.text(50, 500, frases[x], estilo);
		
		mostraPlacar();
		setTimeout(Fade, 3000);
		fadeIn();
	};
	
	this.update = function () {
		
	};
	
	function mostraPlacar() {
		estilo = {
			font: "normal 16px 'Press Start 2P'",
			fill: "#ffffff",
			fontSize: "45px"
		};
		
		game.add.text(200, 96, pontuacao, estilo);
		pontuacao = 0;
		game.add.text(200, 243, vidaAtual, estilo);
		vidaAtual--;
	}
	
	function Fade() {
		fadeOut(fadeOutAcabou);
	}
	
	function fadeOutAcabou() {
		game.state.start("fase");
	}
	

}
