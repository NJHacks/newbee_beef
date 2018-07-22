class GameScene extends Phaser.Scene {
    constructor(){
        super();
        this._val = {
            score : 0, //점수
            fireStatus : 1, // 불단계
            meatStatus : 'F', // 앞, 뒤
            meatFStatus : 0, // 앞굽기상태
            meatBStatus : 0, // 뒤굽기상태
            frameUpdateCnt : 0, // 이동 프레임 수
            fireTouchCnt : 0, // 불 클릭 수 
        };   
        this._drawIniter = new GameSceneIniter(this);
    }

    _initInput() {
        this.table.on('pointerdown', this.clickTableObject, this);
        this.grill.on('pointerdown', this.clickGrillObject, this);
        this.meat.on('pointerdown', this.clickMeatObject, this);
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

    clickGrillObject() {
        if(!this.meat.active){
            this.meat.setVisible(true).setActive(true)
            this.meat.anims.play('meatFAnim', true);
        }
    }

    clickMeatObject() {
        if (this._val.meatStatus == 'F') {
            this._val.meatFStatus = this.meat.anims.currentFrame.index;
            this.meat.anims.play('meatBAnim', true);
            this._val.meatStatus = 'B';
        } else if (this._val.meatStatus == 'B') {
            this._val.meatBStatus = this.meat.anims.currentFrame.index;
            console.log("F : " + this._val.meatFStatus + " B : " + this._val.meatBStatus)
            this.meat.setVisible(false).setActive(false)
            this._val.meatStatus = 'F';
            if (this._val.meatFStatus == 2 && this._val.meatBStatus == 2) {
                this._val.score += 10;
                this.scoreText.setText('Score: ' + this._val.score);
            }
        }
    }
}


  