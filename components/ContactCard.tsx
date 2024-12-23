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
      <Card className="p-6 bg-[#FFFCF3] shadow-lg">
        <h3 className="text-xl font-semibold text-[#7D1806] mb-2">{name}</h3>
        <p className="text-sm text-[#130504] mb-4">{role}</p>
        <div className="flex items-center gap-2 text-[#7D1806]">
          <Phone size={16} />
          <a href={`tel:${phone}`} className="hover:text-[#130504]">
            {phone}
          </a>
        </div>
      </Card>
    </motion.div>
  );
}