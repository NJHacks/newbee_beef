GameSceneIniter = function(scene) {
    var SCENE = scene;
    var GAMEOVER = false;

    //Resource Image 들을 load
    var _loadImageResource = function() {
        SCENE.load.setBaseURL('../');

        SCENE.load.image('grill', 'images/grill.png');
        SCENE.load.image('background', 'images/table.jpg');

        SCENE.load.spritesheet('fires', 'images/fires.png',
            { frameWidth: 297, frameHeight: 356 });
        SCENE.load.spritesheet('meatF', 'images/meatF.png',
            { frameWidth: 474, frameHeight: 327 });
        SCENE.load.spritesheet('meatB', 'images/meatB.png',
            { frameWidth: 474, frameHeight: 327 });

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

    var _addTimer = function() {
        SCENE.startTime = new Date();
        SCENE.totalTime = 12;
        SCENE.timeElapsed = 0;

        createTimer();

        SCENE.gameTimer = SCENE.time.addEvent({
            delay : 1000,
            loop : true,
            callback : updateTimer,
            callbackScope : this
        });
    }

    var createTimer = function () {
        SCENE.timeLabel = SCENE.add.text(400, 50, "00:00", {font: "100px Arial", fill: "#fff"});
        SCENE.timeLabel.setOrigin(0.5, 0);
        SCENE.timeLabel.align = 'center';
    };

    var updateTimer = function () {
        if(SCENE.timeElapsed < SCENE.totalTime) {
            var currentTime = new Date();
            var timeDifference = SCENE.startTime.getTime() - currentTime.getTime();

            //Time elapsed in seconds
            SCENE.timeElapsed = Math.abs(timeDifference / 1000);

            //Time remaining in seconds
            var timeRemaining = SCENE.totalTime - SCENE.timeElapsed;

            //Convert seconds into minutes and seconds
            var minutes = Math.floor(timeRemaining / 60);
            var seconds = Math.floor(timeRemaining) - (60 * minutes);

            //Display minutes, add a 0 to the start if less than 10
            var result = (minutes < 10) ? "0" + minutes : minutes;

            //Display seconds, add a 0 to the start if less than 10
            result += (seconds < 10) ? ":0" + seconds : ":" + seconds;

            if(minutes == 0 && seconds ==0) {
                GAMEOVER = true;
                SCENE.timeLabel.setText("00:00");
                console.log("Time up!");
                alert("GAME OVER!");
            } if(minutes >= 0 && seconds > 0) {
                    SCENE.timeLabel.setText(result);
            }
        }
    };


    return {
        loadImageResource : _loadImageResource,
        addSprite : _addSprite,
        createAnims : _createAnims,
        addTimer : _addTimer
    };
  
};