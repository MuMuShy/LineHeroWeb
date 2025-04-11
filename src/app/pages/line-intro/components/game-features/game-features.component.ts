import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faGamepad, 
  faUsers, 
  faBell, 
  faGift, 
  faDownload,
  faRegistered,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-features',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './game-features.component.html',
  styleUrls: ['./game-features.component.scss']
})
export class GameFeaturesComponent {
  features = [
    {
      icon: faGamepad,
      title: '簡單指令系統',
      description: '結合LINE Flex Message按鈕指令，讓遊戲操作更直覺'
    },
    {
      icon: faDownload,
      title: '不需安裝',
      description: '不需安裝任何APP，只要加入LINE官方帳號即可遊玩'
    },
    {
      icon: faIdCard,
      title: '不需註冊',
      description: '不需註冊任何帳號，只要加入LINE官方帳號即可遊玩，玩家的個人帳號資料安全的保留在LINE伺服器中'
    },
    {
      icon: faGift,
      title: '每日簽到獎勵',
      description: '每日登入即可領取獎勵，持續遊玩更有額外獎勵'
    }
  ];
}
