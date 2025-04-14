import { Routes } from '@angular/router';
import { LineIntroComponent } from './pages/line-intro/line-intro.component';
import { HomeComponent } from './home.component';
import { WebIntroComponent } from './pages/web-intro/web-intro.component';
import { OfficeGamesComponent } from './pages/office-game/office-games.component';
import { ShopComponent } from './pages/shop/shop.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'LINE Hero無盡冒險'
    },
    {
        path: 'game-intro/line',
        component: LineIntroComponent,
        title: '遊戲玩法介紹 | LINE Hero冒險'
    },
    {
        path: 'game-intro/web',
        component: WebIntroComponent,
        title: '網頁進階功能介紹 | LINE Hero冒險'
    },
    {
        path: 'office-games',
        component: OfficeGamesComponent,
        title: 'LINE文字遊戲 | 上班族最佳選擇'
    },
    {
        path: 'shop',
        component: ShopComponent,
        title: 'LINE Hero 商店'
    }
];
