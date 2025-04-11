import { Component, HostListener, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-background" [class.loaded]="backgroundLoaded"></div>
      <div class="hero-overlay">
        <div class="hero-content">
          <!-- <div class="logo-container">
            <img src="/assets/images/logo.webp" alt="Logo" class="game-logo">
          </div> -->
          <h1 class="hero-title">踏上冒險旅程</h1>
          <p class="hero-subtitle">不需安裝，LINE聊天視窗立即遊玩</p>
          <div class="cta-container">
            <button class="cta-button">
              <span class="button-text" (click)="openLineGame()">LINE立即遊戲</span>
              <div class="button-glow"></div>
            </button>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" [class.hidden]="isScrolled">
        <div class="mouse"></div>
        <span>向下滾動探索更多</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #1a1a1a; /* 加载前的背景色 */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: transform 0.3s ease-out, opacity 0.5s ease;
      will-change: transform;
      opacity: 0;
    }

    .hero-background.loaded {
      background-image: url('/assets/images/test4.webp');
      opacity: 1;
    }

    .hero:hover .hero-background.loaded {
      transform: scale(1.05);
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.4) 50%,
        rgba(0, 0, 0, 0.8)
      );
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .floating-elements {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .element {
      position: absolute;
      width: 100px;
      height: 100px;
      background-size: contain;
      background-repeat: no-repeat;
      animation: floatAnimation 4s ease-in-out infinite;
      opacity: 0.6;
    }

    .hero-content {
      text-align: center;
      color: white;
      padding: 2rem;
      max-width: 1200px;
      animation: fadeIn 1.5s ease-out;
    }

    .logo-container {
      margin-bottom: 2rem;
    }

    .game-logo {
      max-width: 400px;
      height: auto;
      animation: floatAnimation 6s ease-in-out infinite;
    }

    .hero-title {
      font-size: 4.5rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                   0 0 20px rgba(255, 255, 255, 0.3);
      letter-spacing: 4px;
      
      @media (max-width: 768px) {
        font-size: 2.8rem;
      }
    }

    .hero-subtitle {
      font-size: 1.8rem;
      margin-bottom: 3rem;
      line-height: 1.6;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      opacity: 0.9;
      
      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
    }

    .cta-container {
      position: relative;
      display: inline-block;
    }

    .cta-button {
      position: relative;
      padding: 1.2rem 3.5rem;
      font-size: 1.4rem;
      font-weight: bold;
      color: white;
      background: linear-gradient(135deg, #7c5ec6, #4a3b89);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50px;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
        background: linear-gradient(135deg, #8d6ed7, #5a4b99);
        .button-glow {
          opacity: 1;
        }
      }
      
      &:active {
        transform: translateY(0);
      }
    }

    .button-text {
      position: relative;
      z-index: 2;
    }

    .button-glow {
      position: absolute;
      top: -20%;
      left: -20%;
      width: 140%;
      height: 140%;
      background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0) 70%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      animation: glowPulse 2s infinite;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: white;
      opacity: 1;
      transition: opacity 0.3s ease, transform 0.3s ease;
      z-index: 10;
    }

    .scroll-indicator.hidden {
      opacity: 0;
      transform: translate(-50%, 20px);
      pointer-events: none;
    }

    .mouse {
      width: 30px;
      height: 50px;
      border: 2px solid white;
      border-radius: 15px;
      margin: 0 auto 10px;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 6px;
        height: 6px;
        background: white;
        border-radius: 50%;
        animation: scrollAnimation 2s infinite;
      }
    }

    @keyframes scrollAnimation {
      0% { transform: translate(-50%, 0); opacity: 1; }
      100% { transform: translate(-50%, 20px); opacity: 0; }
    }
  `]
})
export class HeroComponent implements OnInit {
  isScrolled = false;
  backgroundLoaded = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // 预加载背景图片
    const img = new Image();
    img.src = '/assets/images/test4.webp';
    img.onload = () => {
      this.backgroundLoaded = true;
    };
    
    // 使用Intersection Observer检测元素是否在视口中
    this.setupLazyLoading();
  }

  setupLazyLoading() {
    // 如果浏览器支持Intersection Observer
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // 当元素进入视口
          if (entry.isIntersecting) {
            // 如果图片还没加载，则加载图片
            if (!this.backgroundLoaded) {
              const img = new Image();
              img.src = '/assets/images/test4.webp';
              img.onload = () => {
                this.backgroundLoaded = true;
              };
            }
            // 停止观察
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 }); // 当10%的元素可见时触发

      // 开始观察hero元素
      observer.observe(this.el.nativeElement.querySelector('.hero'));
    } else {
      // 如果浏览器不支持Intersection Observer，直接加载
      this.backgroundLoaded = true;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  openLineGame() {
      window.open('https://lin.ee/hI9teY5', '_blank');
    }
}