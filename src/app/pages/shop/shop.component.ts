// src/app/pages/shop/shop.component.ts
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeNavComponent } from '../../components/home-nav.component';
interface BenefitCategory {
  title: string;
  emoji: string;
  benefits: string[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'giftpack' | 'membership';
  details: {
    items?: Array<{
      name: string;
      quantity: number;
    }>;
    duration?: number;
    benefits?: BenefitCategory[];
  };
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,HomeNavComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  currentCategory: 'giftpack' | 'membership' = 'membership';
  currentPriceFilter: number | null = null;
  
  categories: { id: 'giftpack' | 'membership'; name: string }[] = [
    { id: 'membership', name: '會員服務' },
    { id: 'giftpack', name: '遊戲禮包' }
  ];

  priceCategories = [
    { price: 300, label: 'NT$ 300' },
    { price: 2990, label: 'NT$ 2,990' }
  ];

  products: Product[] = [
    {
      id: 'legendary-adventurer',
      name: '傳奇冒險者會員',
      description: '解鎖全部遊戲特權，享受雙倍獎勵！立即體驗VIP級遊戲體驗 購買當日立即獲得傳奇冒險者禮包*1',
      price: 300,
      image: 'assets/images/test3.webp',
      category: 'membership',
      details: {
        duration: 30,
        benefits: [
          {
            title: '遊戲資源加成',
            emoji: '📊',
            benefits: [
              '經驗值獲取 <strong>+100%</strong> <span class="bonus">2倍</span>',
              '金幣獲取 <strong>+100%</strong> <span class="bonus">2倍</span>',
              '掉落率 <strong>+100%</strong> <span class="bonus">2倍</span>'
            ]
          },
          {
            title: '副本特權升級',
            emoji: '🎯',
            benefits: [
              '每日副本次數 <strong>9次</strong> <span class="bonus">3倍</span>',
              '專屬一鍵掃蕩功能 <span class="bonus">VIP</span>',
              'BOSS寶箱掉落 <strong>+100%</strong> <span class="bonus">2倍</span>'
            ]
          },
          {
            title: '交易所特權',
            emoji: '💰',
            benefits: [
              '可販售精煉魂魄 <span class="bonus">解鎖</span>',
              '可販售已精鍊裝備 <span class="bonus">解鎖</span>'
            ]
          },
          {
            title: '探險隊強化',
            emoji: '🌟',
            benefits: [
              '探索隊伍數 <strong>3隊</strong> <span class="bonus">+1隊</span>',
              '探索資源 <strong>+20%</strong> <span class="bonus">加成</span>',
              '探索累積時間 <strong>24小時</strong> <span class="bonus">2倍</span>'
            ]
          },
          {
            title: '每日特權',
            emoji: '🎁',
            benefits: [
              '傳奇簽到獎勵 <span class="bonus">升級</span>',
              '每月簽到禮包 <strong>1000</strong> <span class="bonus">贈送</span>'
            ]
          },
          {
            title: '專屬特權',
            emoji: '👑',
            benefits: [
              '傳奇冒險者稱號 <span class="bonus">限定</span>',
              '個人資料特效 <span class="bonus">限定</span>',
              'Discord專屬身分組 <span class="bonus">VIP</span>'
            ]
          }
        ]
      }
    },
    // NT$300 禮包
    {
      id: 'refine-gift',
      name: '精煉大禮包',
      description: '豐富的精煉資源包，助您快速提升裝備！',
      price: 300,
      image: 'https://mumu.tw/linehero/images/gifts/soulspackage_small.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '精煉魂魄', quantity: 10000 },
          { name: '四屬結晶石', quantity: 200 },
          { name: '強化精煉轉移卷', quantity: 1 }
        ]
      }
    },
    {
      id: 'transfer-scroll',
      name: '轉移卷禮包',
      description: '包含多張轉移卷軸，完美保留您的強化成果！',
      price: 300,
      image: 'https://mumu.tw/linehero/images/gifts/treasures/scroll_treasure_smalls.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '強化精煉轉移卷', quantity: 5 }
        ]
      }
    },
    {
      id: 'gold-pack',
      name: '金幣禮包',
      description: '大量金幣等您拿！',
      price: 300,
      image: 'https://mumu.tw/linehero/images/gifts/treasures/coin_small.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '金幣', quantity: 1500000 }
        ]
      }
    },
    {
      id: 'sweep-scroll',
      name: '掃蕩卷禮包',
      description: '快速完成副本，節省寶貴時間！',
      price: 300,
      image: 'https://mumu.tw/linehero/images/gifts/treasures/sweep_gifts.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '掃蕩卷', quantity: 1500 }
        ]
      }
    },
    {
      id: 'crystal-pack',
      name: '結晶石禮包',
      description: '提升角色屬性的必備道具！',
      price: 300,
      image: 'https://mumu.tw/linehero/images/gifts/stone_gift.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '基礎血量結晶石', quantity: 25 },
          { name: '四屬中階結晶石', quantity: 100 }
        ]
      }
    },
    {
      id: 'gacha-ticket',
      name: '轉蛋卷禮包',
      description: '抽取稀有道具的機會！',
      price: 300,
      image: 'https://mumu.tw/linehero/images/gifts/ticket_treasure.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '轉蛋卷', quantity: 10 }
        ]
      }
    },
    {
      id: 'enhance-pack',
      name: '強化大禮包',
      description: '全面提升實力的完美組合！',
      price: 300,
      image: 'https://mumu.tw/linehero/images/gifts/treasures/enhance.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '精煉魂魄', quantity: 6000 },
          { name: '金幣', quantity: 8000000 }
        ]
      }
    },
    // NT$2990 禮包
    {
      id: 'unlimited-refine',
      name: '精煉無限禮包',
      description: '超大量精煉資源，打造最強裝備！',
      price: 2990,
      image: 'https://mumu.tw/linehero/images/gifts/soulspackage_small.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '精煉魂魄', quantity: 120000 },
          { name: '四屬中階結晶石', quantity: 1000 },
          { name: '基礎血量結晶石', quantity: 300 },
          { name: '強化精煉轉移卷', quantity: 10 }
        ]
      }
    },
    {
      id: 'ultimate-sweep',
      name: '終極掃蕩包',
      description: '海量掃蕩卷，一次滿足！',
      price: 2990,
      image: 'https://mumu.tw/linehero/images/gifts/treasures/sweep_gifts.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '掃蕩卷', quantity: 19000 }
        ]
      }
    },
    {
      id: 'unlimited-enhance',
      name: '強化無限禮包',
      description: '極致強化資源，打造傳說裝備！',
      price: 2990,
      image: 'https://mumu.tw/linehero/images/gifts/treasures/ulti_enhance%20(1).png',
      category: 'giftpack',
      details: {
        items: [
          { name: '精煉魂魄', quantity: 60000 },
          { name: '金幣', quantity: 120000000 }
        ]
      }
    },
    {
      id: 'unlimited-gacha',
      name: '轉蛋卷無限禮包',
      description: '大量轉蛋機會，收集稀有道具！',
      price: 2990,
      image: 'https://mumu.tw/linehero/images/gifts/ticket_unlimited_treasure.png',
      category: 'giftpack',
      details: {
        items: [
          { name: '轉蛋卷', quantity: 160 }
        ]
      }
    },
  ];

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle('LINE Hero 商城 - Patreon 會員與遊戲禮包');
    this.meta.updateTag({ 
      name: 'description', 
      content: '加入 LINE Hero Patreon 會員，享受專屬特權與豐富獎勵。立即購買遊戲禮包，體驗更多遊戲樂趣！' 
    });
  }

  get filteredProducts(): Product[] {
    return this.products.filter(p => {
      const categoryMatch = p.category === this.currentCategory;
      const priceMatch = this.currentPriceFilter === null || p.price === this.currentPriceFilter;
      return categoryMatch && priceMatch;
    });
  }

  setCategory(category: 'giftpack' | 'membership') {
    this.currentCategory = category;
    this.currentPriceFilter = null; // 切換分類時重置價格篩選
  }

  setPriceFilter(price: number | null) {
    this.currentPriceFilter = price;
  }

  buyProduct(product: Product, toCrm: boolean = false) {
    if (toCrm) {
        window.location.href = 'https://lin.ee/MZy1CZo';
        return;
    }
    if (product.category === 'membership') {
      window.location.href = 'https://www.patreon.com/c/linehero/membership';
    } else {
      // 處理一般禮包購買邏輯
      window.location.href = 'https://www.patreon.com/c/linehero/shop';
      console.log('購買產品:', product);
    }
  }

  getSubBenefits(categoryBenefit: string, allBenefits: string[]): string[] {
    const startIndex = allBenefits.indexOf(categoryBenefit);
    const result: string[] = [];
    
    for (let i = startIndex + 1; i < allBenefits.length; i++) {
      const benefit = allBenefits[i];
      if (!benefit.includes('•')) break;
      result.push(benefit);
    }
    
    return result;
  }
}