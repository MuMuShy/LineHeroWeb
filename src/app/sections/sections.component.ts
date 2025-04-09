import { Component } from '@angular/core';

@Component({
  selector: 'app-sections',
  standalone: true,
  template: `
    <section id="intro" class="game-section">
      <div class="intro-content">
        <h2>在LINE中展開冒險</h2>
        
        <div class="feature-grid">
          <div class="feature-item">
            <div class="feature-image">
              <img src="/assets/images/bggg.jpg" alt="探索冒險">
            </div>
            <div class="feature-content">
              <h3>聊天冒險</h3>
              <p>在LINE聊天中輸入指令，展開奇幻冒險之旅</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-image">
              <img src="/assets/images/gameplay.png" alt="即時戰鬥">
            </div>
            <div class="feature-content">
              <h3>即時戰鬥</h3>
              <p>簡單的指令，體驗刺激的回合制戰鬥</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-image">
              <img src="/assets/images/companions.png" alt="夥伴收集">
            </div>
            <div class="feature-content">
              <h3>夥伴收集</h3>
              <p>收集培養各種特色夥伴，組建專屬隊伍</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-image">
              <img src="/assets/images/trade.png" alt="自由交易">
            </div>
            <div class="feature-content">
              <h3>自由交易</h3>
              <p>完善的交易系統，與其他玩家自由交換裝備、道具，打造專屬於你的角色</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-image">
              <img src="/assets/images/boss_girl2.png" alt="世界Boss">
            </div>
            <div class="feature-content">
              <h3>世界Boss</h3>
              <p>與全服玩家一同挑戰史詩級世界Boss，獲取稀有獎勵</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="equipment" class="game-section">
      <div class="section-content">
      <h2>裝備強化系統</h2>
        <p class="section-description">打造專屬於你的最強裝備，透過獨特的強化系統提升戰鬥力</p>
        
        <div class="equipment-showcase">
          <div class="equipment-feature">
            <div class="equipment-image">
              <img src="/assets/images/weapon.jpg" alt="裝備收集">
            </div>
            <div class="feature-text">
              <h3>多樣裝備收集</h3>
              <p>探索世界獲得各種稀有裝備，打造獨一無二的角色</p>
            </div>
          </div>

          <div class="equipment-feature">
            <div class="equipment-image">
              <img src="/assets/images/enhance.png" alt="強化系統">
            </div>
            <div class="feature-text">
              <h3>進階強化系統</h3>
              <p>透過收集強化材料，提升裝備等級，解鎖強大屬性</p>
            </div>
          </div>

          <div class="equipment-feature">
            <div class="equipment-image">
              <img src="/assets/images/refine.png" alt="屬性重鑄">
            </div>
            <div class="feature-text">
              <h3>屬性重鑄</h3>
              <p>自由調整裝備屬性，打造最適合你的戰鬥風格</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="partners" class="game-section">
      <div class="section-content">
      <h2>夥伴系統</h2>
        <p class="section-description">收集培養夥伴，組建探險隊伍，獲取豐富獎勵</p>
        
        <div class="partners-showcase">
          <div class="partners-grid">
            <div class="partner-card">
              <div class="partner-image">
                <img src="/assets/images/gacha.png" alt="轉蛋系統">
                <div class="rarity-badge">
                  <span>★</span>
                  <span>★★</span>
                  <span>★★★</span>
                </div>
              </div>
              <div class="partner-info">
                <div class="partner-type">轉蛋系統</div>
                <h3>稀有夥伴</h3>
                <p>透過轉蛋獲得各種稀有度的夥伴，最高可獲得神話級夥伴</p>
              </div>
            </div>

            <div class="partner-card">
              <div class="partner-image">
                <img src="/assets/images/companion_like.png" alt="親密度系統">
                <div class="heart-meter">
                  <div class="heart-icon"></div>
                </div>
              </div>
              <div class="partner-info">
                <div class="partner-type">親密系統</div>
                <h3>親密互動</h3>
                <p>提升與夥伴的親密度，解鎖跟隨功能，獲得額外能力加成</p>
              </div>
            </div>

            <div class="partner-card">
              <div class="partner-image">
                <img src="/assets/images/star.png" alt="星級系統">
                <div class="star-evolution">
                  <div class="star-stage">
                    <span class="star">★</span>
                    <span class="arrow">→</span>
                  </div>
                  <div class="star-stage">
                    <span class="star">★★</span>
                    <span class="arrow">→</span>
                  </div>
                  <div class="star-stage">
                    <span class="star">★★★</span>
                    <span class="arrow">→</span>
                  </div>
                  <div class="star-stage highlight">
                    <span class="star">★★★★★★</span>
                  </div>
                </div>
              </div>
              <div class="partner-info">
                <div class="partner-type">星級系統</div>
                <h3>星級提升</h3>
                <p>透過培養材料提升夥伴星級，解鎖更強大的能力</p>
              </div>
            </div>
          </div>

          <div class="expedition-feature">
            <div class="feature-image">
              <img src="/assets/images/exploration.png" alt="探險隊系統">
            </div>
            <div class="feature-content">
              <h3>探險隊系統</h3>
              <p>組建專屬探險隊伍，派遣夥伴執行各種探險任務</p>
              <ul class="feature-list">
                <li>
                  <span class="feature-highlight">多重探險：</span>
                  同時派遣多支探險隊伍執行不同任務
                </li>
                <li>
                  <span class="feature-highlight">豐富獎勵：</span>
                  獲得裝備、素材、稀有道具等探險收益
                </li>
                <li>
                  <span class="feature-highlight">夥伴特性：</span>
                  不同特性的夥伴影響探險效率和獎勵
                </li>
                <li>
                  <span class="feature-highlight">跟隨加成：</span>
                  提升親密度解鎖跟隨功能，強化角色屬性
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="boss" class="game-section">
      <div class="section-content">
        <h2>世界Boss戰鬥</h2>
        <p class="section-description">與全服玩家一同挑戰史詩級世界Boss，獲取稀有獎勵</p>
        
        <div class="boss-showcase">
          <div class="boss-gif-container">
            <img src="/assets/images/bossbattle.gif" alt="世界Boss戰鬥" class="boss-gif">
            <div class="gif-overlay"></div>
          </div>

          <div class="boss-features">
            <div class="boss-feature-item">
              <h3>即時對戰</h3>
              <p>全服玩家同時在線，共同挑戰強大Boss</p>
            </div>

            <div class="boss-feature-item">
              <h3>傷害排名</h3>
              <p>根據對Boss造成的傷害獲得相應排名獎勵</p>
            </div>

            <div class="boss-feature-item">
              <h3>豐厚獎勵</h3>
              <p>擊敗Boss獲得稀有裝備、限定道具等獎勵</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="community" class="game-section">
      <div class="community-bg"></div>
      <div class="section-content">
        <h2>加入社群</h2>
        <p class="section-description">與其他玩家交流策略，獲取第一手遊戲資訊</p>
        
        <div class="community-container">
          <div class="community-content">
            <div class="community-features">
              <div class="community-feature">
                <div class="feature-icon news-icon"></div>
                <h3>最新消息</h3>
                <p>第一時間獲得遊戲更新、活動資訊</p>
              </div>

              <div class="community-feature">
                <div class="feature-icon guide-icon"></div>
                <h3>攻略分享</h3>
                <p>與玩家交流遊戲心得、組隊策略</p>
              </div>

              <div class="community-feature">
                <div class="feature-icon event-icon"></div>
                <h3>社群活動</h3>
                <p>參與限定活動，獲得特殊獎勵</p>
              </div>
            </div>
            <div class="community-cta">
              <a href="https://line.me/ti/g2/DJg84HtyGvoYNMEZdQEgrosPZS8bgRonuW8aWQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank" class="line-button">
                <span>加入LINE社群</span>
                <div class="button-glow"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .game-section {
      min-height: 100vh;
      padding: 50px 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-position: center;
      position: relative;
      color: white;
    }

    .game-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: 1;
    }

    .game-section > * {
      position: relative;
      z-index: 2;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
      text-align: center;
      color: white;
      text-shadow: 0 0 10px rgba(124, 94, 198, 0.5);
    }

    p {
      font-size: 1.2rem;
      max-width: 800px;
      text-align: center;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    #intro {
      background-image: url('/assets/images/test1.png');
    }

    // #equipment {
    //   background-image: url('/assets/images/test5.png');
    // }

    // #partners {
    //   background-image: url('/assets/images/test5.jpg');
    // }

    // #boss {
    //   background-image: url('/assets/images/boss-bg.jpg');
    // }

    #community {
      background-image: url('/assets/images/test3.png');
    }

    .intro-content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      z-index: 2;
    }

    .feature-grid {
      position: relative;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
      padding: 2rem;
    }

    .feature-item {
      position: relative;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 15px;
      overflow: hidden;
      border: 1px solid rgba(124, 94, 198, 0.3);
      transition: all 0.3s ease;
    }

    .feature-item:hover {
      transform: translateY(-5px);
      border-color: rgba(124, 94, 198, 0.8);
      box-shadow: 0 0 30px rgba(124, 94, 198, 0.2);
    }

    .feature-image {
      width: 100%;
      overflow: hidden;
    }

    .feature-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .feature-item:hover .feature-image img {
      transform: scale(1.05);
    }

    .feature-content {
      padding: 1.5rem;
    }

    .feature-content h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #7c5ec6;
    }

    .feature-content p {
      font-size: 1rem;
      line-height: 1.6;
      margin: 0;
      color: rgba(255, 255, 255, 0.9);
    }

    .gameplay-showcase {
      margin-top: 4rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 600px;
    }

    .phone-container {
      display: flex;
      align-items: center;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .phone-frame {
      position: relative;
      width: 300px;
      height: 600px;
      background: #222;
      border-radius: 40px;
      padding: 15px;
      box-shadow: 0 0 50px rgba(124, 94, 198, 0.3);
    }

    .phone-screen {
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 30px;
      overflow: hidden;
      position: relative;
    }

    .screenshot-slider {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .screenshot {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    .screenshot.active {
      opacity: 1;
    }

    .screenshot img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .feature-description {
      flex: 1;
      max-width: 400px;
      position: relative;
    }

    .description-item {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: all 0.5s ease;
      transform: translateY(20px);
    }

    .description-item.active {
      opacity: 1;
      transform: translateY(0);
    }

    .description-item h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #7c5ec6;
      text-shadow: 0 0 10px rgba(124, 94, 198, 0.3);
    }

    .description-item p {
      font-size: 1.2rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
    }

    @media (max-width: 1024px) {
      .phone-container {
        flex-direction: column;
        gap: 2rem;
      }

      .feature-description {
        text-align: center;
        padding: 0 20px;
      }

      .description-item {
        position: relative;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .phone-frame {
        width: 280px;
        height: 560px;
      }
    }

    @media (max-width: 768px) {
      .feature-grid {
        grid-template-columns: 1fr;
        padding: 1rem;
      }
      
      .feature-image {
        height: 180px;
      }
    }

    .section-content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      z-index: 2;
    }

    .section-description {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.9);
      text-align: center;
      margin-bottom: 4rem;
    }

    .equipment-showcase {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      width: 100%;
    }

    .equipment-feature {
      display: flex;
      align-items: center;
      gap: 4rem;
      padding: 2rem;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 20px;
      border: 1px solid rgba(124, 94, 198, 0.3);
      transition: all 0.3s ease;
    }

    .equipment-feature:hover {
      transform: translateY(-5px);
      border-color: rgba(124, 94, 198, 0.8);
      box-shadow: 0 0 30px rgba(124, 94, 198, 0.2);
    }

    .equipment-feature:nth-child(even) {
      flex-direction: row-reverse;
    }

    .equipment-image {
      flex: 1;
      max-width: 500px;
      height: 300px;
      border-radius: 10px;
      overflow: hidden;
    }

    .equipment-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .equipment-feature:hover .equipment-image img {
      transform: scale(1.05);
    }

    .feature-text {
      flex: 1;
      padding: 2rem;
    }

    .feature-text h3 {
        font-size: 2rem;
      margin-bottom: 1rem;
      color: #7c5ec6;
      text-shadow: 0 0 10px rgba(124, 94, 198, 0.3);
    }

    .feature-text p {
      font-size: 1.2rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
    }

    @media (max-width: 968px) {
      .equipment-feature {
        flex-direction: column !important;
        gap: 2rem;
        padding: 1.5rem;
      }

      .equipment-image {
        width: 100%;
        height: 200px;
      }

      .feature-text {
        padding: 1rem;
        text-align: center;
      }

      .feature-text h3 {
        font-size: 1.8rem;
      }

      .feature-text p {
        font-size: 1.1rem;
      }
    }

    .rarity-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px 10px;
      border-radius: 15px;
      display: flex;
      gap: 3px;
    }

    .rarity-badge span {
      color: gold;
      text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
    }

    .heart-meter {
      position: absolute;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px 15px;
      border-radius: 15px;
      color: #ff6b6b;
    }

    .star-evolution {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      padding: 8px 15px;
      border-radius: 15px;
      display: flex;
      gap: 5px;
      align-items: center;
      white-space: nowrap;
    }

    .star-stage {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .star {
      color: #FFD700;
      text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
      font-size: 0.9rem;
    }

    .arrow {
      color: rgba(255, 255, 255, 0.6);
      margin: 0 2px;
    }

    .star-stage.highlight .star {
      color: #FFA500;
      font-weight: bold;
      text-shadow: 0 0 8px rgba(255, 165, 0, 0.8);
    }

    .expedition-tag {
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(124, 94, 198, 0.8);
      padding: 5px 15px;
      border-radius: 15px;
      color: white;
    }

    .partners-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));  /* 加寬卡片寬度 */
      gap: 2rem;
      width: 100%;
    }

    .partner-card {
      background: rgba(0, 0, 0, 0.7);
      border-radius: 15px;
      overflow: hidden;
      border: 1px solid rgba(124, 94, 198, 0.3);
      transition: all 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: row;  /* 改為橫向排列 */
      align-items: center;
      padding: 1.5rem;
      gap: 2rem;  /* 圖片和文字之間的間距 */
    }

    .partner-card:hover {
      transform: translateY(-5px);
      border-color: rgba(124, 94, 198, 0.8);
      box-shadow: 0 0 30px rgba(124, 94, 198, 0.2);
    }

    .partner-image {
      position: relative;
      min-width: 240px;  /* 固定寬度 */
      height: 240px;  /* 固定高度，保持方形 */
      overflow: hidden;
      border-radius: 12px;
      flex-shrink: 0;  /* 防止圖片被壓縮 */
    }

    .partner-image img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    .partner-card:hover .partner-image img {
      transform: scale(1.05);
    }

    .partner-info {
      flex: 1;
      text-align: left;  /* 文字左對齊 */
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .partner-type {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: rgba(124, 94, 198, 0.3);
      border-radius: 20px;
      font-size: 0.9rem;
      color: #7c5ec6;
      align-self: flex-start;  /* 標籤靠左 */
    }

    .partner-info h3 {
      font-size: 1.8rem;  /* 加大標題 */
      color: #7c5ec6;
      margin: 0;
    }

    .partner-info p {
      font-size: 1.1rem;  /* 加大內文 */
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
    }

    /* 響應式調整 */
    @media (max-width: 768px) {
      .partners-grid {
        grid-template-columns: 1fr;  /* 單列顯示 */
      }

      .partner-card {
        flex-direction: column;  /* 在手機版改為垂直排列 */
        padding: 1.5rem;
        gap: 1.5rem;
      }

      .partner-image {
        width: 200px;
        height: 200px;
      }

      .partner-info {
        text-align: center;
        align-items: center;
      }

      .partner-type {
        align-self: center;
      }
    }

    @media (max-width: 480px) {
      .partner-image {
        width: 180px;
        height: 180px;
      }

      .partner-info h3 {
        font-size: 1.5rem;
      }

      .partner-info p {
        font-size: 1rem;
      }
    }

    .feature-highlight {
      color: #7c5ec6;
      font-weight: bold;
    }

    .expedition-feature {
      display: flex;
      align-items: center;
      gap: 4rem;
      padding: 2rem;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 20px;
      border: 1px solid rgba(124, 94, 198, 0.3);
      margin-top: 3rem;
    }

    .expedition-feature:hover {
      border-color: rgba(124, 94, 198, 0.8);
      box-shadow: 0 0 30px rgba(124, 94, 198, 0.2);
    }

    @media (max-width: 768px) {
      .expedition-feature {
        flex-direction: column;
      }
      .star-evolution {
        padding: 5px 10px;
        font-size: 0.8rem;
      }
    }

    .boss-showcase {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .boss-gif-container {
      position: relative;
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 0 50px rgba(124, 94, 198, 0.3);
      background: #000;
    }

    .boss-gif {
      width: 100%;
      display: block;
      border-radius: 20px;
    }

    .gif-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.4) 100%
      );
    }

    .boss-features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 3rem;
      padding: 0 1rem;
    }

    .boss-feature-item {
      background: rgba(0, 0, 0, 0.7);
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      border: 1px solid rgba(124, 94, 198, 0.3);
      transition: all 0.3s ease;
    }

    .boss-feature-item:hover {
      transform: translateY(-5px);
      border-color: rgba(124, 94, 198, 0.8);
      box-shadow: 0 0 30px rgba(124, 94, 198, 0.2);
    }

    .feature-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 1.5rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }


    .boss-feature-item h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #7c5ec6;
    }

    .boss-feature-item p {
      font-size: 1rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
    }

    @media (max-width: 968px) {
      .boss-features {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .boss-gif-container {
        margin: 0 -1rem;
        border-radius: 0;
      }

      .boss-gif {
        border-radius: 0;
      }

      .boss-features {
        grid-template-columns: 1fr;
      }
    }

    .community-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/assets/images/test1.png');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      opacity: 0.3;
      z-index: 1;
    }

    .community-container {
      position: relative;
      z-index: 2;
      padding: 2rem;
    }

    .community-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      align-items: center;
    }

    .community-features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      width: 100%;
    }

    .community-feature {
      background: rgba(0, 0, 0, 0.7);
      border-radius: 20px;
      padding: 2rem;
      text-align: center;
      border: 1px solid rgba(124, 94, 198, 0.3);
      transition: all 0.3s ease;
    }

    .community-feature:hover {
      transform: translateY(-5px);
      border-color: rgba(124, 94, 198, 0.8);
      box-shadow: 0 0 30px rgba(124, 94, 198, 0.2);
    }

    .feature-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 1.5rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    .news-icon {
      background-image: url('/assets/images/news-icon.png');
    }

    .guide-icon {
      background-image: url('/assets/images/guide-icon.png');
    }

    .event-icon {
      background-image: url('/assets/images/event-icon.png');
    }

    .community-cta {
      text-align: center;
    }

    .line-button {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2.5rem;
      background: #00B900;
      border-radius: 50px;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .line-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 185, 0, 0.3);
    }

    .line-icon {
      width: 24px;
      height: 24px;
    }

    .button-glow {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0) 70%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    .line-button:hover .button-glow {
      opacity: 0.1;
      animation: glowRotate 3s infinite linear;
    }

    @keyframes glowRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @media (max-width: 968px) {
      .community-features {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .community-features {
        grid-template-columns: 1fr;
      }

      .line-button {
        padding: 0.8rem 2rem;
        font-size: 1.1rem;
      }
    }
  `]
})
export class SectionsComponent {}