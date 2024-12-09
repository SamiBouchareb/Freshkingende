import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gift, Award, TrendingUp } from 'lucide-react';
import { PremiumCard } from '../../ui/PremiumCard';
import { StatsCard } from './StatsCard';

const prizes = [
  { id: 1, label: 'Try Again', type: 'retry', color: '#FF6B6B' },
  { id: 2, label: '$15 Coupon', type: 'coupon', value: 15, color: '#4ECB71' },
  { id: 3, label: 'Try Again', type: 'retry', color: '#FF6B6B' },
  { id: 4, label: '5% Off', type: 'discount', value: 5, color: '#FFD93D' },
  { id: 5, label: 'Next Time', type: 'lose', color: '#45B3E0' },
  { id: 6, label: 'Next Time', type: 'lose', color: '#45B3E0' },
];

export function RewardsRoulette() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  const SEGMENT_COUNT = prizes.length;
  const SEGMENT_ANGLE = 360 / SEGMENT_COUNT;

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setShowResult(false);

    const randomIndex = Math.floor(Math.random() * prizes.length);
    setSelectedPrize(randomIndex);

    // Calculate final angle to ensure clean landing on segment
    const extraSpins = 5; // Number of full rotations
    const segmentOffset = randomIndex * SEGMENT_ANGLE;
    const finalAngle = -(360 * extraSpins + segmentOffset);

    if (wheelRef.current) {
      // Apply transition duration of 6 seconds with easing
      wheelRef.current.style.transition = 'transform 6s cubic-bezier(0.2, 0, 0.2, 1)';
      wheelRef.current.style.transform = `rotate(${finalAngle}deg)`;
    }

    // Update state after animation completes
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
    }, 6000); // Match the 6s duration
  };

  // Create SVG path for a wheel segment
  const createSegmentPath = (index: number): string => {
    const startAngle = index * SEGMENT_ANGLE - 90; // Start at top
    const endAngle = (index + 1) * SEGMENT_ANGLE - 90;
    const radius = 150; // SVG circle radius
    const centerX = 160; // SVG viewBox center X
    const centerY = 160; // SVG viewBox center Y

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    return `M${centerX},${centerY} L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`;
  };

  // Calculate text position for each segment
  const getTextPosition = (index: number) => {
    const angle = (index * SEGMENT_ANGLE + SEGMENT_ANGLE / 2 - 90) * (Math.PI / 180);
    const radius = 100; // Distance from center
    const x = 160 + radius * Math.cos(angle);
    const y = 160 + radius * Math.sin(angle);
    const rotation = index * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
    return { x, y, rotation };
  };

  return (
    <div className="relative">
      {/* Premium section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
          Spin the Wheel of Fortune
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Try your luck and win amazing rewards! Every spin brings you closer to exclusive prizes and special offers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatsCard
          icon={Gift}
          label="Total Prizes Won"
          value="124"
          trend={12}
          iconColor="#4ADE80"
        />
        <StatsCard
          icon={Award}
          label="Current Streak"
          value="7 Days"
          trend={5}
          iconColor="#F472B6"
        />
        <StatsCard
          icon={TrendingUp}
          label="Win Rate"
          value="32%"
          trend={8}
          iconColor="#60A5FA"
        />
      </div>

      {/* Main wheel section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <PremiumCard className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  How It Works
                </h3>
                <p className="text-gray-400">
                  Spin the wheel for a chance to win amazing prizes! Each segment represents a different reward waiting to be claimed.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Win Instant Prizes</h4>
                    <p className="text-sm text-gray-400">Get instant rewards like coupons and discounts</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Daily Spins</h4>
                    <p className="text-sm text-gray-400">Come back every day for more chances to win</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Exclusive Rewards</h4>
                    <p className="text-sm text-gray-400">Special prizes for our loyal customers</p>
                  </div>
                </div>
              </div>
            </div>
          </PremiumCard>
        </div>

        <div className="order-1 lg:order-2">
          <PremiumCard className="p-8">
            <div className="relative w-[320px] h-[320px] mx-auto">
              {/* SVG Wheel */}
              <div 
                ref={wheelRef}
                className="w-full h-full transition-transform duration-[4000ms] ease-out"
                style={{ transformOrigin: 'center' }}
              >
                <svg
                  viewBox="0 0 320 320"
                  className="w-full h-full"
                >
                  <defs>
                    {prizes.map((prize, index) => (
                      <linearGradient
                        key={`gradient-${index}`}
                        id={`segment-gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor={prize.color} />
                        <stop offset="100%" stopColor={`${prize.color}dd`} />
                      </linearGradient>
                    ))}
                  </defs>
                  
                  {/* Wheel segments */}
                  <g>
                    {prizes.map((prize, index) => (
                      <path
                        key={prize.id}
                        d={createSegmentPath(index)}
                        fill={`url(#segment-gradient-${index})`}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                      />
                    ))}
                  </g>

                  {/* Segment text */}
                  <g>
                    {prizes.map((prize, index) => {
                      const { x, y, rotation } = getTextPosition(index);
                      return (
                        <text
                          key={`text-${prize.id}`}
                          x={x}
                          y={y}
                          fill="white"
                          fontSize="14"
                          fontWeight="bold"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          transform={`rotate(${rotation}, ${x}, ${y})`}
                          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                        >
                          {prize.label}
                        </text>
                      );
                    })}
                  </g>

                  {/* Center circle */}
                  <circle
                    cx="160"
                    cy="160"
                    r="8"
                    fill="white"
                    className="shadow-lg"
                  />
                </svg>
              </div>

              {/* Pointer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] z-10">
                <div className="w-6 h-8 flex justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-white drop-shadow-lg" />
                </div>
              </div>

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-white/10" />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={spinWheel}
              disabled={isSpinning}
              className="w-full mt-8 py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                       hover:shadow-lg hover:shadow-green-500/20 relative group overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <span className="relative">
                {isSpinning ? 'Spinning...' : 'SPIN NOW'}
              </span>
            </motion.button>
          </PremiumCard>
        </div>
      </div>

      {/* Results modal */}
      {showResult && selectedPrize !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowResult(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-md w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <PremiumCard className="p-8 text-center">
              <div className="mb-4 transform -translate-y-16">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto flex items-center justify-center">
                  {prizes[selectedPrize].type === 'lose' && (
                    <span className="text-5xl">😢</span>
                  )}
                  {prizes[selectedPrize].type === 'retry' && (
                    <span className="text-5xl">🔄</span>
                  )}
                  {(prizes[selectedPrize].type === 'coupon' || prizes[selectedPrize].type === 'discount') && (
                    <span className="text-5xl">🎉</span>
                  )}
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent -mt-8">
                {prizes[selectedPrize].type === 'lose' ? 'Maybe Next Time!' :
                 prizes[selectedPrize].type === 'retry' ? 'Try Again!' :
                 'Congratulations!'}
              </h3>

              <p className="text-xl text-gray-300 mb-8">
                {prizes[selectedPrize].type === 'coupon' && `You won a $${prizes[selectedPrize].value} coupon!`}
                {prizes[selectedPrize].type === 'discount' && `You won ${prizes[selectedPrize].value}% off your next order!`}
                {prizes[selectedPrize].type === 'retry' && 'Spin again for another chance to win!'}
                {prizes[selectedPrize].type === 'lose' && 'Keep playing to win amazing prizes!'}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowResult(false)}
                className="py-3 px-8 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold 
                         hover:shadow-lg hover:shadow-green-500/20 transition-all duration-200 relative group overflow-hidden"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                <span className="relative">Continue</span>
              </motion.button>
            </PremiumCard>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
