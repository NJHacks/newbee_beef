class MemberRankConfig {
    static constructor() {
        //const
        this.memberRankConfigList= [
            {"idx": 0, "name": "사원", "score": 5, "levelUp": 0},
            {"idx": 1, "name": "대리", "score": 15, "levelUp": 500},
            {"idx": 2, "name": "과장", "score": 20, "levelUp": 1000},
            {"idx": 3, "name": "차장", "score": 25, "levelUp": 1500},
            {"idx": 4, "name": "부장", "score": 35, "levelUp": 3000},
            {"idx": 5, "name": "상무", "score": 50, "levelUp": 5000},
            {"idx": 6, "name": "전무", "score": 60, "levelUp": 8000},
            {"idx": 7, "name": "부사장", "score": 80, "levelUp": 12000},
            {"idx": 8, "name": "사장", "score": 100, "levelUp": 20000},
            {"idx": 9, "name": "부회장", "score": 120, "levelUp": 25000},
            {"idx": 10, "name": "회장", "score": 150, "levelUp": 30000},
        ];
    }

    //해당 레벨이 변수 키가 되어 3명이 골라짐
    //현재는 걍 랜덤
    static randomMemberList(level){
        let memberList = [];

        for(let i = 0; i < 3 ; i ++) {
            const key = Math.floor(Math.random() * this.memberRankConfigList.length);
            delete this.memberRankConfigList[key]("levelUp");

            memberList.push(this.memberRankConfigList[key]);
        }

        return memberList;
    }
}

export default MemberRankConfig;


