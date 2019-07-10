import { Component, OnInit } from '@angular/core';
import { queslists } from '../ques_list';
declare var $;

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  randomCount;
  quesname = {};
  queslist = queslists;
  stepCount = 0; // 횟수 카운트
  resultCount = 0; // 정답 카운트
  resultText: string;

  constructor() { }

  ngOnInit() {
    this.qzStart();
  }

  // 랜덤 문제 가져오기 중복되지 않게
  qzStart() {
    this.randomCount = Math.floor(Math.random() * 20) + 1;
    this.quesname = this.queslist[this.randomCount].name;
    this.stepCount++; // 시작 하면 1 번으로;
    if (this.resultCount === 3) {
      $('#exampleModal').modal('show');
    }
  }

  // o x 판단 받기
  result(info) {
    const ox = this.queslist[this.randomCount].result;
    if (info === ox) {
      this.resultText = "성공 ^^ !!!";
      this.resultCount++;
    } else {
      this.resultText = "실패 :''ㅠ_ㅠ''!!!";
    }
    this.qzStart();
  }

  rendomList(min, max) {
    let result;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }

  //페이지 새로 고침
  refresh() {
    window.location.reload()
  }

}
