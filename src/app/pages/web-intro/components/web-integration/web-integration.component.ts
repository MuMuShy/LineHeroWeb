import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-integration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-integration.component.html',
  styleUrls: ['./web-integration.component.scss']
})
export class WebIntegrationComponent {
  features = [
    '一鍵登入，保持 LINE 帳號連結',
    '即時通知同步至 LINE 聊天',
    '分享功能直接連結至 LINE 群組',
    '無縫切換聊天機器人與網頁功能',
    '自動同步遊戲進度與數據'
  ];
}
