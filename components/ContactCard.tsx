"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
}

export default function ContactCard({ name, role, phone }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 bg-[#1F1D17] border-[#F3E1B3]/20 shadow-lg">
        <h3 className="text-xl font-semibold text-[#F3E1B3] mb-2">{name}</h3>
        <p className="text-sm text-[#F3E1B3]/80 mb-4">{role}</p>
        <div className="flex items-center gap-2 text-[#F3E1B3]">
          <Phone size={16} />
          <a href={`tel:${phone}`} className="hover:text-[#F3E1B3]/80">
            {phone}
          </a>
        </div>
      </Card>
    </motion.div>
  );
}