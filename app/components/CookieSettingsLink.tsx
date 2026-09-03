'use client';

declare global {
  interface Window {
    Cookiebot?: {
      renew: () => void;
      show: () => void;
      consented: boolean;
    };
  }
}

type CookieSettingsLinkProps = {
  label: string;
  className?: string;
};

export default function CookieSettingsLink({
  label,
  className = 'text-gray-400 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left',
}: CookieSettingsLinkProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.Cookiebot?.renew();
      }}
    >
      {label}
    </button>
  );
}
