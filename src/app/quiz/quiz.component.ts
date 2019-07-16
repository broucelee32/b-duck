import { Component, OnInit } from '@angular/core';
import { queslists } from '../ques_list';
import { Router } from '@angular/router';
declare var $;

@Component({
 selector: 'app-quiz',
 templateUrl: './quiz.component.html',
 styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
 queslist = queslists; // 문제 리스트
 randomCount; // 랜덤으로 보여지는 문제
 quesObject: any; // 랜덤으로 골라진 객체;
 stepCount = 0; // 횟수 카운트;
 resultCount = 0; // 정답 카운트;
 notresultCount = 0; // 오답 카운트;
 resultText: string; // 성공 실패 텍스트 현재는 사용 안됨
 randomArry: any;
 nu = 0;

 constructor(private router: Router) {
  const rannuber2 = [];
  for (let i = 0; i < 8; i++) {
    const rannuber = Math.floor(Math.random() * 20);
     rannuber2.push(rannuber);
  }
  let ranresult = rannuber2.reduce(( a, b ) => {
    if( a.indexOf(b) < 0 ) a.push(b) ;
    return a ;
  }, []) ;
  this.randomArry = ranresult;
  console.log(this.randomArry);

  }

 ngOnInit() {
   this.qzStart();
 }

 // 랜덤 문제 가져오기 중복되지 않게
 qzStart() {
   this.randomCount = this.randomArry[this.nu];
   this.quesObject = this.queslist[this.randomCount];
   this.stepCount++; // 시작 하면 1 번으로;
 }

 // 메인 가기전
 goHome() {
   if (window.confirm('정말 비덕퀴즈를 끝내시겠습니까?')) {
     this.router.navigate(['/']);
   }
 }

 // o x 판단 받기
 result(info) {
   const ox = this.queslist[this.randomCount].result;
   if (info === ox) {
     this.resultCount++;
   } else {
    this.notresultCount++;
   }
   this.nu++; // 문제 index 증가
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
    if (this.resultCount === 3) {
      $('#exampleModal').modal('show');
    }
    if (this.notresultCount === 3) {
      $('#exampleModal2').modal('show');
    }
    if (this.stepCount >= 5) {
     if (this.resultCount === 3) {
      $('#exampleModal').modal('show');
     } else {
      $('#exampleModal2').modal('show');
     }
   } else {
     this.qzStart();
   }
 }
}
