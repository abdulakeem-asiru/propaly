import React, {useState} from 'react'


const Contact = () => {

      // Contact Section State
  const [contactAddress, setContactAddress] = useState('123 Victoria Island, Lagos, Nigeria');
  const [contactPhone, setContactPhone] = useState('+234 800 123 4567');
  const [contactEmail, setContactEmail] = useState('hello@propaly.com');
  const [contactWhatsapp, setContactWhatsapp] = useState('+234 800 123 4567');
  
  return (
    <div className="bg-white border border-[var(--border-color)] rounded-xl p-6">
  <h3 className="text-[var(--text-primary)] font-medium text-[18px] mb-5">
    📍 Contact Information
  </h3>

  <div className="space-y-4">

    <div>
      <label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Address
      </label>
      <input
        type="text"
        value={contactAddress}
        onChange={(e) => setContactAddress(e.target.value)}
        className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
      />
    </div>

    <div>
      <label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Phone
      </label>
      <input
        type="tel"
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value)}
        className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
      />
    </div>

    <div>
      <label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Email
      </label>
      <input
        type="email"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
        className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] font-medium focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
      />
    </div>

    <div>
      <label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        WhatsApp
      </label>
      <input
        type="tel"
        value={contactWhatsapp}
        onChange={(e) => setContactWhatsapp(e.target.value)}
        className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
      />
    </div>

    <div>
      <label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Google Maps Embed URL
      </label>
      <input
        type="text"
        placeholder="https://maps.google.com/..."
        className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
      />
    </div>

  </div>
</div>

  )
}

export default Contact
