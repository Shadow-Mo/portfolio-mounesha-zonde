"use client";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export function FloatingDock({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) {
  /**
   * We only need ONE dock now, so we’ve combined
   * your original “desktop” logic for all screen sizes.
   */
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      // "Magnify on hover" logic
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      // Show for all screens, remove `md:flex` and `md:hidden`
      className={cn(
        "mx-auto flex h-16 gap-4 items-end rounded-2xl",
        "bg-gray-50 dark:bg-neutral-900 px-4 pb-3", 
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: DockItem & { mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null);

  // Distance from mouse pointer to icon center
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  // Transform for parent size
  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  // Transform for icon size
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  // Smooth spring transitions
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border 
                         dark:bg-neutral-800 dark:border-neutral-900 dark:text-white 
                         border-gray-200 text-neutral-700 absolute left-1/2 
                         -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon Container */}
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
