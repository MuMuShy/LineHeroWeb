import { Component } from '@angular/core';

@Component({
  selector: 'app-office-games',
  template: `
    <div class="page-container">
        <header class="main-header">
        <a href="/" class="home-link">
        <img src="/assets/images/linehero.webp" 
            alt="LINE Hero 遊戲標誌" 
            class="header-logo"
            width="32"
            height="32"
            loading="eager">
        <span>首頁</span>
        </a>
    </header>
      <header class="page-header">
        <h1>上班也能玩的LINE遊戲：工作間隙的完美娛樂</h1>
        <p class="page-subtitle">不引人注目、隨時可暫停、一分鐘即可體驗的LINE文字冒險</p>
      </header>
      
      <section class="content-section">
        <h2>為什麼LINE文字遊戲是上班族的最佳選擇？</h2>
        <p>在繁忙的工作日中，我們都需要短暫的休息來恢復精力。LINE文字冒險遊戲憑藉其獨特的特性，成為上班族的理想選擇：</p>
        
        <div class="feature-grid">
          <div class="feature-card">
            <div class="icon"><i class="fas fa-eye-slash"></i></div>
            <h3>低調不引人注目</h3>
            <p>純文字介面看起來就像正常聊天，不會引起同事或主管的注意</p>
          </div>
          
          <div class="feature-card">
            <div class="icon"><i class="fas fa-pause"></i></div>
            <h3>隨時可暫停</h3>
            <p>收到工作任務？只需放下手機，遊戲會等待您的下一個指令</p>
          </div>
          
          <div class="feature-card">
            <div class="icon"><i class="fas fa-bolt"></i></div>
            <h3>快速遊戲體驗</h3>
            <p>短短時間即可完成一次戰鬥或任務，完美利用碎片時間</p>
          </div>
          
          <div class="feature-card">
            <div class="icon"><i class="fas fa-brain"></i></div>
            <h3>減輕工作壓力</h3>
            <p>輕鬆的遊戲體驗幫助緩解工作壓力，提高工作效率</p>
          </div>
        </div>
      </section>
      
      <!-- 遊戲截圖展示區 -->
      <section class="content-section">
        <h2>LINE Hero遊戲畫面展示</h2>
        <p>透過簡單的按鈕操作，在LINE聊天視窗中體驗完整的冒險遊戲：</p>
        
        <div class="game-screenshots">
          <div class="screenshot-item">
            <img src="/assets/images/demo1.jpg" alt="LINE Hero戰鬥畫面" class="screenshot-image">
            <div class="screenshot-caption">
              <h3>簡潔的戰鬥介面</h3>
              <p>透過按鈕選擇攻擊、技能或道具，享受簡單直覺的戰鬥體驗</p>
            </div>
          </div>
          
          <div class="screenshot-item">
            <img src="/assets/images/demo_map.jpg" alt="LINE Hero探索畫面" class="screenshot-image">
            <div class="screenshot-caption">
              <h3>豐富的探索世界</h3>
              <p>在工作間隙探索奇幻世界，發現寶藏和隱藏任務</p>
            </div>
          </div>
          
          <div class="screenshot-item">
            <img src="/assets/images/demo_character.jpg" alt="LINE Hero角色裝備畫面" class="screenshot-image">
            <div class="screenshot-caption">
              <h3>角色成長系統</h3>
              <p>收集裝備、提升技能，打造獨一無二的冒險角色</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="content-section">
        <h2>上班族最愛的LINE Hero遊戲模式</h2>
        
        <div class="game-mode">
          <h3>1. 快速冒險模式</h3>
          <p>只需點擊「前往冒險」按鈕，即可在5秒內完成一場小型冒險，獲得經驗和物品。完美適合電梯等待、短暫休息時間。</p>
        </div>
        
        <div class="game-mode">
          <h3>2. 自動探索隊伍系統</h3>
          <p>配置探索隊伍後，您可以專注工作，系統會在時間內持續探索蒐集素材。工作與遊戲兩不誤。</p>
        </div>
        
        <div class="game-mode">
          <h3>3. 世界Boss戰鬥</h3>
          <p>定期開放的世界Boss戰鬥，玩家可以組成隊伍挑戰，獲得豐厚的獎勵。</p>
        </div>
      </section>
      
      <!-- 遊戲實際操作展示 -->
      <section class="content-section">
        <h2>LINE Hero遊戲操作展示</h2>
        
        <div class="gameplay-demo">
          <div class="demo-item">
            <div class="demo-video-container">
              <video #videoPlayer class="demo-video" poster="/assets/images/test1.webp" controls>
                <source src="/assets/videos/gameplay.mp4" type="video/mp4">
                您的瀏覽器不支持視頻播放
              </video>
            </div>
            <div class="demo-description">
              <h3>簡單按鈕操作</h3>
              <p>透過LINE聊天視窗中的按鈕，輕鬆進行各種遊戲操作，無需記憶複雜指令</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="content-section">
        <h2>上班族遊戲攻略：如何在工作間隙享受遊戲</h2>
        
        <div class="tips-list">
          <div class="tip-item">
            <h3>利用碎片時間</h3>
            <p>等電梯、休息片刻時，打開LINE進行一場快速戰鬥，只需幾秒鐘即可完成</p>
          </div>
          
          <div class="tip-item">
            <h3>隨時可中斷</h3>
            <p>工作突然來電？只需放下手機，遊戲會自動等待，不會影響您的工作</p>
          </div>
          
          <div class="tip-item">
            <h3>低調遊玩</h3>
            <p>純文字介面看起來就像正常聊天，在辦公室環境中不引人注目</p>
          </div>
          
          <div class="tip-item">
            <h3>紓解工作壓力</h3>
            <p>短暫的遊戲時間能有效紓解工作壓力，讓您回到工作時更加專注</p>
          </div>
        </div>
      </section>
      
      <div class="cta-section">
        <h2>立即開始您的辦公室冒險</h2>
        <p>掃描下方QR碼或點擊按鈕，加入LINE Hero，體驗專為上班族設計的文字冒險！</p>
        <img src="https://qr-official.line.me/gs/M_765llgvq_GW.png?oat_content=qr" alt="LINE Hero QR碼" class="qr-code">
        <a href="https://lin.ee/eYmOP6z" class="cta-button">加入LINE Hero</a>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 20px;
      color: #fff;
    }
    
    .page-header {
      text-align: center;
      margin-bottom: 60px;
    }
    
    .page-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #7c5ec6;
    }
    
    .page-subtitle {
      font-size: 1.2rem;
      opacity: 0.8;
    }
    
    .content-section {
      margin-bottom: 60px;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 30px;
    }
    
    .feature-card {
      background: rgba(124, 94, 198, 0.1);
      border-radius: 8px;
      padding: 25px;
      transition: transform 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      background: rgba(124, 94, 198, 0.2);
    }
    
    .icon {
      font-size: 2rem;
      color: #7c5ec6;
      margin-bottom: 15px;
    }
    
    /* 遊戲截圖樣式 */
    .game-screenshots {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 30px;
    }
    
    .screenshot-item {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    
    .screenshot-item:hover {
      transform: translateY(-5px);
    }
    
    .screenshot-image {
      width: 100%;
      height: auto;
      border-radius: 8px 8px 0 0;
    }
    
    .screenshot-caption {
      padding: 20px;
    }
    
    .screenshot-caption h3 {
      margin-bottom: 10px;
      color: #7c5ec6;
    }
    
    /* 遊戲模式樣式 */
    .game-mode {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      padding: 25px;
      margin-bottom: 20px;
    }
    
    .button-example {
      margin-top: 15px;
    }
    
    .flex-button {
      display: inline-block;
      background: #7c5ec6;
      color: white;
      padding: 10px 20px;
      border-radius: 20px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .flex-button:hover {
      background: #9370db;
      transform: translateY(-2px);
    }
    
    /* 遊戲錄影展示樣式 */
    .gameplay-demo {
      margin-top: 30px;
    }
    
    .demo-item {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 30px;
    }
    
    .demo-video-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 比例 */
      overflow: hidden;
    }
    
    .demo-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .demo-description {
      padding: 20px;
    }
    
    .demo-description h3 {
      margin-bottom: 10px;
      color: #7c5ec6;
    }
    
    .testimonial {
      background: rgba(124, 94, 198, 0.1);
      border-left: 4px solid #7c5ec6;
      padding: 20px;
      margin-bottom: 20px;
    }
    
    .quote {
      font-style: italic;
      margin-bottom: 10px;
    }
    
    .author {
      text-align: right;
      font-weight: bold;
    }
    
    .tips-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .tip-item {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      padding: 20px;
    }
    
    .cta-section {
      text-align: center;
      background: rgba(124, 94, 198, 0.1);
      padding: 40px;
      border-radius: 8px;
    }
    
    .qr-code {
      width: 150px;
      height: 150px;
      margin: 20px auto;
      display: block;
    }
    
    .cta-button {
      display: inline-block;
      background: #7c5ec6;
      color: white;
      padding: 12px 30px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    
    .cta-button:hover {
      background: #9370db;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(124, 94, 198, 0.4);
    }
    
    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 2rem;
      }
      
      .feature-grid, .tips-list, .game-screenshots {
        grid-template-columns: 1fr;
      }
    }

    .main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 1000;
  
  .home-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: 500;
    gap: 0.5rem;
    width: fit-content;
    
    &:hover {
      color: #00c300;
    }
    
    .header-logo {
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }
    
    span {
      font-size: 1.2rem;
    }
  }
}
  `]
})
export class OfficeGamesComponent {
  // 無需額外邏輯
} 