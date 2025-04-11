import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSimulatorComponent } from './components/chat-simulator/chat-simulator.component';
import { GameFeaturesComponent } from './components/game-features/game-features.component';
import { TutorialStepsComponent } from './components/tutorial-steps/tutorial-steps.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-line-intro',
  standalone: true,
  imports: [
    CommonModule,
    ChatSimulatorComponent,
    GameFeaturesComponent,
    TutorialStepsComponent
  ],
  templateUrl: './line-intro.component.html',
  styleUrls: ['./line-intro.component.scss']
})
export class LineIntroComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    // 設置頁面標題
    this.title.setTitle('LINE Hero無盡冒險 - 創新RPG聊天機器人遊戲');

    // 設置 Meta 標籤
    this.meta.addTags([
      { name: 'description', content: '在LINE中享受冒險樂趣，無需下載額外APP。透過對話互動進行探索、戰鬥、收集，立即開始你的冒險之旅！' },
      { name: 'keywords', content: 'LINE遊戲, RPG, 聊天機器人, LINE Hero, 冒險遊戲, 手機遊戲, LINE Bot' },
      { property: 'og:title', content: 'LINE Hero無盡冒險 - 創新RPG聊天機器人遊戲' },
      { property: 'og:description', content: '在LINE中享受冒險樂趣，無需下載額外APP。透過對話互動進行探索、戰鬥、收集，立即開始你的冒險之旅！' },
      { property: 'og:image', content: '/assets/images/linehero.webp' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'LINE Hero無盡冒險 - 創新RPG聊天機器人遊戲' },
      { name: 'twitter:description', content: '在LINE中享受冒險樂趣，無需下載額外APP。' },
      { name: 'twitter:image', content: '/assets/images/linehero.webp' }
    ]);

    // 添加結構化數據
    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "LINE Hero",
      "applicationCategory": "Game",
      "operatingSystem": "LINE",
      "description": "在LINE中展開冒險的RPG遊戲，結合聊天機器人的創新玩法",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TWD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "100"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
