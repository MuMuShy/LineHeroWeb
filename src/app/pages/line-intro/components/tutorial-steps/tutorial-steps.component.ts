import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorial-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutorial-steps.component.html',
  styleUrls: ['./tutorial-steps.component.scss']
})
export class TutorialStepsComponent {
  steps = [
    {
      number: 1,
      title: '加入官方帳號',
      description: '點擊按鈕或掃描QR code 加入LINE Hero官方帳號好友',
      hasButton: true,
      buttonText: '加入好友',
      buttonLink: 'https://lin.ee/hI9teY5'
    },
    {
      number: 2,
      title: '開始遊戲',
      description: '透過聊天視窗下方的選單選擇查看個人資料即可開始創建角色',
      hasButton: false
    },
    {
      number: 3,
      title: '展開冒險',
      description: '使用各種指令探索世界、戰鬥、收集裝備',
      hasButton: false
    }
  ];
}
