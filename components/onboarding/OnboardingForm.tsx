'use client';
import { useState } from 'react';
import {AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { useForm, FormProvider } from "react-hook-form";
import { onboardingSchema, OnboardingSchemaType } from '@/schemas/onboardingSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import toast, { Toaster } from 'react-hot-toast';


const OnboardingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const form = useForm<OnboardingSchemaType>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      companyName: '',
      logo: null,
      profession: '',
      source: '',
    },
  });

  const onSubmit = async(data: OnboardingSchemaType) => {
    setIsLoading(true);
    try{
       const res = await fetch('/api/onboarding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
      if (!res.ok) {
        toast.error("Failed to complete onboarding. Please try again.");
      } else {
        toast.success("Onboarding Completed Successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    finally {
      setIsLoading(false);
    }
  }


  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  }

   const handlePrev = () => {
    setStep((prev) => Math.min(prev - 1, 3));
  }
  return (
    <>
        {/* Step Indicator */}
    <div className="my-8 ">
        <div className="flex justify-center items-center gap-2">
            {[1,2,3].map((i) =>(
                <>
                <div key={i}  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step >= i
                      ? 'bg-(--primary-color) text-white'
                      : 'bg-white border-2 border-slate-200 text-slate-400'
                  }`}>
                    {step > i ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{i}</span>
                  )}
                  
                  </div>
                  {i < 3 && (
                  <div
                    className={`w-12 md:w-20 h-1 mx-1 rounded-full transition-all duration-500 ${
                      step > i ? 'bg-(--primary-color)' : 'bg-slate-200'
                    }`}
                  ></div>
                )}
                </>
            ))}
        </div>
         <div className="mt-2 text-center text-sm font-medium text-slate-600">
            Step {step} of 3
          </div>
    </div>

    {/* Form */}
    
          <div className="mx-auto p-8 w-150 shadow-xl rounded-2xl border-0 bg-white/80 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <FormProvider {...form}>
                <form  onSubmit={form.handleSubmit(onSubmit)}>
                {step === 1 && (
                <StepOne  form={form} next={handleNext} />
                
                )}

            {step === 2 && (
              <StepTwo form={form} 
                nextStep={handleNext} prevStep={handlePrev}/>
            )}
            {step === 3 && (
            <StepThree prevStep={handlePrev} form={form} isLoading={isLoading} />
            )}
             </form>
              </FormProvider>
            </AnimatePresence>
            <Toaster />
          </div>
      </>
  );
};

export default OnboardingForm;