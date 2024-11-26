import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import React, { type ComponentProps } from "react";

interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className="flex-[0_0_33%] min-w-0 pl-4">{children}</div>;
};

interface CarouselContainerProps {
  children: React.ReactNode;
}

export const CarouselContainer: React.FC<CarouselContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex -ml-4">
      {React.Children.map(children, (child) => (
        <CarouselItem>{child}</CarouselItem>
      ))}
    </div>
  );
};

interface CarouselProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  options?: EmblaOptionsType;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  options,
  ...props
}) => {
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({
      startDelay: 0,
      speed: 1,
      direction: "forward",
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <div className="overflow-hidden" {...props} ref={emblaRef}>
      {children}
    </div>
  );
};
