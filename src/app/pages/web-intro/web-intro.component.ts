import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { WebFeaturesComponent } from './components/web-features/web-features.component';
import { WebPreviewComponent } from './components/web-preview/web-preview.component';
import { WebIntegrationComponent } from './components/web-integration/web-integration.component';

@Component({
  selector: 'app-web-intro',
  standalone: true,
  imports: [
    CommonModule, 
    WebFeaturesComponent, 
    WebPreviewComponent, 
    WebIntegrationComponent
  ],
  templateUrl: './web-intro.component.html',
  styleUrls: ['./web-intro.component.scss']
})
export class WebIntroComponent implements OnInit {
  features = [
    {
      icon: '⚔️',
      title: '強化系統',
      description: '透過直觀的介面強化你的裝備，預覽強化效果，打造最強裝備'
    },
    {
      icon: '👾',
      title: '世界Boss',
      description: '與其他玩家一同挑戰強大的世界Boss，獲取稀有獎勵'
    },
    {
      icon: '🏪',
      title: '自由市場',
      description: '在玩家交易市場自由買賣裝備、道具，建立穩定的遊戲經濟'
    },
    {
      icon: '🏆',
      title: '排行榜',
      description: '查看即時更新的玩家排行榜，爭奪最強玩家寶座'
    },
    {
      icon: '📊',
      title: '數據分析',
      description: '查看詳細的戰鬥數據、裝備分析，優化你的遊戲策略'
    }
  ];

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    // 設置頁面標題
    this.title.setTitle('LINE Hero 網頁功能 - 強化系統、世界Boss、自由市場');

    // 設置 Meta 標籤
    this.meta.addTags([
      // 基本 SEO meta 標籤
      { name: 'description', content: '探索LINE Hero的網頁進階功能：裝備強化系統、世界Boss戰鬥、自由市場交易、即時排行榜等豐富功能。透過LIFF技術實現無縫的遊戲體驗。' },
      { name: 'keywords', content: 'LINE Hero, LIFF, 網頁功能, 強化系統, 世界Boss, 自由市場, 排行榜, LINE遊戲, RPG遊戲' },
      { name: 'author', content: 'LINE Hero Team' },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph 標籤 (for Facebook, LINE)
      { property: 'og:title', content: 'LINE Hero 網頁功能 - 強化系統、世界Boss、自由市場' },
      { property: 'og:description', content: '探索LINE Hero的網頁進階功能：裝備強化系統、世界Boss戰鬥、自由市場交易、即時排行榜等豐富功能。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/assets/images/og-image.webp' },
      { property: 'og:url', content: 'https://your-domain.com/game-intro/web' },
      { property: 'og:site_name', content: 'LINE Hero' },
      
      // Twitter Card 標籤
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'LINE Hero 網頁功能 - 強化系統、世界Boss、自由市場' },
      { name: 'twitter:description', content: '探索LINE Hero的網頁進階功能：裝備強化系統、世界Boss戰鬥、自由市場交易。' },
      { name: 'twitter:image', content: '/assets/images/og-image.webp' },
      
      // 其他有用的 meta 標籤
      { name: 'theme-color', content: '#00c300' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Language', content: 'zh-TW' }
    ]);

    // 添加結構化數據
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "LINE Hero 網頁功能",
      "description": "探索LINE Hero的網頁進階功能：裝備強化系統、世界Boss戰鬥、自由市場交易",
      "publisher": {
        "@type": "Organization",
        "name": "LINE Hero",
        "logo": {
          "@type": "ImageObject",
          "url": "https://your-domain.com/assets/images/linehero.webp"
        }
      },
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "LINE Hero",
        "applicationCategory": "Game",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "TWD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "裝備強化系統",
          "世界Boss戰鬥",
          "自由市場交易",
          "即時排行榜",
          "數據分析"
        ]
      }
    };

    // 將結構化數據添加到頁面
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
