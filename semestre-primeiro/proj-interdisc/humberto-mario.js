var telas = ["menu"];
var larguraJogo = 800;
var alturaJogo = 600;

var cenario;
var camada;
var boneco;
var setas;
var tecla_pulo;

function menu() {
	
	this.preload = function () {		
		game.stage.backgroundColor = "#6185F8";
		game.load.spritesheet('estudante', 'estudante.png', 36, 48);
		game.load.image('textura', 'TileMario.png');
		game.load.tilemap('fase1', 'level1.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.spritesheet('estudante', 'estudante.png', 21, 29);
		game.load.spritesheet('moeda', 'coin.png', 32, 32)
	};

	
	this.create = function () {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		cenario = game.add.tilemap('fase1');
		cenario.addTilesetImage('textura');
		cenario.setCollisionByExclusion([70, 80, 111, 315, 316, 317, 348, 349, 350, 513, 514, 515, 546, 547, 548, 669, 670, 671 ]);
		boneco = game.add.sprite(400, 500, 'estudante');		
		game.camera.follow(boneco);
		camada = cenario.createLayer('Tile Layer 1');
		camada.resizeWorld();
		
		
		
		game.physics.arcade.enable(boneco, Phaser.Physics.ARCADE);
		boneco.body.collideWorldBounds = true;
		boneco.body.gravity.y = 500;
		boneco.body.bounce.x = 0.15;
		boneco.body.bounce.y = 0.3;
		boneco.animations.add("mov_esquerda", [4, 3, 2, 1, 0], 6, true);
		boneco.animations.add("mov_direita", [6, 7, 8, 9, 10], 6, true);
		boneco.animations.add("parado", [5], 1, true);
		boneco.animations.add("pulando_esq", [7], 2, true);
		boneco.body.maxVelocity.x = 500;
		boneco.body.drag.x = 5000;
		cenario.setCollisionByExclusion([70, 80, 111, 315, 316, 317, 348, 349, 350, 669, 670, 671 ]);
		
		setas = game.input.keyboard.createCursorKeys();
		tecla_pulo = setas.up;
		tecla_pulo.onDown.add(pular);
		
		moedas = game.add.group();
		moedas.enableBody = true;
		moedas.physicsBodyType = Phaser.Physics.ARCADE;
		criarMoeda(1168, 1424);
		criarMoeda(688, 80);
		criarMoeda(80, 880);
		
		fadeIn();
	};
	
		function criarMoeda(x, y) {
		var moeda = game.add.sprite(x, y, 'moeda');
		moedas.add(moeda);
		game.physics.arcade.enable(moeda);			
		moeda.animations.add("girando", [0, 1, 2, 3, 4, 5], 10, true);
		moeda.animations.play("girando");
		moeda.body.immovable = true;
	}
		function coletouMoeda(player, moeda) {
			moeda.kill();
		}
	
	this.update = function () {
		game.physics.arcade.overlap(boneco, moedas, coletouMoeda);
		game.physics.arcade.collide(boneco, camada);

		if (setas.left.isDown) {
			boneco.body.acceleration.x = -3000;
			boneco.animations.play("mov_esquerda");
			} else {
				if (setas.right.isDown) {
					boneco.body.acceleration.x = 3000;
					boneco.animations.play("mov_direita");
					} else {
						boneco.body.acceleration.x = 0;
						boneco.animations.play("parado");
						} 
				}
		if (setas.up.isDown && boneco.body.onFloor() || boneco.body.touching.down) {
		boneco.body.velocity.y = -400;
		if (setas.up.isDown) {
			boneco.animations.play("pulando_esq")
			}
		}
		
	};
	
	function pular() {
				
		if (dude.body.onFloor() || dude.body.touching.down) {
			dude.body.velocity.y = -500;
		}
		
	}
	
}
