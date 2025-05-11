import Link from "next/link";
import { useRouter } from "next/navigation";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export default function Logo({ className = "", onClick }: LogoProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: reset page and navigate home
      window.dispatchEvent(new Event("resetPage"));
      router.push("/");
      router.refresh();
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={`flex items-center space-x-2 ${className}`}
    >
      {/* Logo Icon */}
      <div className="relative w-8 h-8">
        {/* Play button circle */}
        <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
        {/* Play triangle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-0.5"></div>
        </div>
        {/* Streaming waves */}
        <div className="absolute -right-1 -bottom-1 w-4 h-4">
          <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-ping"></div>
          <div className="absolute inset-0 border-2 border-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Text */}
      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        TeraBox Stream
      </span>
    </Link>
  );
}
