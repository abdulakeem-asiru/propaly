import React from 'react'
import { motion } from 'motion/react';
import {  Briefcase } from 'lucide-react';
import { OnboardingData } from './OnboardingForm';

const professions = [
  'Real Estate Agent',
  'Real Estate Broker',
  'Property Manager',
  'Real Estate Developer',
  'Real Estate Investor',
  'Leasing Agent',
];

const StepTwo = ({formData, setFormData, nextStep, prevStep}: {nextStep: () => void, prevStep: () => void, 
                formData : OnboardingData, 
                setFormData: React.Dispatch<React.SetStateAction<OnboardingData>>}) => {
  return (
    <div>
      <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-(--primary-color)/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-(--primary-color)" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-(--text-primary)">Your Profession</h2>
                    <p className="text-(--text-secondary) text-sm">What best describes your role?</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {professions.map((profession, index) => (
                    <motion.button
                      key={profession}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setFormData({ ...formData, profession })}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        formData.profession === profession
                          ? 'border-(--primary-color) bg-(--primary-color)/5 shadow-md'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.profession === profession
                              ? 'border-(--primary-color)'
                              : 'border-slate-300'
                          }`}
                        >
                          {formData.profession === profession && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-3 h-3 rounded-full bg-(--primary-color)"
                            />
                          )}
                        </div>
                        <span
                          className={`${
                            formData.profession === profession
                              ? 'text-slate-900 font-medium'
                              : 'text-slate-700'
                          }`}
                        >
                          {profession}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => prevStep()}
                    className="px-8 h-12 border border-(--border-color) rounded-full"
                  >
                    Back
                  </button>
                  <button
                   onClick={() => nextStep()}
                    className="bg-(--primary-color) rounded-full hover:bg-[#e55d1f] text-white px-8 h-12"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
    </div>
  )
}

export default StepTwo
