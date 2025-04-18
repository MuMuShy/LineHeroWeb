import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="legal-page">
      <h1>退款政策</h1>
      
      <section>
        <h2>1. 政策說明</h2>
        <p>本退款政策適用於 LINE Hero 無盡冒險（以下簡稱「本服務」）的所有付費項目。本服務由獨立開發者提供，所有交易均通過 LINE Pay 或信用卡等第三方支付平台進行處理。</p>
        
        <div class="highlight-box">
          <h4>重要提醒</h4>
          <p>在進行任何購買前，請務必仔細確認商品內容。本服務為數位內容服務，一旦虛擬物品被使用或會員權限被開通，將不予退款。</p>
        </div>
      </section>

      <section>
        <h2>2. 不予退款情況</h2>
        <p>基於數位內容的特殊性，以下情況將不予退款：</p>
        <ul>
          <li>已使用或已開通之任何虛擬物品</li>
          <li>已啟動之會員服務</li>
          <li>已兌換或使用之遊戲幣</li>
          <li>因違反服務條款而被終止服務</li>
          <li>透過非官方管道購買之物品</li>
          <li>無法提供有效交易證明</li>
        </ul>
      </section>

      <section>
        <h2>3. 例外退款考慮</h2>
        <p>僅在以下特殊情況下考慮退款申請：</p>
        <ul>
          <li>系統錯誤導致之重複扣款（需提供明確證明）</li>
          <li>未成年人未經監護人同意之購買（需提供相關證明文件）</li>
          <li>商品內容與官方描述有重大不符</li>
        </ul>
      </section>

      <section>
        <h2>4. 退款申請流程</h2>
        <ol>
          <li>於購買後24小時內提出申請</li>
          <li>提供完整交易證明（含訂單編號、付款收據）</li>
          <li>詳細說明退款原因及相關證明</li>
          <li>等待審核（處理時間視支付平台而定）</li>
        </ol>
      </section>

      <section>
        <h2>5. 重要聲明</h2>
        <ul>
          <li>本服務保留修改或更新退款政策的權利</li>
          <li>對於退款申請的審核結果，本服務具有最終決定權</li>
          <li>惡意或重複的退款請求可能導致帳號被永久停用</li>
          <li>本服務可能因技術或其他原因暫停或終止，此類情況不構成退款依據</li>
        </ul>
      </section>

      <section>
        <h2>6. 聯絡方式</h2>
        <p>如有退款相關問題，請通過以下方式聯絡：</p>
        <ul>
          <li>LINE 客服：<a href="https://lin.ee/EGXKPp6" target="_blank" rel="noopener noreferrer">https://lin.ee/EGXKPp6</a></li>
          <li>電子郵件：mail&#64;linehero.tw</li>
        </ul>
        <p>注意：客服回覆時間為週一至週五 10:00-18:00（台灣時間），例假日除外。</p>
      </section>

      <p class="last-updated">最後更新日期：2024年3月20日</p>
    </div>
  `,
  styleUrls: ['../../styles/legal-pages.scss']
})
export class RefundComponent {} 