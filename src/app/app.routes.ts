import { Routes } from '@angular/router';
import { LineIntroComponent } from './pages/line-intro/line-intro.component';
import { HomeComponent } from './home.component';
import { WebIntroComponent } from './pages/web-intro/web-intro.component';
import { OfficeGamesComponent } from './pages/office-game/office-games.component';
import { ShopComponent } from './pages/shop/shop.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { RefundComponent } from './pages/refund/refund.component';
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
    },
    {
        path: 'terms',
        component: TermsComponent,
        title: '服務條款 | LINE Hero無盡冒險'
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
        title: '隱私政策 | LINE Hero無盡冒險'
    },
    {
        path: 'refund',
        component: RefundComponent,
        title: '退款政策 | LINE Hero無盡冒險'
    }
];
