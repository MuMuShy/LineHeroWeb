import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="legal-page">
      <h1>隱私權政策</h1>
      
      <section>
        <h2>1. 前言</h2>
        <p>歡迎您使用 LINE Hero 無盡冒險（以下簡稱「本服務」）。我們非常重視您的個人隱私權，為了讓您了解我們如何蒐集、處理及利用您的個人資料，特制定本隱私權政策。</p>
        
        <div class="highlight-box">
          <h4>重要提醒</h4>
          <p>當您使用本服務時，即表示您同意本隱私權政策的內容。如您不同意本政策的任何部分，請停止使用本服務。</p>
        </div>
      </section>

      <section>
        <h2>2. 資料收集範圍</h2>
        <h3>2.1 帳號資訊</h3>
        <ul>
          <li>LINE 帳號資訊（ID、暱稱、頭像）</li>
          <li>電子郵件地址（如有提供）</li>
          <li>遊戲內暱稱及角色資訊</li>
        </ul>

        <h3>2.2 遊戲數據</h3>
        <ul>
          <li>遊戲進度及成就</li>
          <li>遊戲內行為及互動記錄</li>
          <li>角色等級及裝備資訊</li>
        </ul>

        <h3>2.3 交易資訊</h3>
        <ul>
          <li>購買紀錄及交易明細</li>
          <li>支付方式資訊</li>
          <li>發票相關資訊</li>
        </ul>

        <h3>2.4 系統資訊</h3>
        <ul>
          <li>裝置識別碼</li>
          <li>IP 位址</li>
          <li>作業系統版本</li>
          <li>瀏覽器類型</li>
        </ul>
      </section>

      <section>
        <h2>3. 資料使用目的</h2>
        <p>我們收集和使用您的個人資料之目的如下：</p>
        <ul>
          <li>提供及維護遊戲服務</li>
          <li>處理您的交易請求</li>
          <li>提供客戶服務與支援</li>
          <li>改善遊戲體驗及開發新功能</li>
          <li>防止詐欺及確保遊戲安全</li>
          <li>發送系統通知及更新資訊</li>
          <li>依法律要求提供必要資訊</li>
        </ul>
      </section>

      <section>
        <h2>4. 資料保護措施</h2>
        <p>我們採取以下安全措施保護您的個人資料：</p>
        <ul>
          <li>使用 SSL 加密技術保護資料傳輸</li>
          <li>定期進行系統安全檢測</li>
          <li>實施嚴格的資料存取控制</li>
          <li>定期備份重要資料</li>
          <li>員工簽署保密協議</li>
        </ul>
      </section>

      <section>
        <h2>5. 資料分享與披露</h2>
        <p>除非有下列情況，我們不會向第三方分享您的個人資料：</p>
        <ul>
          <li>經過您的明確同意</li>
          <li>為提供服務所必需（如支付處理）</li>
          <li>法律要求或政府機關依法要求</li>
          <li>保護我們或其他用戶的權益</li>
        </ul>
      </section>

      <section>
        <h2>6. 您的權利</h2>
        <p>依據個人資料保護法，您擁有以下權利：</p>
        <ul>
          <li>查詢或請求閱覽個人資料</li>
          <li>請求製給複製本</li>
          <li>請求補充或更正個人資料</li>
          <li>請求停止蒐集、處理或利用個人資料</li>
          <li>請求刪除個人資料</li>
        </ul>
      </section>

      <section>
        <h2>7. Cookie 的使用</h2>
        <p>我們使用 Cookie 及相關技術來提供更好的服務體驗。您可以透過瀏覽器設定來管理 Cookie，但可能會影響部分服務功能。詳細資訊請參考我們的 Cookie 政策。</p>
      </section>

      <section>
        <h2>8. 政策更新</h2>
        <p>我們保留隨時修改本隱私權政策的權利。當本政策有重大變更時，我們會在網站上公告或以其他方式通知您。</p>
      </section>

      <section>
        <h2>9. 聯絡我們</h2>
        <p>如您對本隱私權政策有任何疑問或建議，歡迎透過以下方式聯絡我們：</p>
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
export class PrivacyComponent {} 