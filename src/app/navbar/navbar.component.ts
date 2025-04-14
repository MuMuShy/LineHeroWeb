import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav [class.scrolled]="isScrolled" class="navbar">
      <div class="nav-logo">
        <img src="/assets/images/linehero.png" alt="遊戲標誌" class="nav-logo-img">
      </div>
      <div class="hamburger" (click)="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="nav-links" [class.active]="isMenuOpen">
        <li><a href="#home" (click)="scrollToSection($event, 'home')">首頁</a></li>
        <li><a href="#intro" (click)="scrollToSection($event, 'intro')">遊戲介紹</a></li>
        <li><a href="#equipment" (click)="scrollToSection($event, 'equipment')">裝備系統</a></li>
        <li><a href="#partners" (click)="scrollToSection($event, 'partners')">夥伴系統</a></li>
        <li><a href="#boss" (click)="scrollToSection($event, 'boss')">世界Boss</a></li>
        <li><a href="#community" (click)="scrollToSection($event, 'community')">社群</a></li>
        <li><a href="/shop">商城</a></li>
      </ul>
      <div class="nav-cta">
        <a href="https://lin.ee/3JlUhak"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友立即遊玩" height="36" border="0"></a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      cursor: pointer;
      z-index: 1001;

      span {
        display: block;
        height: 3px;
        width: 100%;
        background: white;
        transition: all 0.3s ease;
      }

      &.active {
        span {
          &:first-child {
            transform: rotate(45deg) translate(6px, 6px);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:last-child {
            transform: rotate(-45deg) translate(6px, -6px);
          }
        }
      }
    }

    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(10px);
        padding: 0.5rem;
        flex-direction: column;
        align-items: center;
        transform: translateY(-150%);
        opacity: 0;
        transition: all 0.3s ease;
        pointer-events: none;
        max-height: calc(100vh - 79px);
        overflow-y: auto;
        border-top: 1px solid rgba(255, 255, 255, 0.1);

        &.active {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        li {
          margin: 0.3rem 0;
          width: 100%;
          text-align: center;
          
          a {
            font-size: 1rem;
            color: white;
            display: block;
            padding: 0.5rem;
            
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              border-radius: 8px;
            }
          }
        }
      }
    }

    .navbar.scrolled {
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      height: 70px;
    }

    .nav-logo {
      flex: 0 0 auto;
    }

    .nav-logo-img {
      height: 40px;
      width: auto;
      transition: all 0.3s ease;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: #7c5ec6;
      transition: all 0.3s ease;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-cta {
      flex: 0 0 auto;
    }

    .line-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      background: #00B900;
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    .line-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 185, 0, 0.3);
    }

    .line-icon {
      width: 24px;
      height: 24px;
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}