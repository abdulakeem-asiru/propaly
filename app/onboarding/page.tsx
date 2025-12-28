import OnboardingFooter from '@/components/onboarding/OnboardingFooter'
import OnboardingForm from '@/components/onboarding/OnboardingForm'


const page = () => {
  return (
       <div className="justify-center items-center flex-col flex min-h-screen ">
            <div className='flex items-center flex-col'>
              
                <h1 className='font-semibold text-xl mt-4 text-(--text-primary)'>Welcome to <span className='text-(--primary-color)'>Propaly</span></h1>
                <p className='text-(--text-secondary) text-sm'>Let&apos;s set up your account in just a few steps</p>
        </div>
      <div>
        <OnboardingForm />
      </div>
       <OnboardingFooter/>
    </div>
  )
}

export default page
