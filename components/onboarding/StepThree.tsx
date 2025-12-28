import { Radio } from 'lucide-react';
import React from 'react'
import {motion} from 'motion/react'
import { OnboardingData } from './OnboardingForm';

const sources = [
  'Google Search',
  'Social Media',
  'Friend/Colleague Referral',
  'Online Advertisement',
  'Real Estate Conference',
  'Email Newsletter',
  'Other',
];

const StepThree = ({formData, setFormData, prevStep} : {formData : OnboardingData,  
        setFormData: React.Dispatch<React.SetStateAction<OnboardingData>>, prevStep: () => void}) => {
  return (
    <div>
      <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-(--primary-color)/10 rounded-xl flex items-center justify-center">
                    <Radio className="w-6 h-6 text-(--primary-color)" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-(--text-primary)">How Did You Hear About Us?</h2>
                    <p className="text-(--text-secondary) text-sm">Help us improve our outreach</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {sources.map((source, index) => (
                    <motion.button
                      key={source}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setFormData({ ...formData, source })}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        formData.source === source
                          ? 'border-(--primary-color) bg-(--primary-color)/5 shadow-md'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.source === source
                              ? 'border-(--primary-color)'
                              : 'border-slate-300'
                          }`}
                        >
                          {formData.source === source && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-3 h-3 rounded-full bg-(--primary-color)"
                            />
                          )}
                        </div>
                        <span
                          className={`${
                            formData.source === source
                              ? 'text-slate-900 font-medium'
                              : 'text-slate-700'
                          }`}
                        >
                          {source}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                  onClick={() => prevStep()}
                    className="px-8 h-12 border border-slate-300 rounded-full hover:bg-slate-100"
                  >
                    Back
                  </button>
                  <button
                    className="rounded-full bg-(--primary-color) hover:bg-[#e55d1f] text-white px-8 h-12"
                  >
                    Complete Setup
                  </button>
                </div>
              </motion.div>
        </div>
  )
}

export default StepThree
