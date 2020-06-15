var frases = [
	
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

var imagens = [
	
	"humberto_01",
	"humberto_02",
	"humberto_03",
	
];

var fraseAtual = (Math.random() * frases.length) | 0;
var imagemAtual = (Math.random() * imagens.length) | 0;

function morte() {
	
	this.preload = function () {
		
		game.stage.backgroundColor = "#000";
		game.load.image("tela-morte", "tela-morte.jpg");
		game.load.image("humberto_01", "humberto_01.jpg");
		game.load.image("humberto_02", "humberto_02.jpg");
		game.load.image("humberto_03", "humberto_03.jpg");
		
	};
	
	this.create = function () {
		
		// Aleatorização das frases e imagens
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
		
		imagemAtual++;
		
		if (imagemAtual >= imagens.length) {
			
			imagemAtual = 0;
			
		}
		
		game.add.image(0, 0, "tela-morte");		
		game.add.image(360, 85, imagens[imagemAtual]);
		
		var estilo = {
			
			font: "normal 16px 'Press Start 2P'",
			fill: "#eee",
			fontSize: "25px"
			
		};
		
		fraseAtual++;
		
		if (fraseAtual >= frases.length) {
			
			fraseAtual = 0;
			
		}
		
		game.add.text(50, 500, frases[fraseAtual], estilo);
		
		mostraPlacar();
		setTimeout(morreu, 3000);
		fadeIn();
				
	};	
	
	function mostraPlacar() {
		
		estilo = {
			
			font: "normal 16px 'Press Start 2P'",
			fill: "#eee",
			fontSize: "45px"
			
		};
		
		// Pontuação
		game.add.text(200, 96, pontuacao, estilo);
		pontuacao = 0;
		// Vida
		game.add.text(200, 243, vidaAtual, estilo);
		vidaAtual--;
		
	}
	
	function morreu() {
		
		fadeOut(tenteOutraVez);
		
	}
	
	function tenteOutraVez() {
		
		game.state.start("fase");
		
	}
	
}
