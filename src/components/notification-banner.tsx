import { X } from "lucide-react";
import { useState } from "react";

export function NotificationBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  if (!isBannerVisible) {
    return null;
  }

  return (
    <div className="bg-blue-600 text-white flex justify-center px-3 py-2">
      <p className="text-sm flex-1 text-center">
        Get 50% free account way for today, get get your money with referral
        code
      </p>

      <button className="ml-auto" onClick={() => setIsBannerVisible(false)}>
        <X className="size-4" />
      </button>
    </div>
  );
}
