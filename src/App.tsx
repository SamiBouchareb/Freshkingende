import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Menu } from './components/home/Menu';
import { OurStory } from './components/home/OurStory';
import { OurMission } from './components/home/OurMission';
import { Locations } from './components/home/Locations';
import { Footer } from './components/layout/Footer';
import { CartProvider } from './context/CartContext';
import { CustomCursor } from './components/common/CustomCursor';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Checkout } from './components/checkout/Checkout';
import { RewardsPage } from './pages/RewardsPage';
import { AuthProvider } from './context/AuthContext';
import { InvestorPage } from './pages/InvestorPage';
import { AdvertisementPage } from './pages/AdvertisementPage';
import ChatBot from './components/chat/ChatBot';
import { TeslaBot } from './components/home/TeslaBot';

function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen bg-white flex flex-col">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero id="home" />
                      <Menu id="menu" />
                      <OurStory id="about" />
                      <OurMission id="sustainability" />
                      <Locations id="locations" />
                      <TeslaBot id="tesla-bot" />
                    </>
                  } />
                  <Route path="/menu" element={<Menu id="menu" />} />
                  <Route path="/rewards" element={<RewardsPage />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/investors" element={<InvestorPage />} />
                  <Route path="/advertisement" element={<AdvertisementPage />} />
                </Routes>
              </main>
              <Footer />
              <ChatBot />
            </div>
          </CartProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;