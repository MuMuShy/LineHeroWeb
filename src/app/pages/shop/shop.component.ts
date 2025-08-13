// src/app/pages/shop/shop.component.ts
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HomeNavComponent } from '../../components/home-nav.component';
interface BenefitCategory {
  title: string;
  emoji: string;
  benefits: string[];
}

interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
  category: 'giftpack' | 'membership';
  iframe?: string;
  details?: {
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
  
  // 跟踪每个iframe的加载状态
  iframeLoaded: { [key: string]: boolean } = {};
  
  categories: { id: 'giftpack' | 'membership'; name: string }[] = [
    { id: 'membership', name: '會員服務' },
    { id: 'giftpack', name: '遊戲禮包' }
  ];

  products: Product[] = [
    // 會員服務
    {
      id: 'legendary-adventurer-10',
      name: '傳奇冒險者10天體驗',
      category: 'membership',
      iframe: 'https://portaly.cc/embed/linehero/product/K87gPfXzBlnqapOVIT2U'
    },
    {
      id: 'legendary-adventurer-30',
      name: '傳奇冒險者30日',
      category: 'membership',
      iframe: 'https://portaly.cc/embed/linehero/product/BJ6fKVchaOTYzjbV1F2S'
    },
    // 遊戲禮包
    {
      id: 'newbie-rush-pack',
      name: '新手衝刺包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/iie59PCDSmIh1cNUydl7'
    },
    {
      id: 'unlimited-gacha',
      name: '轉蛋卷無限禮包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/v0im6aFUTrP6QfeuegAZ'
    },
    {
      id: 'unlimited-enhance',
      name: '強化無限禮包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/3fvTqYZHAHx6iMDRFNLf'
    },
    {
      id: 'ultimate-sweep',
      name: '終極掃蕩包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/FuviG8ZqfdBc1Kxg606w'
    },
    {
      id: 'unlimited-refine',
      name: '精煉無限禮包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/9rhWeWDoIeCJITygF0JM'
    },
    {
      id: 'gacha-ticket',
      name: '轉蛋卷禮包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/biLsHc5F2VJN5fTaUHcd'
    },
    {
      id: 'crystal-pack',
      name: '結晶石禮包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/eqYklKP67mIJVAPzzGfY'
    },
    {
      id: 'sweep-scroll',
      name: '掃蕩卷禮包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/RNev3taFtvBlfEUkijj3'
    },
    {
      id: 'transfer-scroll',
      name: '轉移卷禮包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/589dRRiJrxi86YaVpZLG'
    },
    {
      id: 'refine-gift',
      name: '精煉大禮包',
      category: 'giftpack',
      iframe: 'https://portaly.cc/embed/linehero/product/ffBwxUNITAJ2MU1sFBjE'
    }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.title.setTitle('LINE Hero 商城 - Patreon 會員與遊戲禮包');
    this.meta.updateTag({ 
      name: 'description', 
      content: '加入 LINE Hero Patreon 會員，享受專屬特權與豐富獎勵。立即購買遊戲禮包，體驗更多遊戲樂趣！' 
    });
    
    // 初始化所有iframe的加载状态为false
    this.products.forEach(product => {
      this.iframeLoaded[product.id] = false;
    });
  }

  get filteredProducts(): Product[] {
    return this.products.filter(p => p.category === this.currentCategory);
  }

  setCategory(category: 'giftpack' | 'membership') {
    this.currentCategory = category;
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

  getSafeUrl(url: string | undefined): SafeResourceUrl {
    if (!url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onIframeLoad(productId: string) {
    this.iframeLoaded[productId] = true;
  }
}