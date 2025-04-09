import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav [class.scrolled]="isScrolled" class="navbar">
      <div class="nav-logo">
        <img src="/assets/images/linehero.png" alt="遊戲標誌" class="nav-logo-img">
      </div>
      <ul class="nav-links">
        <li><a href="#home" (click)="scrollToSection($event, 'home')">首頁</a></li>
        <li><a href="#intro" (click)="scrollToSection($event, 'intro')">遊戲介紹</a></li>
        <li><a href="#equipment" (click)="scrollToSection($event, 'equipment')">裝備系統</a></li>
        <li><a href="#partners" (click)="scrollToSection($event, 'partners')">夥伴系統</a></li>
        <li><a href="#boss" (click)="scrollToSection($event, 'boss')">世界Boss</a></li>
        <li><a href="#community" (click)="scrollToSection($event, 'community')">社群</a></li>
      </ul>
      <div class="nav-cta">
        <!-- <a href="https://line.me" target="_blank" rel="noopener" class="line-btn">
          <img src="/assets/images/line-icon.png" alt="LINE" class="line-icon">
          立即遊玩
        </a> -->
        <a href="https://lin.ee/hI9teY5"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="立即遊玩" height="36" border="0"></a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
      background: transparent;
      transition: all 0.3s ease;
      z-index: 1000;
    }

    .navbar.scrolled {
      background: rgba(0, 0, 0, 0.9);
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

    @media (max-width: 768px) {
      .navbar {
        padding: 0 20px;
      }

      .nav-links {
        display: none;
      }

      .nav-logo-img {
        height: 30px;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}