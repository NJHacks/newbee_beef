class GameScene extends Phaser.Scene {
    constructor(){
        super();
        this._val = {
            score : 0, //점수
            fireStatus : 1, // 불단계
            meats : [{
                        meatStatus : 'F', // 앞, 뒤
                        meatFStatus : 0, // 앞굽기상태
                        meatBStatus : 0, // 뒤굽기상태
            },{
                        meatStatus : 'F', // 앞, 뒤
                        meatFStatus : 0, // 앞굽기상태
                        meatBStatus : 0, // 뒤굽기상태
            },{
                        meatStatus : 'F', // 앞, 뒤
                        meatFStatus : 0, // 앞굽기상태
                        meatBStatus : 0, // 뒤굽기상태
            }],
            frameUpdateCnt : 0, // 이동 프레임 수
            fireTouchCnt : 0, // 불 클릭 수
        };   
        this._drawIniter = new GameSceneIniter(this);
    }

    _initInput() {
        this.table.on('pointerdown', this.clickTableObject, this);
        this.grill[0].on('pointerdown', this.clickGrill1Object, this);
        this.grill[1].on('pointerdown', this.clickGrill2Object, this);
        this.grill[2].on('pointerdown', this.clickGrill3Object, this);
        this.meat[0].on('pointerdown', this.clickMeat1Object, this);
        this.meat[1].on('pointerdown', this.clickMeat2Object, this);
        this.meat[2].on('pointerdown', this.clickMeat3Object, this);
    }

    preload() {
        this._drawIniter.loadImageResource();
    }

    create() {
        this._drawIniter.addSprite();
        this._drawIniter.createAnims();
        this._initInput();
        this.fire.anims.play('fireAnim1')
    }

    update() {
        this._val.frameUpdateCnt++;
        if(this._val.frameUpdateCnt >= 300) {
            this._val.frameUpdateCnt = 0;
            this._val.fireTouchCnt = 0;
            
            if(this._val.fireStatus > 1) {
                this._val.fireStatus --;
            }
            this.fire.anims.play('fireAnim' + this._val.fireStatus, true);
        }
    }

    clickTableObject() {
        this._val.fireTouchCnt = this._val.fireTouchCnt + 1;
        if (this._val.fireTouchCnt >= 9) {
            this._val.fireTouchCnt = 0;
            this._val.frameUpdateCnt = 0;

            if (this._val.fireStatus < 3) {
                this._val.fireStatus++;
            }
            console.log("fireStatus" + (this._val.fireStatus));
            this.fire.anims.play('fireAnim' + this._val.fireStatus, true);
        }
    }

    clickGrill1Object() {
        if(!this.meat[0].active){
            this.meat[0].setVisible(true).setActive(true)
            this.meat[0].anims.play('meatFAnim', true);
        }
    }

    clickGrill2Object() {
        if(!this.meat[1].active){
            this.meat[1].setVisible(true).setActive(true)
            this.meat[1].anims.play('meatFAnim', true);
        }
    }

    clickGrill3Object() {
        if(!this.meat[2].active){
            this.meat[2].setVisible(true).setActive(true)
            this.meat[2].anims.play('meatFAnim', true);
        }
    }

    clickMeat1Object() {
        if (this._val.meats[0].meatStatus == 'F') {
            this._val.meats[0].meatFStatus = this.meat[0].anims.currentFrame.index;
            this.meat[0].anims.play('meatBAnim', true);
            this._val.meats[0].meatStatus = 'B';
        } else if (this._val.meats[0].meatStatus == 'B') {
            this._val.meats[0].meatBStatus = this.meat[0].anims.currentFrame.index;
            console.log("F : " + this._val.meats[0].meatFStatus + " B : " + this._val.meats[0].meatBStatus)
            this.meat[0].setVisible(false).setActive(false)
            this._val.meats[0].meatStatus = 'F';
            if (this._val.meats[0].meatFStatus == 3 && this._val.meats[0].meatBStatus == 3) {
                this._val.score += 10;
                this.scoreText.setText('Score: ' + this._val.score);
            }
        }
    }

    clickMeat2Object() {
        if (this._val.meats[1].meatStatus == 'F') {
            this._val.meats[1].meatFStatus = this.meat[1].anims.currentFrame.index;
            this.meat[1].anims.play('meatBAnim', true);
            this._val.meats[1].meatStatus = 'B';
        } else if (this._val.meats[1].meatStatus == 'B') {
            this._val.meats[1].meatBStatus = this.meat[1].anims.currentFrame.index;
            console.log("F : " + this._val.meats[1].meatFStatus + " B : " + this._val.meats[1].meatBStatus)
            this.meat[1].setVisible(false).setActive(false)
            this._val.meats[1].meatStatus = 'F';
            if (this._val.meats[1].meatFStatus == 3 && this._val.meats[1].meatBStatus == 3) {
                this._val.score += 10;
                this.scoreText.setText('Score: ' + this._val.score);
            }
        }
    }

    clickMeat3Object() {
        if (this._val.meats[2].meatStatus == 'F') {
            this._val.meats[2].meatFStatus = this.meat[2].anims.currentFrame.index;
            this.meat[2].anims.play('meatBAnim', true);
            this._val.meats[2].meatStatus = 'B';
        } else if (this._val.meats[2].meatStatus == 'B') {
            this._val.meats[2].meatBStatus = this.meat[2].anims.currentFrame.index;
            console.log("F : " + this._val.meats[2].meatFStatus + " B : " + this._val.meats[2].meatBStatus)
            this.meat[2].setVisible(false).setActive(false)
            this._val.meats[2].meatStatus = 'F';
            if (this._val.meats[2].meatFStatus == 3 && this._val.meats[2].meatBStatus == 3) {
                this._val.score += 10;
                this.scoreText.setText('Score: ' + this._val.score);
            }
        }
    }
}


  