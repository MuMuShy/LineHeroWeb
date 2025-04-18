import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="legal-page">
      <h1>服務條款</h1>
      
      <section>
        <h2>1. 服務說明</h2>
        <p>歡迎使用 LINE Hero 無盡冒險（以下簡稱「本服務」）。本服務是一款在 LINE 平台上運行的文字冒險遊戲，由無限創意軟體有限公司（以下簡稱「本公司」）開發及營運。</p>
        
        <div class="highlight-box">
          <h4>重要提醒</h4>
          <p>使用本服務即表示您同意本條款的全部內容。如您不同意本條款的任何部分，請勿使用本服務。</p>
        </div>
      </section>

      <section>
        <h2>2. 帳號管理</h2>
        <h3>2.1 帳號使用</h3>
        <ul>
          <li>本服務使用 LINE 帳號作為遊戲帳號</li>
          <li>您必須妥善保管自己的帳號資訊</li>
          <li>不得將帳號出借、轉讓或買賣</li>
          <li>因帳號遭盜用所致之損失，本公司不負賠償責任</li>
        </ul>

        <h3>2.2 帳號安全</h3>
        <ul>
          <li>發現帳號異常應立即通知客服</li>
          <li>定期更改密碼以確保帳號安全</li>
          <li>不得使用任何自動化工具或外掛程式</li>
        </ul>
      </section>

      <section>
        <h2>3. 使用規範</h2>
        <p>使用本服務時，您同意遵守以下規範：</p>
        <ul>
          <li>不得進行任何違法或不當行為</li>
          <li>不得散布垃圾訊息或廣告</li>
          <li>不得騷擾或攻擊其他玩家</li>
          <li>不得使用任何作弊程式或外掛</li>
          <li>不得從事任何影響遊戲平衡的行為</li>
          <li>不得散布不實資訊或謠言</li>
        </ul>
      </section>

      <section>
        <h2>4. 付費服務</h2>
        <h3>4.1 支付規定</h3>
        <ul>
          <li>所有價格均以新台幣計價</li>
          <li>付費項目可能隨時調整</li>
          <li>購買前請確認商品內容及價格</li>
          <li>依法開立電子發票</li>
        </ul>

        <h3>4.2 虛擬物品</h3>
        <ul>
          <li>虛擬物品僅供遊戲內使用</li>
          <li>不得用於實物交易</li>
          <li>本公司保留調整虛擬物品內容的權利</li>
        </ul>
      </section>

      <section>
        <h2>5. 智慧財產權</h2>
        <p>本服務的所有內容，包括但不限於：</p>
        <ul>
          <li>遊戲程式及源代碼</li>
          <li>美術設計及圖像</li>
          <li>文字內容及劇情</li>
          <li>音樂及音效</li>
        </ul>
        <p>均為本公司或其授權方所有，受著作權法及其他智慧財產權法保護。</p>
      </section>

      <section>
        <h2>6. 服務變更及終止</h2>
        <p>本公司保留以下權利：</p>
        <ul>
          <li>隨時變更、暫停或終止本服務</li>
          <li>修改或更新本條款內容</li>
          <li>調整遊戲內容及機制</li>
          <li>暫停或終止特定用戶的使用權限</li>
        </ul>
      </section>

      <section>
        <h2>7. 免責聲明</h2>
        <p>本公司不對以下情況承擔責任：</p>
        <ul>
          <li>因不可抗力導致的服務中斷</li>
          <li>用戶個人行為造成的損失</li>
          <li>第三方侵權行為</li>
          <li>用戶間的糾紛</li>
        </ul>
      </section>

      <section>
        <h2>8. 準據法及管轄</h2>
        <p>本條款適用中華民國法律。因本服務所生之爭議，除法律另有規定外，以台灣台北地方法院為第一審管轄法院。</p>
      </section>

      <section>
        <h2>9. 聯絡方式</h2>
        <p>如您對本條款有任何疑問，請透過以下方式聯絡我們：</p>
        <ul>
          <li>LINE 客服：<a href="https://lin.ee/gG3Xfgr" target="_blank" rel="noopener noreferrer">官方客服</a></li>
          <li>電子郵件：mail&#64;linehero.tw</li>
        </ul>
      </section>

      <p class="last-updated">最後更新日期：2024年3月20日</p>
    </div>
  `,
  styleUrls: ['../../styles/legal-pages.scss']
})
export class TermsComponent {} 