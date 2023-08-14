import React from 'react';
import './App.css';
import './View/Home/Home.css'
import '../src/View/News/News.css';
import '../src/View/About/About.css';
import '../src/View/Newsdetails/Newsdetails.css';
import '../src/View/Shop/Shop.css';
import '../src/View/SingleProduct/SingleProduct.css'
import '../src/View/Cart/Cart.css'
import '../src/View/Wishlist/Wishlist.css'
import '../src/View/MyOrder/Order.css'
import '../src/View/Review/Review.css'
import '../src/View/ManageAddress/ManageAddress.css'
import '../src/View/Checkout/Checkout.css'
import '../src/View/Category/Category.css'
import '../src/View/SelectPodcastDetails/Selectpodcastdetails.css'
import '../src/View/SelectSong/SelectSong.css'
import '../src/View/SelectPlaylist/SelectPlaylist.css'
import '../src/View/Music/Music.css'
import '../src/View/Podcast/Podcast.css'
import '../src/View/OTTHome/OTThome.css'
import '../src/View/Learning/Learning.css'
import '../src/View/Business/Business.css'
import '../src/View/Donation/Donation.css'
import '../src/View/Impact/Impact.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from '../src/View/Home/index';
import About from '../src/View/About/Index';
import News from '../src/View/News/Index';
import Newsdetails from '../src/View/Newsdetails/Index';
import Shop from '../src/View/Shop/Index';
import SingleProduct from '../src/View/SingleProduct/Index';
import Cart from '../src/View/Cart/Index'
import Wishlist from '../src/View/Wishlist/Index'
import Order from '../src/View/MyOrder/Index'
import Review from '../src/View/Review/Index'
import ManageAddress from '../src/View/ManageAddress/Index'
import Checkout from '../src/View/Checkout/Index'
import Category from '../src/View/Category/Index'
import SelectPodcastDetail from '../src/View/SelectPodcastDetails/Index'
import SelectSong from '../src/View/SelectSong/Index'
import SelectPlaylist from '../src/View/SelectPlaylist/Index'
import FavouritePodcast from '../src/View/FavouritePodcust/Index'
import FavouriteSong from '../src/View/FavouriteSong/Index'
import DownloadPodcast from '../src/View/DownloadPodcast/Index'
import DownloadSong from '../src/View/DownloadSong/Index'
import Music from '../src/View/Music/Index'
import Podcast from '../src/View/Podcast/Index'
import MusicPodcastlayout from './Layout/MusicPodcastlayout';
import OTThome from '../src/View/OTTHome/Index'
import SingleMovie from '../src/View/OTTHome/SingleMovie'
import SingleTvSeries from '../src/View/OTTHome/SingleTVseries'
import Subscription from '../src/View/OTTHome/Subscription'
import OTTLayout from './Layout/OTTLayout';
import OTTDownload from '../src/View/OTTHome/OTTDowmload'
import OTTWatchlist from '../src/View/OTTHome/OTTWatchlist'
import VideoScreen from './View/OTTHome/VideoScreen';
import LearningLayout from './Layout/LearningLayout';
import Learning from '../src/View/Learning/Index';
import BusinessLayout from './Layout/BusinessLayout';
import Businesshome from '../src/View/Business/Index';
import SingleCourse from './View/Learning/SingleCourse';
import CourseCart from './View/Learning/CourseCart';
import MyCourse from './View/Learning/MyCourse';
import Instructor from './View/Learning/Instructor';
import Watchlist from '../src/View/Business/Watchlist';
import Portfolio from '../src/View/Business/Portfolio';
import Businessnews from '../src/View/Business/Businessnews';
import Stockpage from '../src/View/Business/Stockpage'
import Donation from './View/Donation/Index'
import DonationLayout from './Layout/DonationLayout';
import Buynow from '../src/View/Business/Buynow';
import VideoSingle from './View/Learning/VideoSingle';
import Preview from '../src/View/Business/Preview';
import Payment from '../src/View/Business/Payment';
import ImpactLayout from './Layout/ImpactLayout';
import Impact from '../src/View/Impact/Index'
// import Position from '../src/View/Business/Position';
function App() {



  return (
    <React.Fragment>
      <Router>


        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={< Home />} />
            <Route path="/about" element={< About />} />
            <Route path="/news" element={< News />} />
            <Route path="/newsdetails" element={<Newsdetails />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/single-product" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/order" element={<Order />} />
            <Route path="/review" element={<Review />} />
            <Route path="/manage-address" element={<ManageAddress />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/category" element={<Category />} />
            <Route path="/selectpodcast-detail" element={<SelectPodcastDetail />} />
            <Route path="/select-song" element={<SelectSong />} />
            <Route path="/select-playlist" element={<SelectPlaylist />} />
            <Route path="/single-movie" element={<SingleMovie />} />
            <Route path="/singleTv-series" element={<SingleTvSeries />} />
            <Route path="/video-screen" element={<VideoScreen />} />
            <Route path="/stockpage" element={<Stockpage/>}/>
            <Route path="/videosingle-page" element={<VideoSingle />} />
            <Route path="/buynow" element={<Buynow/>} />
            <Route path="/preview" element ={<Preview/>}/>
            <Route path="/payment" element ={<Payment/>} />

            <Route element={<MusicPodcastlayout />}>
              <Route path="/music" element={<Music />} />
              <Route path="/music/favourite-song" element={<FavouriteSong />} />
              <Route path="/music/download-song" element={<DownloadSong />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/podcast/favourite-podcast" element={<FavouritePodcast />} />
              <Route path="/podcast/download-podcast" element={<DownloadPodcast />} />
            </Route>
            <Route element={<OTTLayout />}>
              <Route path="/ott-home" element={<OTThome />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/ott-download" element={<OTTDownload />} />
              <Route path="/ott-watchlist" element={<OTTWatchlist />} />
            </Route>

            <Route element={<LearningLayout />}>
              <Route path="/learning" element={<Learning />} />
              <Route path="/single-course" element={<SingleCourse />} />
              <Route path="/course-cart" element={<CourseCart />} />
              <Route path="/my-course" element={<MyCourse />} />
              <Route path="/instructor" element={<Instructor />} />
            </Route>

            <Route element={<DonationLayout />}>
              <Route path="/donation" element={<Donation />} />
            </Route>

            <Route element={<BusinessLayout />}>
              <Route path="/businesshome" element={<Businesshome />} />
              <Route path="/watchlist" element={<Watchlist/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path='/businessnews' element={<Businessnews/>}/>
            </Route>

            <Route element={<ImpactLayout/>}>
              <Route path="/impact" element={<Impact/>}/>
            </Route>

          </Route>
        </Routes>


      </Router>
    </React.Fragment>
  );
}

export default App;
