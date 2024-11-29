'use client';

import { Audio } from '@/components/sections';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function AudioPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 hover:bg-transparent"
        >
          <ChevronLeft size={20} />
          Back
        </Button>
      </div>
      <Audio />
    </motion.div>
  );
}
