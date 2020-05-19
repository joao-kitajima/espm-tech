//var telas = ["menu","morte"];

var cenario;
var camada;
var boneco;
var setas;
var btnreset;

function menu() {
	
	this.preload = function () {		
		game.stage.backgroundColor = "#6185F8";
		game.load.tilemap('fase', 'fase.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('textura', 'supermario-textura.png');
		game.load.spritesheet('estudante', 'estudante.png', 36, 48);
		game.load.spritesheet('moeda', 'moeda.png', 32, 32);
		game.load.spritesheet("resetskin", "reset.png", 512, 512)
	};

	
	this.create = function () {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		cenario = game.add.tilemap('fase');
		cenario.addTilesetImage('textura');
		cenario.setCollisionByExclusion([70, 80, 111, 315, 316, 317, 348, 349, 350, 513, 514, 515, 546, 547, 548, 669, 670, 671 ]);
				
		camada = cenario.createLayer('camada-primaria');
		camada.resizeWorld();
		
		boneco = game.add.sprite(32, 1400, 'estudante');
		game.camera.follow(boneco);
		
		game.physics.arcade.enable(boneco, Phaser.Physics.ARCADE);
		boneco.body.collideWorldBounds = true;
		boneco.body.gravity.y = 500;
		boneco.body.bounce.x = 0.15;
		boneco.body.bounce.y = 0.3;
		boneco.body.maxVelocity.x = 300;
		boneco.body.drag.x = 500;
		
		boneco.animations.add("parado", [5], 1, true);
		boneco.animations.add("mov_esquerda", [3, 2, 1, 0], 6, true);
		boneco.animations.add("mov_direita", [7, 8, 9, 10], 6, true);
		boneco.animations.add("pulando_dir", [8], 2, true);
		
		setas = game.input.keyboard.createCursorKeys();
		
		moedas = game.add.group();
		moedas.enableBody = true;
		moedas.physicsBodyType = Phaser.Physics.ARCADE;
		criarMoeda(1168, 1424);
		criarMoeda(688, 80);
		criarMoeda(80, 880);
		
		btnreset = game.add.sprite(0, 0, "resetskin");
		btnreset.fixedToCamera = true;
		btnreset.cameraOffset.setTo(765,10);
		btnreset.inputEnabled = true;
		btnreset.input.useHandCursor = true;
		btnreset.events.onInputDown.add(morte);
		
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
		
		function coletouMoeda(boneco, moeda) {
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
				
		if (setas.up.isDown && (boneco.body.onFloor() || boneco.body.touching.down)) {
			boneco.body.velocity.y = -300;			
		}				
	};	
		
		function morte() {
			fadeOut(FimFadeOut);
		}
		function FimFadeOut() {
			game.state.start("morte");
		}
	
}
