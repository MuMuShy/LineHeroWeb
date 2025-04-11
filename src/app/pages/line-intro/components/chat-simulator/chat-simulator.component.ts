import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

interface FlexButton {
  label: string;
  action: string;
}

interface Message {
  type: 'user' | 'bot';
  content: string;
  time: string;
  messageType?: 'text' | 'flex' | 'image';
  buttons?: FlexButton[];
}

interface Character {
  name: string;
  level: number;
  power: number;
}

interface Monster {
  name: string;
  imageUrl: string;
  power: number;
}

const monsters: Monster[] = [
  { name: '迷遊之人', imageUrl: 'https://www.dndbeyond.com/avatars/thumbnails/36576/553/1000/1000/638291908477327963.png', power: 70 },
  { name: '巨狼', imageUrl: 'https://mumu.tw/images/monstersimg/2.jpg', power: 90 }
];

@Component({
  selector: 'app-chat-simulator',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './chat-simulator.component.html',
  styleUrls: ['./chat-simulator.component.scss']
})
export class ChatSimulatorComponent {
  messageInput = new FormControl('');
  messages: Message[] = [
    {
      type: 'bot',
      content: '歡迎來到LINE Hero的世界！',
      time: '12:00',
      messageType: 'text'
    },
    {
      type: 'bot',
      content: '請選擇以下操作：',
      time: '12:00',
      messageType: 'flex',
      buttons: [
        { label: '開始遊戲', action: '/start' },
        { label: '查看說明', action: '/help' },
        { label: '角色狀態', action: '/status' }
      ]
    }
  ];
  character: Character | null = null;

  handleButtonClick(action: string) {
    this.messageInput.setValue(action);
    this.sendMessage();
  }

  sendMessage() {
    const message = this.messageInput.value?.trim();
    if (!message) return;

    // 添加用戶消息
    this.messages.push({
      type: 'user',
      content: message,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      messageType: 'text'
    });

    // 模擬機器人回復
    setTimeout(() => {
      let botResponse: Message;
      
      switch(message.toLowerCase()) {
        case '/help':
          botResponse = {
            type: 'bot',
            content: '請選擇要查看的說明：',
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            messageType: 'flex',
            buttons: [
              { label: '基本指令', action: '/help basic' },
              { label: '遊戲玩法', action: '/help gameplay' },
              { label: '常見問題', action: '/help faq' }
            ]
          };
          break;
        case '/start':
          this.character = { name: '新角色', level: 1, power: 100 };
          botResponse = {
            type: 'bot',
            content: '角色創建成功！\n角色名稱：新角色\n等級：1\n戰力：100',
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            messageType: 'flex',
            buttons: [
              { label: '開始探索', action: '/explore' }
            ]
          };
          break;
        case '/status':
          if (this.character) {
            botResponse = {
              type: 'bot',
              content: `角色名稱：${this.character.name}
等級：${this.character.level}
戰力：${this.character.power}`,
              time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
              messageType: 'text'
            };
          } else {
            botResponse = {
              type: 'bot',
              content: '你還沒有創建角色！',
              time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
              messageType: 'flex',
              buttons: [
                { label: '創建角色', action: '/start' },
                { label: '返回主選單', action: '/menu' }
              ]
            };
          }
          break;
        case '/explore':
          if (this.character) {
            const monster = monsters[Math.floor(Math.random() * monsters.length)];
            botResponse = {
              type: 'bot',
              content: `你遇到了 ${monster.name}！`,
              time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
              messageType: 'flex',
              buttons: [
                { label: '攻擊', action: `/attack ${monster.name}` }
              ]
            };
            this.messages.push({
              type: 'bot',
              content: monster.imageUrl,
              time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
              messageType: 'image'
            });
          } else {
            botResponse = {
              type: 'bot',
              content: '你還沒有創建角色！請先使用 /start 開始遊戲',
              time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
              messageType: 'text'
            };
          }
          break;
        case message.toLowerCase().startsWith('/attack') ? message.toLowerCase() : '':
          const monsterName = message.split(' ')[1];
          const monster = monsters.find(m => m.name === monsterName);
          if (monster && this.character) {
            const battleResult = this.character.power >= monster.power ? '你打敗了怪物！' : '你被怪物打敗了！';
            botResponse = {
              type: 'bot',
              content: `${battleResult}\n怪物戰力：${monster.power}`,
              time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
              messageType: 'text'
            };
          } else {
            botResponse = {
              type: 'bot',
              content: '找不到怪物或角色，請重新探索。',
              time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
              messageType: 'text'
            };
          }
          break;
        default:
          botResponse = {
            type: 'bot',
            content: '請選擇以下操作：',
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            messageType: 'flex',
            buttons: [
              { label: '開始遊戲', action: '/start' },
              { label: '查看說明', action: '/help' },
              { label: '角色狀態', action: '/status' }
            ]
          };
      }

      this.messages.push(botResponse);
    }, 1000);

    this.messageInput.reset();
  }
}
