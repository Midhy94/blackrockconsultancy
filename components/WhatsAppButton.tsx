'use client'

const whatsappNumber = '917304424022'
const whatsappMessage = 'Hello, I would like to know more about BLACK ROCKS CONSULTANCY services.'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        aria-hidden="true"
        focusable="false"
        className="fill-current"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.4 0 .02 5.38.02 12c0 2.1.55 4.16 1.59 5.98L0 24l6.18-1.61A11.97 11.97 0 0 0 12.02 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.51-8.52Zm-8.49 18.5h-.01a9.98 9.98 0 0 1-5.1-1.4l-.37-.22-3.67.96.98-3.58-.24-.37a9.96 9.96 0 0 1-1.53-5.35C2.1 6.5 6.52 2.08 12.03 2.08c2.67 0 5.18 1.04 7.07 2.94a9.92 9.92 0 0 1 2.93 7.06c0 5.5-4.48 9.9-10 9.9Zm5.48-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.25 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  )
}
