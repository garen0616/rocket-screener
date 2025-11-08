"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-white">
      <header className="hero-shell">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-panel"
          >
            <h1>Rocket Screener Pro</h1>
            <p className="text-white/80 text-base max-w-3xl">
              雙重標準檢視大型與小型股，將財報記憶、目標區間、風險控管與倉位指引一次呈現，協助投資決策更快速、更具結構。
            </p>
          </motion.div>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className={cn("container flex flex-col gap-8 pb-10")}
      >
        {children}
      </motion.main>
      <Toaster />
    </div>
  );
}
