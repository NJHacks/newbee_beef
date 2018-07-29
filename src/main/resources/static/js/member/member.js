import BeefType from "../beef/beefType";
import MemberRankConfig from "./memberRankConfig";

class Member {
    constructor() {
        //default
        //need : 원하는 고기
        this.nowMemberList = [
            {"idx": 0, "name" : "사원", "score" : 5, "need" : BeefType.WELDON, "date" : new Date()},
            {"idx": 1, "name" : "사원", "score" : 5, "need" : BeefType.RARE, "date" : new Date()},
            {"idx": 2, "name" : "사원", "score" : 5, "need" : BeefType.WELDON, "date" : new Date()}
        ];
    }

    //레벨을 보내면 해당 레벨에 맞게 자리를 다시 셋팅
    //경락이는 레벨업을 하면 레벨업에 대한 UI작업 하고 여기를 호출하면 됨
    init(level){
        let newMemberList = MemberRankConfig.randomMemberList(level);
        for(let i = 0 ; i < newMemberList.length ; i++){
            newMemberList[i]["need"] = BeefType.randomBeefType();
            newMemberList[i]["date"] = new Date();
        }

        this.nowMemberList = newMemberList;

        //@todo UI : 레벨업을 하여서 사람들 바뀐 모습
    }

    //beefType을 보내면 해당 type에 맞는 사람을 먹이고, 점수를 보냄
    //인영이는 고기가 앞뒤로 다 구워지면 여기를 호출하면 됨
    eat(beefType){
        let matchList = [];
        for(let i = 0 ; i < this.nowMemberList.length ; i++){
            if(this.nowMemberList[i].need === beefType){
                matchList.push(this.nowMemberList[i]);
            }
        }
        if(matchList.length == 0){
            //매칭되는 고기 굽기가 없음
            //@todo UI : 화난 사람들

            return;
        }

        let idx = 0;
        let date = matchList[0].date;
        for(let i = 1 ; i < matchList.length; i++){
            if(matchList[i].date < date){
                idx = i;
                date = matchList[i].date;
            }
        }

        //@todo UI : idx번째 사람이 먹고 새로 요청 함
        this.nowMemberList[idx].need = BeefType.randomBeefType();

        //@todo 경락이한테 이 스코어를 던져야함
        console.log(this.nowMemberList[idx].score);
    }
}

export default Member;


