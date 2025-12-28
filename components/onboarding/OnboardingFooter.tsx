'use client'
import {motion} from 'motion/react'

const OnboardingFooter = () => {
  return (
    <div>
      {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-slate-500 mt-6 mb-2"
        >
          By continuing, you agree to Propaly's Terms of Service and Privacy Policy
        </motion.p>
    </div>
  )
}

export default OnboardingFooter
