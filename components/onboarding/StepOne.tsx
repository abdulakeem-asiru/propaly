import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'motion/react';
import React, { useState} from 'react';
import { Upload, Building2 } from 'lucide-react';
import { OnboardingSchemaType } from '@/schemas/onboardingSchema';
import { UseFormReturn } from 'react-hook-form';



const StepOne = ({ form, next } : {form: UseFormReturn<OnboardingSchemaType>; next: () => void; }) => {
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const watchedCompanyName = form.watch("companyName");
    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("logo", file, {
      shouldDirty: true,
      shouldValidate: true,
    });
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleNext = async () => {
    const isValid = await form.trigger("logo");
  if (!isValid) return;
    next();
  }
  return (
    <div>
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-(--primary-color)/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-(--primary-color)" />
                  </div>
                  <div >
                    <h2 className="text-xl font-semibold text-(--text-primary)">Company Details</h2>
                    <p className="text-(--text-secondary) text-sm">Tell us about your business</p>
                  </div>
                </div>

                <div className="space-y-6 mt-10">
                  <div>
                    <Label htmlFor="companyName" className="text-slate-700 mb-2 block">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="e.g., Sunset Realty Group"
                      {...form.register("companyName")}
                      required
                      className="h-12 border-slate-200 focus:border-(--primary-color) focus:ring-(--primary-color)"
                    />
                     <p className='text-red-600 text-sm'>{form.formState.errors.companyName?.message}</p>
                  </div>

                  <div>
                    <Label htmlFor="logo" className="text-slate-700 mb-2 block">
                      Company Logo (Optional)
                    </Label>
                    <div className="flex items-center gap-4">
                      <input
                        id="logo"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="logo"
                        className="flex-1 h-12 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:border-(--primary-color) hover:bg-(--primary-color)/5 transition-all"
                      >
                        <Upload className="w-5 h-5 text-slate-400" />
                        <span className="text-sm text-slate-600">
                          {form.getValues("logo") ? form.getValues("logo")?.name : 'Upload logo'}
                        </span>
                      </label>
                      {logoPreview && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-12 h-12 border-2 border-slate-200 rounded-lg overflow-hidden"
                        >
                          <img
                            src={logoPreview}
                            alt="Logo preview"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      )}
                    </div>
                     <p className='text-red-600 text-sm'>{form.formState.errors.logo?.message}</p>
                  </div>
                </div>
              </motion.div>
                 <div className="mt-8 flex justify-end">
                  <button
                  onClick={() => handleNext()}
                  disabled={!watchedCompanyName && true}
                    className={`bg-(--primary-color) cursor-pointer rounded-full hover:bg-[#e55d1f]
                       text-white px-8 h-12 ${watchedCompanyName ? '' : 'opacity-70 cursor-not-allowed'}`} 
                  >
                    Continue
                  </button>
                </div>
             </div>
  )
}

export default StepOne
