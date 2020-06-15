var pontuacao = 0;
var vidaAtual = 3;

WebFontConfig = {
    
	active: function() {
		
		game.time.events.add(Phaser.Timer.SECOND, createText, this);
		
	},
    
    google: {
    	
      families: ['Press Start 2P']
      
    }

};

function fase() {
	
	var cenario;
	var camada;
	var boneco;
	
	// Movimentação do boneco
	var setas;
	var teclaPuloApertada = false;
	var jaPulouNoAr = false;
	
	// Gumbertos
	var gravidadeGumberto = 250;
	var velocidadeGumberto = 75;
	var gumbertos;	
	
	// Nuvens
	var nuvensVerticais_iii;
	var nuvensVerticais_vi;
	var nuvensVerticais_vii;
	var nuvensVerticais_xi;
	var nuvensHorizontais_iii;
	var nuvensHorizontais_iv;
	
	// Morte
	var morto = false;
	var botaoReiniciar;
	
	// Textos
	var textoMorte;
	var textoPontuacao;
	var textoBarreira;
	var textoAprovacao;
	
	this.preload = function () {
		
		// Comentário para habilitação da fonte
		//game.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');		
		
		// Cenário e Plano de Fundo
		game.load.tilemap("fase", "fase.json", null, Phaser.Tilemap.TILED_JSON);
		game.load.image("planoDeFundo", "tempestade-de-areia.png");		
		game.load.image("textura", "supermario-textura.png");
		game.load.spritesheet("voltar", "voltar.png", 512, 512);
		game.load.spritesheet("agua", "agua.png", 1120, 95);
		game.load.spritesheet("lava", "lava.png", 176, 144);
		
		// Personagens
		game.load.spritesheet("estudante", "estudante.jpg", 36, 48);
		game.load.spritesheet("inimigo", "gumberto.png", 32, 32);
		
		// Objetos
		game.load.spritesheet("moeda", "moeda.png", 32, 32);
		game.load.spritesheet("barreira", "barreira.png", 32, 176);
		game.load.spritesheet("aprovacao", "aprovacao.png", 48, 80);
		
		// Nuvens		
		game.load.spritesheet("nuvensVerticais_iii", "nuvens-verticais_iii.png", 16, 48);
		game.load.spritesheet("nuvensVerticais_vi", "nuvens-verticais_vi.png", 16, 96);
		game.load.spritesheet("nuvensVerticais_vii", "nuvens-verticais_vii.png", 16, 112);
		game.load.spritesheet("nuvensVerticais_xi", "nuvens-verticais_xi.png", 16, 176);
		game.load.spritesheet("nuvensHorizontais_iii", "nuvens-horizontais_iii.png", 48, 16);
		game.load.spritesheet("nuvensHorizontais_iv", 'nuvens-horizontais_iv.png', 64, 16);
		
	};
	
	this.create = function () {		
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		// Cenário
		game.add.tileSprite(0, 0, 1600, 1600, "planoDeFundo");
		cenario = game.add.tilemap("fase");
		cenario.addTilesetImage("textura");
		cenario.setCollisionByExclusion([70, 80, 111, 315, 316, 317, 348, 349, 350, 513, 514, 515, 546, 547, 548, 669, 670, 671 ]);
			
		// Camada	
		camada = cenario.createLayer("CamadaPrimaria");
		camada.resizeWorld();
		
		// Boneco
		boneco = game.add.sprite(32, 1400, "estudante");
		game.camera.follow(boneco);
		game.physics.arcade.enable(boneco, Phaser.Physics.ARCADE);
		// Tamanho do boneco
		boneco.body.collideWorldBounds = true;
		boneco.body.setSize(12, 45, 12, 3);
		boneco.anchor.x = 0.5;
		boneco.anchor.y = 1;
		// Física do boneco
		boneco.body.gravity.y = 800;
		boneco.body.bounce.x = 0.25;
		boneco.body.bounce.y = 0.0;
		boneco.body.maxVelocity.x = 250;
		boneco.body.drag.x = 1325;
		// Animação do boneco
		boneco.animations.add("parado", [5], 1, true);
		boneco.animations.add("andarEsquerda", [3, 2, 1, 0], 6, true);
		boneco.animations.add("andarDireita", [7, 8, 9, 10], 6, true);
		boneco.animations.add("morrer", [11], 1, false);
		
		// Situação padrão do boneco
		morto = false;		
		teclaPuloApertada = false;
		jaPulouNoAr = false;		
		
		// Habilitação das setas para movimentação do boneco		
		setas = game.input.keyboard.createCursorKeys();
		
		// Botão Reiniciar
		botaoReiniciar = game.add.sprite(0, 0, "voltar");
		botaoReiniciar.fixedToCamera = true;
		botaoReiniciar.cameraOffset.setTo(765, 10);
		// Habilitar o botão - Opção 1
		botaoReiniciar.inputEnabled = true;
		botaoReiniciar.input.useHandCursor = true;
		botaoReiniciar.events.onInputDown.add(morte);
		// Habilitar o botão - Opção 2
		botaoReiniciar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
		botaoReiniciar.onDown.add(morte);
		
		// Água
		agua = game.add.sprite(176, 1536, "agua");
		game.physics.arcade.enable(agua, Phaser.Physics.ARCADE);
		agua.body.immovable = true;		
		
		// Lava
		lava = game.add.sprite(1312, 976, "lava");
		game.physics.arcade.enable(lava, Phaser.Physics.ARCADE);
		lava.body.immovable = true;
		
		// Nuvens Verticais - 3 unidades
    	nuvensVerticais_iii = game.add.sprite(752, 208, "nuvensVerticais_iii");
		game.physics.arcade.enable(nuvensVerticais_iii, Phaser.Physics.ARCADE);
		nuvensVerticais_iii.body.immovable = true;
		nuvensVerticais_iii.descendo = true;
		
		// Nuvens Verticais - 6 unidades
		nuvensVerticais_vi = game.add.sprite(816, 512, "nuvensVerticais_vi");
		game.physics.arcade.enable(nuvensVerticais_vi, Phaser.Physics.ARCADE);
		nuvensVerticais_vi.body.immovable = true;						
		nuvensVerticais_vi.alpha = 0;
    	game.add.tween(nuvensVerticais_vi).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);
		
		// Nuvens Verticais - 7 unidades
    	nuvensVerticais_vii = game.add.sprite(992, 208, "nuvensVerticais_vii");
		game.physics.arcade.enable(nuvensVerticais_vii, Phaser.Physics.ARCADE);
		nuvensVerticais_vii.body.immovable = true;						
		nuvensVerticais_vii.alpha = 0;
    	game.add.tween(nuvensVerticais_vii).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);
		
		// Nuvens Verticais - 9 unidades
    	nuvensVerticais_xi = game.add.sprite(1072, 352, "nuvensVerticais_xi");
		game.physics.arcade.enable(nuvensVerticais_xi, Phaser.Physics.ARCADE);
		nuvensVerticais_xi.body.immovable = true;						
		nuvensVerticais_xi.alpha = 0;
    	game.add.tween(nuvensVerticais_xi).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    	
    	// Nuvens Horizontais - 3 unidades
		nuvensHorizontais_iii = game.add.sprite(672, 400, "nuvensHorizontais_iii");
		game.physics.arcade.enable(nuvensHorizontais_iii, Phaser.Physics.ARCADE);
		nuvensHorizontais_iii.body.immovable = true;
		nuvensHorizontais_iii.movendo = true;
		
		// Nuvens Horizontais - 4 unidades
		nuvensHorizontais_iv = game.add.sprite(672, 240, "nuvensHorizontais_iv");
		game.physics.arcade.enable(nuvensHorizontais_iv, Phaser.Physics.ARCADE);
		nuvensHorizontais_iv.body.immovable = true;
		nuvensHorizontais_iv.movimentando = true;
		
		// Barreira
		barreira = game.add.sprite(1280, 736, "barreira");		
		game.physics.arcade.enable(barreira, Phaser.Physics.ARCADE);
		barreira.body.immovable = true;
		
		// Função para criar Gumbertos
		function criarGumberto(x, y) {
			
			var gumberto = game.add.sprite(x, y, "inimigo");
			gumbertos.add(gumberto);
			game.physics.arcade.enable(gumberto);
			gumberto.body.collideWorldBounds = true;
			gumberto.animations.add("andando", [0, 1, 2], 4, true);
			gumberto.animations.play("andando");
			gumberto.body.gravity.y = gravidadeGumberto;
			gumberto.body.velocity.x = velocidadeGumberto;
			gumberto.velocidadeReal = velocidadeGumberto;
			
		}		
		
		// Adicionar Gumbertos
		gumbertos = game.add.group();
		gumbertos.enableBody = true;
		gumbertos.physicsBodyType = Phaser.Physics.ARCADE;
		// Permanentes
		criarGumberto(22, 1200);
		criarGumberto(656, 1430);
		criarGumberto(880, 1430);
		criarGumberto(960, 1430);
		criarGumberto(1160, 1430);
		criarGumberto(928, 736);
		criarGumberto(1120, 736);		
		// Passagem Intermediária
		criarGumberto(304, 928);				
		criarGumberto(144, 832);
		criarGumberto(208, 720);
		criarGumberto(408, 720);
		criarGumberto(408, 832);		
		// Fortaleza
		criarGumberto(144, 400);
		criarGumberto(560, 400);		
		criarGumberto(144, 528);
		criarGumberto(560, 528);
		criarGumberto(144, 144);
		criarGumberto(560, 144);
		criarGumberto(144, 172);
		criarGumberto(560, 272);		
		// Passarela - Mercenários
		criarGumberto(0, 16);		
		criarGumberto(576, 0);
		criarGumberto(544, 0);		
		criarGumberto(416, 0);
		criarGumberto(384, 0);		
		// Passarela - Legião
		criarGumberto(1280, 0);
		criarGumberto(1248, 0);
		criarGumberto(1216, 0);
		criarGumberto(1184, 0);
		criarGumberto(1152, 0);
		criarGumberto(1120, 0);		
		criarGumberto(992, 0);
		criarGumberto(960, 0);
		criarGumberto(928, 0);
		criarGumberto(896, 0);
		criarGumberto(864, 0);
		criarGumberto(832, 0);	
		
		// Função para criar moedas
		function criarMoeda(x, y) {
			
			var moeda = game.add.sprite(x, y, "moeda");
			moedas.add(moeda);			
			game.physics.arcade.enable(moeda);			
			moeda.animations.add("girando", [0, 1, 2, 3, 4, 5], 10, true);
			moeda.animations.play("girando");
			moeda.body.immovable = true;
			
		}	
		
		// Adicionar moedas
		moedas = game.add.group();
		moedas.enableBody = true;
		moedas.physicsBodyType = Phaser.Physics.ARCADE;
		// Início
		criarMoeda(100, 1400);
		criarMoeda(256, 1456);
		criarMoeda(384, 1456);
		criarMoeda(528, 1456);		
		// Torres d'Água
		criarMoeda(752, 1264);
		criarMoeda(1072, 1264);		
		criarMoeda(608, 1392);
		criarMoeda(912, 1353);
		criarMoeda(1200, 1392);		
		// Fortaleza
		criarMoeda(64, 126);
		criarMoeda(64, 256);
		criarMoeda(64, 384);
		criarMoeda(64, 512);
		criarMoeda(592, 126);
		criarMoeda(592, 256);
		criarMoeda(592, 384);
		criarMoeda(592, 512);		
		// Passagem intermediária
		criarMoeda(80, 1040);
		criarMoeda(544, 1040);
		criarMoeda(304, 960);
		criarMoeda(80, 880);
		criarMoeda(16, 688);		
		// Caminho para o Portão
		criarMoeda(784, 800);
		criarMoeda(832, 752);
		criarMoeda(976, 640);		
		// Caverna
		criarMoeda(864, 560);
		criarMoeda(1248, 400);
		criarMoeda(688, 352);
		criarMoeda(912, 368);
		criarMoeda(720, 224);
		criarMoeda(992, 240);
		criarMoeda(1184, 160);
		criarMoeda(1024, 128);
		criarMoeda(992, 128);
		criarMoeda(960, 128);		
		// Lava
		criarMoeda(1328, 720);
		criarMoeda(1392, 720);
		criarMoeda(1440, 720);
		criarMoeda(1408, 832);
		criarMoeda(1456, 832);
		criarMoeda(1520, 976);
		criarMoeda(1568, 1056);
		criarMoeda(1536, 1168);
		criarMoeda(1568, 1200);		
		
		// Pontuação
		textoPontuacao = game.add.text(10, 1500, 'MOEDAS: 0', { font: "20px Press Start 2P", fill: "#eee", align: "left" });
		textoPontuacao.fixedToCamera = true;
		textoPontuacao.cameraOffset.setTo(15, 570);		
		
		// Portal Cósmico da Aprovação
		aprovacao = game.add.sprite(1472, 1376, "aprovacao");
		game.physics.arcade.enable(aprovacao, Phaser.Physics.ARCADE);
		aprovacao.body.immovable = true;			
			
    	// Aviso sobre moedas
    	textoBarreira = game.add.text(1075, 860, 'Colete\nmais moedas!', { font: "20px 'Press Start 2P'", fill: "#eee", align: "center" });
    	    	
    	// Cartaz do Castelinho da Aprovação
    	textoAprovacao = game.add.text(1400, 1250, 'APROVAÇÃO!', { font: "20px 'Press Start 2P'", fill: "#eee", align: "center" });
		
		fadeIn();
		
	};
	
	this.update = function () {
		
		// Gumberto mata o Boneco
		function matouBoneco(boneco, gumberto) {
    		matarBoneco('REPROVADO!');
    	}
		
		// Água mata o Boneco
		function aguaMataBoneco(boneco, agua) {
			
        	matarBoneco('MOLHADO E\nREPROVADO!');
        	
    	}
    	
    	// Lava mata o Boneco
    	function lavaMataBoneco(boneco, lava) {
        	matarBoneco('QUEIMADO E\nREPROVADO!');
    	}
    	
    	
    	// Nuvem mata o Boneco
    	function nuvemMataBoneco(boneco, nuvensVerticais_iii) {
    		
    		matarBoneco('ESTÁ DORMINDO\nNA MINHA AULA?');
    		
    	}    	
    	
    	// Morte do Boneco
    	function matarBoneco(mensagem) {
    		
    		morto = true;
    		// Paralização da física
    		boneco.body.velocity.x = 0;
    		boneco.body.velocity.y = 0;
    		boneco.body.acceleration.x = 0;
    		boneco.body.acceleration.y = 0;
    		boneco.body.gravity.x = 0;
    		boneco.body.gravity.y = 0;
        	boneco.animations.play("morrer");        	
        	// Texto de morte
        	textoMorte = game.add.text(boneco.x, boneco.y, mensagem, { font: "20px 'Press Start 2P' ", fill: "#eee", align: "center" });      	
        	
		}
		
		
		
		// Colisão do Boneco - Nuvens Errantes
		// Nuvens Verticais - 3 unidades
		if (nuvensVerticais_iii.descendo) {
			
			nuvensVerticais_iii.y -= (45 * game.time.physicsElapsed);
			
			if (nuvensVerticais_iii.y <= 208) {
				
				nuvensVerticais_iii.y = 208;
				nuvensVerticais_iii.descendo = false;
				
			}
			
		} else {
			
			nuvensVerticais_iii.y += (45 * game.time.physicsElapsed);
			
			if (nuvensVerticais_iii.y >= 384) {
				
				nuvensVerticais_iii.y = 384;
				nuvensVerticais_iii.descendo = true;
				
			}
			
		}
		
		// Nuvens Horizontais - 3 unidades
		if (nuvensHorizontais_iii.movendo) {
			
			nuvensHorizontais_iii.x -= (45 * game.time.physicsElapsed);
			
			if (nuvensHorizontais_iii.x <= 672) {
				
				nuvensHorizontais_iii.x = 672;
				nuvensHorizontais_iii.movendo = false;
				
			}
			
		} else {
			
			nuvensHorizontais_iii.x += (45 * game.time.physicsElapsed);
			
			if (nuvensHorizontais_iii.x >= 1232) {
				
				nuvensHorizontais_iii.x = 1232;
				nuvensHorizontais_iii.movendo = true;
				
			}
			
		}
		
		// Nuvens Horizontais - 4 unidades
		if (nuvensHorizontais_iv.movimentando) {
			
			nuvensHorizontais_iv.x -= (45 * game.time.physicsElapsed);
			
			if (nuvensHorizontais_iv.x <= 672) {
				
				nuvensHorizontais_iv.x = 672;
				nuvensHorizontais_iv.movimentando = false;
				
			}
			
		} else {
			
			nuvensHorizontais_iv.x += (45 * game.time.physicsElapsed);
			
			if (nuvensHorizontais_iv.x >= 1184) {
				
				nuvensHorizontais_iv.x = 1184;
				nuvensHorizontais_iv.movimentando = true;
				
			}
			
		}		
		
		// Água mata o Gumberto
		function aguaMataGumberto(agua, gumberto) {
			
        	gumberto.kill();
        	
    	}		
		
		// Colisão do Gumberto com o cenário
		function gumbertoColidiuCenario(gumberto, camada) {

			if ((gumberto.body.blocked.left && gumberto.velocidadeReal < 0) || (gumberto.body.blocked.right && gumberto.velocidadeReal > 0)) {
				
				gumberto.velocidadeReal = -gumberto.velocidadeReal;
				gumberto.body.velocity.x = gumberto.velocidadeReal;
			
			}

		}		
		
		// Colisão dos Gumbertos
		game.physics.arcade.collide(gumbertos, camada, gumbertoColidiuCenario);
		game.physics.arcade.collide(gumbertos, agua, aguaMataGumberto);
		
		// Primeiro Retorno
		if (morto) {
			
			return;
			
		}
		
		// Colisão geral do boneco
		game.physics.arcade.collide(boneco, camada);
		game.physics.arcade.collide(boneco, gumbertos, matouBoneco);
		game.physics.arcade.collide(boneco, agua, aguaMataBoneco);
		game.physics.arcade.collide(boneco, lava, lavaMataBoneco);
		game.physics.arcade.overlap(boneco, moedas, coletouMoeda);		
		
		// Colisão do Boneco - Nuvens Piscantes
    	if (nuvensVerticais_vi.alpha >= 0.75) {
    		
    		game.physics.arcade.collide(boneco, nuvensVerticais_vi, nuvemMataBoneco);
    		
    	}
    	
    	if (nuvensVerticais_vii.alpha >= 0.75) {
    		
    		game.physics.arcade.collide(boneco, nuvensVerticais_vii, nuvemMataBoneco);
    		
    	}
    	
    	if (nuvensVerticais_xi.alpha >= 0.75) {
    		
    		game.physics.arcade.collide(boneco, nuvensVerticais_xi, nuvemMataBoneco);
    		
    	}	
		
		// Colisão do Boneco - Nuvens Errantes
    	game.physics.arcade.collide(boneco, nuvensVerticais_iii, nuvemMataBoneco);
    	game.physics.arcade.collide(boneco, nuvensHorizontais_iii, nuvemMataBoneco);
    	game.physics.arcade.collide(boneco, nuvensHorizontais_iv, nuvemMataBoneco);	
		
		// Colisão do boneco com objetos
		game.physics.arcade.collide(boneco, barreira);
		game.physics.arcade.collide(boneco, aprovacao, verdadeiroHeroi);		
		
		// Segundo Retorno
		if (morto) {
			
			return;
			
		}
		
		// Deslocamento lateral
		if (setas.left.isDown) {
			
			boneco.body.acceleration.x = -3000;
			boneco.animations.play("andarEsquerda");
			
		} else {
			
				if (setas.right.isDown) {
					
					boneco.body.acceleration.x = 3000;
					boneco.animations.play("andarDireita");
					
					} else {
						
						boneco.body.acceleration.x = 0;
						boneco.animations.play("parado");
						
					}
						
		}
			
		// Saltar
		if (setas.up.isDown) {
			
			if (!teclaPuloApertada) {
				
				teclaPuloApertada = true;
				
				if (boneco.body.onFloor() || boneco.body.touching.down) {
					
					jaPulouNoAr = false;
					boneco.body.velocity.y = -300;
					
				} else if (!jaPulouNoAr) {
					
					jaPulouNoAr = true;
					boneco.body.velocity.y = -300;
					
				}
				
			}
			
		} else {
			
			teclaPuloApertada = false;
			
		}
		
		// Coletar moedas
		function coletouMoeda(boneco, moeda) {
		
			moeda.kill();
			pontuacao++;
			textoPontuacao.text = 'MOEDAS: ' + pontuacao;
		
		}
		
		// Destruir a barreira
		if (pontuacao >= 25) {
			
			barreira.kill();
			textoBarreira.kill();
			
		}		
		
	};
	
	// Função de Vitória
	function verdadeiroHeroi() {
		
		fadeOut();
		game.state.start("vitoria");
		
	}	
	
	// Função de Morte
	function morte() {
		
		fadeOut(perecer);
		
	}
	
	function perecer() {		
		
		game.state.start("morte");
		
	}			
	
}
