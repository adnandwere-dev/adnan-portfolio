"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BadgeCheck,
  Box,
  CloudUpload,
  Cpu,
  Layers3,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

const svgIconMap = {
  html: "https://thesvg.org/icons/html5/default.svg",
  css: "https://thesvg.org/icons/css/default.svg",
  javascript: "https://thesvg.org/icons/javascript/default.svg",
  data_object: "https://thesvg.org/icons/react/default.svg",
  layers: "https://thesvg.org/icons/nextjs/default.svg",
  auto_awesome_motion: "https://thesvg.org/icons/tailwind-css/default.svg",
  database: "https://thesvg.org/icons/mysql/default.svg",
  code: "https://thesvg.org/icons/php/default.svg",
  api: "https://thesvg.org/icons/gcp-api/default.svg",
  auto_awesome: "https://thesvg.org/icons/gemini/default.svg",
};

const fallbackIconMap = {
  data_object: <Cpu size={32} className="text-primary" />,
  layers: <Layers3 size={32} className="text-primary" />,
  auto_awesome_motion: <Sparkles size={32} className="text-primary" />,
  fork_right: <Box size={32} className="text-primary" />,
  cloud_upload: <CloudUpload size={32} className="text-primary" />,
  animation: <MonitorSmartphone size={32} className="text-primary" />,
  bolt: <BadgeCheck size={32} className="text-primary" />,
};

export default function TechnologyCard({ tech }) {
  const svgIcon = svgIconMap[tech.icon];
  const fallbackIcon = fallbackIconMap[tech.icon];

  return (
    <motion.div
      className="bg-surface-container-low/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl flex flex-col items-center gap-2 group hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer"
      whileHover={{ scale: 1.04 }}
    >
      {svgIcon ? (
        <Image
          src={svgIcon}
          alt={tech.name}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
          unoptimized
        />
      ) : (
        fallbackIcon
      )}

      <span className="font-label-caps text-[10px]">{tech.name}</span>
    </motion.div>
  );
}
