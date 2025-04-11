import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faGem,
  faDragon,
  faStore,
  faTrophy,
  faChartLine,
  faMap
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-web-features',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './web-features.component.html',
  styleUrls: ['./web-features.component.scss']
})
export class WebFeaturesComponent {
  features = [
    {
      icon: faGem,
      title: '強化系統',
      description: '透過直觀的介面強化你的裝備，預覽強化效果，打造最強裝備'
    },
    {
      icon: faDragon,
      title: '世界Boss',
      description: '與其他玩家一同挑戰強大的世界Boss，獲取稀有獎勵'
    },
    {
      icon: faStore,
      title: '自由市場',
      description: '在玩家交易市場自由買賣裝備、道具，建立穩定的遊戲經濟'
    },
    {
      icon: faTrophy,
      title: '排行榜',
      description: '查看即時更新的玩家排行榜，爭奪最強玩家寶座'
    },
    {
      icon: faChartLine,
      title: '數據分析',
      description: '查看詳細的戰鬥數據、裝備分析，優化你的遊戲策略'
    },
    {
        icon: faMap,
        title: '探險隊',
        description: '組成探險隊，派遣夥伴獲取掛機收益'
    }
  ];
}
