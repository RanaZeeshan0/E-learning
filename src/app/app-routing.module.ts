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
  {
    path: 'course-details-overview',
    loadChildren: () => import('./course-details-overview/course-details-overview.module').then( m => m.CourseDetailsOverviewPageModule)
  },
  {
    path: 'course-details-enrolled',
    loadChildren: () => import('./course-details-enrolled/course-details-enrolled.module').then( m => m.CourseDetailsEnrolledPageModule)
  },
  {
    path: 'learnings',
    loadChildren: () => import('./learnings/learnings.module').then( m => m.LearningsPageModule)
  },
  {
    path: 'create-courses',
    loadChildren: () => import('./create-courses/create-courses.module').then( m => m.CreateCoursesPageModule)
  },


  {
    path: 'provider-detail-community',
    loadChildren: () => import('./provider-detail-community/provider-detail-community.module').then( m => m.ProviderDetailCommunityPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'provider-detail',
    loadChildren: () => import('./provider-detail/provider-detail.module').then( m => m.ProviderDetailPageModule)
  },
  {
    path: 'orders-and-payment-payment',
    loadChildren: () => import('./orders-and-payment-payment/orders-and-payment-payment.module').then( m => m.OrdersAndPaymentPaymentPageModule)
  },
  {
    path: 'learning',
    loadChildren: () => import('./learning/learning.module').then( m => m.LearningPageModule)
  },
  {
    path: 'create-courses-form',
    loadChildren: () => import('./create-courses-form/create-courses-form.module').then( m => m.CreateCoursesFormPageModule)
  },
  {
    path: 'customer-support',
    loadChildren: () => import('./customer-support/customer-support.module').then( m => m.CustomerSupportPageModule)
  },
  {
    path: 'tiemline-tab',
    loadChildren: () => import('./tiemline-tab/tiemline-tab.module').then( m => m.TiemlineTabPageModule)
  },
  {
    path: 'hi-antonio',
    loadChildren: () => import('./hi-antonio/hi-antonio.module').then( m => m.HiAntonioPageModule)
  },
  {
    path: 'guide',
    loadChildren: () => import('./guide/guide.module').then( m => m.GuidePageModule)
  },
  {
    path: 'create-courses2',
    loadChildren: () => import('./create-courses2/create-courses2.module').then( m => m.CreateCourses2PageModule)
  },
  {
    path: 'provider-detail-courses',
    loadChildren: () => import('./provider-detail-courses/provider-detail-courses.module').then( m => m.ProviderDetailCoursesPageModule)
  },
  {
    path: 'learnings-bookmark',
    loadChildren: () => import('./learnings-bookmark/learnings-bookmark.module').then( m => m.LearningsBookmarkPageModule)
  },
  {
    path: 'provider-detail-profile',
    loadChildren: () => import('./provider-detail-profile/provider-detail-profile.module').then( m => m.ProviderDetailProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
