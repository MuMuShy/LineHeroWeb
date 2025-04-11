import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-preview.component.html',
  styleUrls: ['./web-preview.component.scss']
})
export class WebPreviewComponent {
  previews = [
    {
      title: '強化系統',
      description: '直觀的裝備強化介面，清晰的效果預覽',
      image: '/assets/images/enhance.webp'
    },
    {
      title: '世界Boss',
      description: '即時多人協作，共同挑戰強大Boss',
      image: '/assets/images/boss_girl2.webp'
    },
    {
      title: '自由市場',
      description: '自由交易系統，建立玩家經濟',
      image: '/assets/images/trade.webp'
    },
    {
      title: '排行榜',
      description: '查看即時更新的玩家排行榜，爭奪最強玩家寶座',
      image: '/assets/images/ranking.webp'
    }
  ];
}
