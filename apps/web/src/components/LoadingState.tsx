import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

function LoadingState() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center gap-6 p-8 rounded-lg">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-slate-200 animate-ping opacity-75" />
          <div className="relative bg-white rounded-full p-4">
            <Loader2 className="h-8 w-8 animate-spin text-slate-600" />
          </div>
        </div>
        <div className="space-y-1 text-center">
          <p className="text-sm font-medium text-slate-900">
            Loading your profile
          </p>
          <p className="text-xs text-slate-500">Please wait a moment...</p>
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingState;
