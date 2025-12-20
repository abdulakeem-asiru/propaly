'use client'
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import { Enigma, Synergy, Vortex, Velocity } from '@/assets/images/trusted Client';
import Image from 'next/image';


const TrustedClientLogo =[
  {name: "Enigma",
    img : Enigma
  },
  {name: "Synergy",
    img : Synergy
  },  
  {name: "Vortex",
    img : Vortex
  },
  {name: "Velocity",
    img : Velocity
  },
]
export const TrustedClient = () => {
  return (
    <div className='flex w-full  items-center justify-center bg-background'>
      <Marquee className='w-6xl'>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {TrustedClientLogo.map((client) => (
          <MarqueeItem key={client.name} className="h-32 w-32 ">
            <Image src={client.img.src} alt={client.name} width={100} height={100} className="hover:opacity-80 overflow-hidden transition-all"/>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
    </div>
  )
}

