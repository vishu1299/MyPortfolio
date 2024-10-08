import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          className="relative group block p-4 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                // rounded-tl-[6px] rounded-br-[6px] rounded-tr-[50px] rounded-bl-[50px]
                className="absolute inset-0 h-full w-full  bg-[#2124287d] block rounded-2xl  "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImg src={item.icon} alt={`${item.title} Icon`} />{" "}
            {/* Pass icon correctly */}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      // rounded-tl-[4px] rounded-br-[4px] rounded-tr-[50px] rounded-bl-[50px] border-l-4 border-t-4 md:p-4
      className={cn(
        "h-full w-full overflow-hidden p-1 md:p-3 text-center rounded-2xl border-[#797575] group-hover:border-gray-200 relative z-20 bg-[#4b4e5464] transition-colors duration-300 ease-in-out delay-100 shadow-2xl ",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardImg = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => {
  return (
    <img
      src={src} // Use the src prop correctly
      alt={alt}
      className={cn("w-12 h-12 mx-auto mb-4", className)} // Adjust the class names as needed
    />
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
