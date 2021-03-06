GameSceneIniter = function(scene) {
    var SCENE = scene;
  
    //Resource Image 들을 load
    var _loadImageResource = function() {
        SCENE.load.setBaseURL('../');

        SCENE.load.image('grill', 'images/grill.png')
        SCENE.load.image('background', 'images/table.jpg')

        SCENE.load.spritesheet('fires', 'images/fires.png',
            { frameWidth: 297, frameHeight: 356 });
        SCENE.load.spritesheet('meatF', 'images/meatF.png',
            { frameWidth: 474, frameHeight: 327 });
        SCENE.load.spritesheet('meatB', 'images/meatB.png',
            { frameWidth: 474, frameHeight: 327 });

    }

    //스프라이트 추가
    var _addSprite = function() {
        SCENE.table =
            SCENE.add.sprite(400, 300, 'background')
                .setName('background')
                .setScale(1.2)
                .setInteractive();

        SCENE.grill =
            SCENE.physics.add.sprite(400, 200, 'grill')
                .setName('grill')
                .setOrigin(0.5, 0.5)
                .setScale(2)
                .setInteractive();

        SCENE.fire =
            SCENE.add.sprite(400, 550, 'fires')
                .setOrigin(0.5, 1)
                .setScale(1);

        SCENE.meat =
            SCENE.add.sprite(400, 200, 'meatF')
                .setOrigin(0.5, 0.5)
                .setName('meat')
                .setScale(0.6)
                .setVisible(false)
                .setActive(false)
                .setInteractive();

        SCENE.scoreText =
            SCENE.add.text(16, 50, 'Score: 0',
                { fontSize: '32px', fill: '#000' });
    }
  
    var _createAnims = function() {
        SCENE.anims.create({
            key: 'fireAnim1',
            frames: SCENE.anims.generateFrameNumbers('fires', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });

        SCENE.anims.create({
            key: 'fireAnim2',
            frames: SCENE.anims.generateFrameNumbers('fires', { start: 2, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        SCENE.anims.create({
            key: 'fireAnim3',
            frames: SCENE.anims.generateFrameNumbers('fires', { start: 4, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        SCENE.anims.create({
            key: 'meatFAnim',
            frames: SCENE.anims.generateFrameNumbers('meatF', { start: 0, end: 2 }),
            frameRate: 1,
            repeat: 0
        });

        SCENE.anims.create({
            key: 'meatBAnim',
            frames: SCENE.anims.generateFrameNumbers('meatB', { start: 0, end: 2 }),
            frameRate: 1,
            repeat: 0
        });
    }

    return {
        loadImageResource : _loadImageResource,
        addSprite : _addSprite,
        createAnims : _createAnims
    };
  
};