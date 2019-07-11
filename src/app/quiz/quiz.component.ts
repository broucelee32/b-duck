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
  quesObject = {};
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
    this.randomCount = Math.floor(Math.random() * 20);
    console.log(this.randomCount);
    this.quesObject = this.queslist[this.randomCount];
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
    switch (this.stepCount) {
      case 1 :
        if (info === ox) {
          $('.step_list span:nth-child(1)').addClass('succes');
        } else {
          $('.step_list span:nth-child(1)').addClass('fail');
        }
        break;
      case 2 :
        if (info === ox) {
          $('.step_list span:nth-child(2)').addClass('succes');
        } else {
          $('.step_list span:nth-child(2)').addClass('fail');
        }
        break;
      case 3 :
        if (info === ox) {
          $('.step_list span:nth-child(3)').addClass('succes');
        } else {
          $('.step_list span:nth-child(3)').addClass('fail');
        }
        break;
      case 4 :
        if (info === ox) {
          $('.step_list span:nth-child(4)').addClass('succes');
        } else {
          $('.step_list span:nth-child(4)').addClass('fail');
        }
        break;
      case 5 :
        if (info === ox) {
          $('.step_list span:nth-child(5)').addClass('succes');
        } else {
          $('.step_list span:nth-child(5)').addClass('fail');
        }
        break;
    }

    if (this.stepCount >= 5 ) {
      $('#exampleModal2').modal('show');
    } else {
      this.qzStart();
    }

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
