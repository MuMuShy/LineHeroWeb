import { Routes } from '@angular/router';
import { LineIntroComponent } from './pages/line-intro/line-intro.component';
import { HomeComponent } from './home.component';
import { WebIntroComponent } from './pages/web-intro/web-intro.component';
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
    }
];
