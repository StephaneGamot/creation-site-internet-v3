"use client"

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer
      className="bg-[#3451a1] font-body"
      role="contentinfo"
      aria-label={t('ariaLabel')}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-sm text-gray-200 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3">
            <h3 className="text-lg font-title font-semibold text-white" id="footer-slogan">
                {t('slogan')}
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Stéphane Gamot — {t('copyright')}
        </div>
        
      </div>
    </footer>
  );
}
