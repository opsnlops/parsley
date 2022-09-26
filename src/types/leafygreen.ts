import Banner from "@leafygreen-ui/banner";
import Card from "@leafygreen-ui/card";
import { Subtitle } from "@leafygreen-ui/typography";

export type BannerType = React.ComponentType<
  Omit<React.ComponentProps<typeof Banner>, "as">
>;

export type CardType = React.ComponentType<
  Omit<React.ComponentProps<typeof Card>, "as">
>;

export type SubtitleType = React.ComponentType<
  Omit<React.ComponentProps<typeof Subtitle>, "as">
>;