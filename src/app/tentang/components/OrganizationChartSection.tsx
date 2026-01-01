'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, TrendingUp, Zap, Cpu, ChevronDown } from 'lucide-react'

const staffMembers = [
  { title: "Finance", icon: Zap },
  { title: "Sales 1", icon: TrendingUp },
  { title: "Sales 2", icon: TrendingUp },
  { title: "Sales 3", icon: TrendingUp },
  { title: "Marketing", icon: Zap }
]

export default function OrganizationChartSection() {
  return (
    <div className="flex flex-col items-center space-y-12">
      {/* Manager */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
          transition: { duration: 0.14, ease: 'easeOut' }
        }}
        className="group relative w-64 p-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-2xl text-center shadow-lg overflow-hidden"
      >
        {/* Inner glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-150 pointer-events-none">
          <div className="absolute inset-0 bg-white/20 blur-xl scale-110" />
        </div>
        <Briefcase className="w-8 h-8 mx-auto mb-2 text-white transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
        <h3 className="text-white font-bold text-lg relative z-10">Manager</h3>
      </motion.div>

      <ChevronDown className="text-stone-600 w-8 h-8 animate-bounce" />

      {/* Supervisor */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.45)',
          transition: { duration: 0.14, ease: 'easeOut' }
        }}
        className="group relative w-60 p-5 bg-stone-800 border border-amber-500/50 rounded-2xl text-center overflow-hidden"
      >
        {/* Inner glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-150 pointer-events-none">
          <div className="absolute inset-0 bg-amber-500/20 blur-xl scale-110" />
        </div>
        <Users className="w-6 h-6 mx-auto mb-2 text-amber-500 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
        <h3 className="text-white font-bold relative z-10">Supervisor</h3>
      </motion.div>

      <div className="w-px h-10 bg-stone-700" />

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {staffMembers.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -14,
              scale: 1.045,
              boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
              transition: { duration: 0.14, ease: 'easeOut' }
            }}
            className="group relative p-4 bg-stone-900 border border-white/10 hover:border-amber-500/50 rounded-xl text-center overflow-hidden"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
            </div>
            <item.icon className="w-5 h-5 mx-auto mb-2 text-stone-400 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
            <span className="text-white font-medium text-sm relative z-10">{item.title}</span>
          </motion.div>
        ))}
        
        {/* Digital Program */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -14,
            scale: 1.045,
            boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
            transition: { duration: 0.14, ease: 'easeOut' }
          }}
          className="group relative md:col-span-3 lg:col-span-5 p-4 bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/50 rounded-xl text-center flex items-center justify-center gap-3 overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
          </div>
          <Cpu className="w-5 h-5 text-amber-500 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
          <span className="text-amber-500 font-bold relative z-10">Digital Program</span>
        </motion.div>
      </div>
    </div>
  )
}

