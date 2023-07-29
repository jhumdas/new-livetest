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

function App() {



  return (
    <React.Fragment>
        <Router>


          <Routes>
            <Route element={<MainLayout/>}>
              <Route path="/" element={< Home />} />
              <Route path="/about" element={< About />} />
              <Route path="/news" element={< News />} />
              <Route path="/newsdetails" element={<Newsdetails/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/single-product" element={<SingleProduct/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/wishlist" element={<Wishlist/>}/>
              <Route path="/order" element={<Order/>}/>
              <Route path="/review" element={<Review/>}/>
              <Route path="/manage-address" element={<ManageAddress/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/category" element={<Category/>}/>
              <Route path="/selectpodcast-detail" element={<SelectPodcastDetail/>}/>
              <Route path="/select-song" element={<SelectSong/>}/>
              <Route path="/select-playlist" element={<SelectPlaylist/>}/>
             
              <Route element={<MusicPodcastlayout/>}>
              <Route path="/music" element={<Music/>}/>
              <Route path="/music/favourite-song" element={<FavouriteSong/>}/>
              <Route path="/music/download-song" element={<DownloadSong/>}/>
              <Route path="/podcast" element={<Podcast/>}/>
              <Route path="/podcast/favourite-podcast" element={<FavouritePodcast/>}/>
              <Route path="/podcast/download-podcast" element={<DownloadPodcast/>}/>






              </Route>
            </Route>
          </Routes>


        </Router>
      </React.Fragment>
  );
}

export default App;
