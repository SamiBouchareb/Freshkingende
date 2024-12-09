import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: number;
  iconColor?: string;
}

export function StatsCard({ icon: Icon, label, value, trend, iconColor = '#4ADE80' }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-gray-900/40 p-6 backdrop-blur-lg"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent" />

      {/* Icon background */}
      <div
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle at center, ${iconColor}, transparent 70%)`,
        }}
      />

      <div className="relative flex items-start justify-between">
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-400">{label}</div>
          <div className="flex items-baseline space-x-2">
            <div className="text-2xl font-bold text-white">{value}</div>
            {trend !== undefined && (
              <div className={`text-sm ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {trend >= 0 ? '+' : ''}{trend}%
              </div>
            )}
          </div>
        </div>
        <div
          className="rounded-full p-2"
          style={{
            background: `linear-gradient(135deg, ${iconColor}40 0%, ${iconColor}20 100%)`,
          }}
        >
          <Icon className="h-5 w-5" style={{ color: iconColor }} />
        </div>
      </div>
    </motion.div>
  );
}
