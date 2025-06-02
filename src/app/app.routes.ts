import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotpassComponent } from './auth/forgotpass/forgotpass.component';
import { ResetComponent } from './auth/reset/reset.component';
import { VerifyComponent } from './auth/verify/verify.component';
import { TrackComponent } from './track/track.component';
import { NeedhelpComponent } from './needhelp/needhelp.component';
import { SupportComponent } from './support/support.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashhomeComponent } from './dashboard/dashhome/dashhome.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { TrackOrderComponent } from './dashboard/track-order/track-order.component';
import { CardComponent } from './dashboard/card/card.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { TrackdetailComponent } from './track/trackdetail/trackdetail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutconfirmComponent } from './checkoutconfirm/checkoutconfirm.component';
import { CompareComponent } from './compare/compare.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

import { authGuard, noAuthGuard } from './Guards/auth.guard';


export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: AuthComponent, canActivate: [noAuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot', component: ForgotpassComponent },
    { path: 'reset', component: ResetComponent },
    { path: 'verify', component: VerifyComponent },
    { path: 'track', component: TrackComponent },
    { path: 'help', component: NeedhelpComponent },
    { path: 'support', component: SupportComponent },
    { path: 'side', component: SidebarComponent },
    {
        path: 'dashboard', canActivate: [authGuard], children: [
            { path: '', component: DashhomeComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'trackorder', component: TrackOrderComponent },
            { path: 'card', component: CardComponent },
            { path: 'setting', component: SettingComponent }
        ]
    },

    { path: 'trackdetail', component: TrackdetailComponent },
    { path: 'cart', component: CartComponent, canActivate: [authGuard] },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'checkoutconfirm', component: CheckoutconfirmComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: 'compare', component: CompareComponent },
    { path: 'product/:id', component: ProductdetailComponent },
    { path: '**', component: NotfoundComponent }
];
