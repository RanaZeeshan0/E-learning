import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'start-slides',
    loadChildren: () => import('./start-slides/start-slides.module').then( m => m.StartSlidesPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'phone-verify',
    loadChildren: () => import('./phone-verify/phone-verify.module').then( m => m.PhoneVerifyPageModule)
  },
  {
    path: 'search-providers',
    loadChildren: () => import('./search-providers/search-providers.module').then( m => m.SearchProvidersPageModule)
  },
  {
    path: 'course-details',
    loadChildren: () => import('./course-details/course-details.module').then( m => m.CourseDetailsPageModule)
  },
  {
    path: 'my-courses',
    loadChildren: () => import('./my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
  },
  {
    path: 'orders-and-payment',
    loadChildren: () => import('./orders-and-payment/orders-and-payment.module').then( m => m.OrdersAndPaymentPageModule)
  },
  {
    path: 'search-courses',
    loadChildren: () => import('./search-courses/search-courses.module').then( m => m.SearchCoursesPageModule)
  },
  {
    path: 'payments-and-order',
    loadChildren: () => import('./payments-and-order/payments-and-order.module').then( m => m.PaymentsAndOrderPageModule)
  },
  {
    path: 'video-enhancment',
    loadChildren: () => import('./video-enhancment/video-enhancment.module').then( m => m.VideoEnhancmentPageModule)
  },
  {
    path: 'add-video',
    loadChildren: () => import('./add-video/add-video.module').then( m => m.AddVideoPageModule)
  },
  {
    path: 'video-enhancment1',
    loadChildren: () => import('./video-enhancment1/video-enhancment1.module').then( m => m.VideoEnhancment1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
