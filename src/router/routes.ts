import Walkthrough from '../pages/Auth/Walkthrough';
import Language from '../pages/Auth/Language'
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

import HomePage from '../pages/Home/Index'
import NotificationPage from '../pages/Notification/Index'
import ProfilePage from '../pages/Profile/Index'
import MorePage from '../pages/More/Index'
import BookingPage from '../pages/Booking/Index'
import SearchPage from '../pages/Search/Index'
import DetailPage from '../pages/Search/Detail'
import GalleryPage from '../pages/Search/Gallery'
import ChatPage from '../pages/Booking/Chat'
import PaymentPage from '../pages/Booking/Payment'
import ReviewPage from '../pages/Booking/Review'
import PersonalInfoPage from '../pages/More/PersonalInfo'
import PersonalReviewPage from '../pages/More/PersonalReview'
import EditInfoPage from '../pages/More/EditoInfo'
import EditPasswordPage from '../pages/More/EditPassword'
import EditPaymentPage from '../pages/More/EditPayment'
import SitterWizardPage from '../pages/Profile/SitterWizard'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Language,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/walkthrough',
    component: Walkthrough,
  },
  {
    path: '/search',
    component: SearchPage,
  },
  {
    path: '/detail',
    component: DetailPage,
  },
  {
    path: '/gallery',
    component: GalleryPage,
  },
  {
    path: '/chat',
    component: ChatPage,
  },
  {
    path: '/review',
    component: ReviewPage,
  },
  {
    path: '/pay',
    component: PaymentPage,
  },
  {
    path: '/view-info',
    component: PersonalInfoPage,
  },
  {
    path: '/edit-info',
    component: EditInfoPage,
  },
  {
    path: '/edit-payment',
    component: EditPaymentPage,
  },
  {
    path: '/edit-password',
    component: EditPasswordPage,
  },
  {
    path: '/view-review',
    component: PersonalReviewPage,
  },
  {
    path: '/sitter-wizard',
    component: SitterWizardPage,
  },
]
export const tab_routes = [
  {
    path: '/tab/home',
    component: HomePage
  },
  {
    path: '/tab/booking',
    component: BookingPage
  },
  {
    path: '/tab/notification',
    component: NotificationPage
  },
  {
    path: '/tab/profile',
    component: ProfilePage
  },
  {
    path: '/tab/more',
    component: MorePage
  }
]