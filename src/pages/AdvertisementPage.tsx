import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Instagram, Heart, MessageCircle, Bookmark, Share2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Import normal ad images
import normalAd1 from '../assets/images/ad/normal Ad 1.webp';
import normalAd2 from '../assets/images/ad/normal ad 2.webp';
import normalAd3 from '../assets/images/ad/normal ad 3.webp';
import normalAd4 from '../assets/images/ad/normal ad 4.webp';
import normalAd5 from '../assets/images/ad/normal ad 5.webp';
import normalAd7 from '../assets/images/ad/normal ad 7.webp';

// Import Instagram ad images
import instaAd1 from '../assets/images/ad/insta Ad.webp';
import instaAd2 from '../assets/images/ad/insta ad 2.webp';
import instaAd3 from '../assets/images/ad/insta ad 3.webp';
import instaAd4 from '../assets/images/ad/insta ad 4.webp';
import instaAd5 from '../assets/images/ad/insta ad 5.webp';
import instaAd7 from '../assets/images/ad/insta ad 7.webp';

export function AdvertisementPage() {
  const normalAds = [
    { image: normalAd1, title: 'Fresh & Healthy' },
    { image: normalAd2, title: 'Natural Ingredients' },
    { image: normalAd3, title: 'Daily Fresh' },
    { image: normalAd4, title: 'Premium Quality' },
    { image: normalAd5, title: 'Sustainable Choice' },
    { image: normalAd7, title: 'Local Sourcing' }
  ];

  const instaAds = [
    { image: instaAd1, likes: '2,453', comments: '142' },
    { image: instaAd2, likes: '3,891', comments: '234' },
    { image: instaAd3, likes: '1,756', comments: '98' },
    { image: instaAd4, likes: '4,210', comments: '167' },
    { image: instaAd5, likes: '2,890', comments: '156' },
    { image: instaAd7, likes: '3,345', comments: '189' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Normal Ads Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
              Our Latest <span className="text-green-600">Campaigns</span>
            </h1>
            
            {/* Normal Ads Stack */}
            <div className="space-y-8">
              {normalAds.map((ad, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative">
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full h-auto"
                    />
                    
                    {/* Title Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{ad.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Style Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Instagram className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">
                @freshking.de
              </h2>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instaAds.map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* Post Header */}
                  <div className="p-4 flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <img
                        src="/favicon.ico"
                        alt="FreshKing"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">freshking.de</p>
                      <p className="text-sm text-gray-500">Hamburg, Germany</p>
                    </div>
                  </div>

                  {/* Post Image */}
                  <div className="aspect-square">
                    <img
                      src={post.image}
                      alt={`Instagram Post ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Post Actions */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <button className="hover:text-red-500 transition-colors">
                          <Heart className="w-6 h-6" />
                        </button>
                        <button className="hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-6 h-6" />
                        </button>
                        <button className="hover:text-green-500 transition-colors">
                          <Share2 className="w-6 h-6" />
                        </button>
                      </div>
                      <button className="hover:text-yellow-500 transition-colors">
                        <Bookmark className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Likes and Comments */}
                    <div className="space-y-2">
                      <p className="font-semibold">{post.likes} likes</p>
                      <p className="text-sm text-gray-500">View all {post.comments} comments</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <a
                href="https://instagram.com/freshking.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                Follow Us on Instagram
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
