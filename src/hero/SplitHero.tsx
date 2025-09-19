import { forwardRef } from "react";
import { Info, Rocket, BookOpen, Code, ExternalLink } from "lucide-react";
import {
  Block,
  Stack,
  Grid,
  Group,
  Title,
  Text,
  Badge,
  Button,
  Image,
  Icon,
  Box
} from "@ui8kit/core";
import {
  SplitBlock,
  createContentHook,
} from "@ui8kit/core";
import type { SplitBlockProps } from "@ui8kit/core";
import { skyOSTheme } from "@ui8kit/core";

const currentTheme = skyOSTheme; // modernUITheme | skyOSTheme

const theme = {
  theme: currentTheme,
  themeRounded: currentTheme.rounded,
  themeButtonSize: currentTheme.buttonSize
}

// Hero data interface
export interface HeroData {
  badge?: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  images?: Array<{
    id: string;
    src: string;
    alt: string;
  }>;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonIcon?: any;
  secondaryButtonIcon?: any;
  topButton?: {
    text: string;
    href?: string;
  };
}

interface SplitHeroProps {
  content: HeroData;
  variant?: "media" | "gallery" | "simple" | "withTopButton";
  leftMedia?: boolean;
  useContainer?: boolean;
  py?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  // Named slots passthrough to SplitBlock
  slots?: SplitBlockProps["slots"];
}

// Custom content hooks for different hero variants
const heroContentHooks = {
  // Simple hero with media
  media: createContentHook({
    content: (content: HeroData) => (
      <Stack gap="xl" align="start">
        {content.badge && (
          <Badge variant="secondary" rounded={theme?.themeRounded.badge} size={theme?.themeButtonSize.badge}>
            {content.badge}
          </Badge>
        )}

        <Title order={1} size="4xl" fw="bold" className="tracking-tight">
          {content.title}
        </Title>

        <Text c="secondary-foreground" className="max-w-[42rem]">
          {content.description}
        </Text>

        {(content.primaryButtonText || content.secondaryButtonText) && (
          <Group gap="md" align="center">
            {content.primaryButtonText && (
              <Button
                variant="default"
                rounded={theme?.themeRounded.default}
                size={theme?.themeButtonSize.default}
                leftSection={content.primaryButtonIcon ? (
                  <Icon
                    c="primary-foreground"
                    lucideIcon={content.primaryButtonIcon || Info}
                  />
                ) : undefined}
              >
                {content.primaryButtonText}
              </Button>
            )}

            {content.secondaryButtonText && (
              <Button
                variant="outline"
                rounded={theme?.themeRounded.default}
                size={theme?.themeButtonSize.default}
                leftSection={content.secondaryButtonIcon ? (
                  <Icon
                    lucideIcon={content.secondaryButtonIcon || Rocket}
                  />
                ) : undefined}
              >
                {content.secondaryButtonText}
              </Button>
            )}
          </Group>
        )}
      </Stack>
    )
  }),

  // Hero with gallery
  gallery: createContentHook({
    content: (content: HeroData) => (
      <Stack gap="xl" align="start">
        {content.badge && (
          <Badge variant="secondary" rounded={theme?.themeRounded.badge} size={theme?.themeButtonSize.badge}>
            {content.badge}
          </Badge>
        )}

        <Title order={1} size="4xl" fw="bold" className="tracking-tight">
          {content.title}
        </Title>

        <Text c="secondary-foreground" className="max-w-[42rem]">
          {content.description}
        </Text>

        {(content.primaryButtonText || content.secondaryButtonText) && (
          <Group gap="md" align="center">
            {content.primaryButtonText && (
              <Button
                variant="default"
                rounded={theme?.themeRounded.default}
                size={theme?.themeButtonSize.default}
                leftSection={
                  <Icon
                    c="primary-foreground"
                    lucideIcon={BookOpen}
                  />
                }
              >
                {content.primaryButtonText}
              </Button>
            )}

            {content.secondaryButtonText && (
              <Button
                variant="outline"
                rounded={theme?.themeRounded.default}
                size={theme?.themeButtonSize.default}
                leftSection={
                  <Icon
                    lucideIcon={Code}
                  />
                }
              >
                {content.secondaryButtonText}
              </Button>
            )}
          </Group>
        )}
      </Stack>
    )
  }),

  // Hero with top button
  withTopButton: createContentHook({
    beforeContent: (content: HeroData) => (
      content.topButton ? (
        <Button variant="outline" rounded={theme?.themeRounded.default}>
          <Icon
            lucideIcon={ExternalLink}
          />
          {content.topButton.text}
        </Button>
      ) : null
    ),
    content: (content: HeroData) => (
      <Stack gap="xl" align="center" ta="center">
        {content.badge && (
          <Badge variant="secondary" rounded={theme?.themeRounded.badge} size={theme?.themeButtonSize.badge}>
            {content.badge}
          </Badge>
        )}

        <Title order={1} size="4xl" fw="bold" ta="center" className="tracking-tight">
          {content.title}
        </Title>

        <Text c="secondary-foreground" ta="center" className="max-w-[42rem]">
          {content.description}
        </Text>

        {(content.primaryButtonText || content.secondaryButtonText) && (
          <Group gap="md" align="center">
            {content.primaryButtonText && (
              <Button
                variant="default"
                rounded={theme?.themeRounded.default}
                size={theme?.themeButtonSize.default}
                leftSection={
                  <Icon
                    c="primary-foreground"
                    lucideIcon={Info}
                  />
                }
              >
                {content.primaryButtonText}
              </Button>
            )}

            {content.secondaryButtonText && (
              <Button
                variant="outline"
                rounded={theme?.themeRounded.default}
                size={theme?.themeButtonSize.default}
                leftSection={
                  <Icon
                    lucideIcon={Rocket}
                  />
                }
              >
                {content.secondaryButtonText}
              </Button>
            )}
          </Group>
        )}
      </Stack>
    )
  })
};

export const SplitHero = forwardRef<HTMLElement, SplitHeroProps>(
  ({
    content,
    variant = "media",
    leftMedia = false,
    useContainer = true,
    py = "lg",
    gap = "xl",
    className,
    slots,
    ...props
  }, ref) => {

    // Create media section based on variant
    const createMediaSection = () => {
      if (variant === "gallery" && content.images) {
        return (
          <Grid cols="1-2" gap="md">
            {content.images.map((image, index) => (
              <Block
                key={image.id}
                className={index === 0 ? "row-span-2" : ""}
                data-class="gallery-item"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width="100%"
                  height="100%"
                  fit="cover"
                  className="h-full w-full"
                  rounded={theme?.themeRounded.default}
                />
              </Block>
            ))}
          </Grid>
        );
      }

      if (content.image) {
        return (
          <Block>
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width="100%"
              height="auto"
              fit="cover"
              rounded={theme?.themeRounded.default}
            />
          </Block>
        );
      }

      // Default gradient background
      return (
        <Block
          className={`h-full bg-gradient-to-br from-primary/5 to-secondary/10 relative overflow-hidden rounded-${theme?.themeRounded.default}`}
          data-class="hero-gradient-background"
          rounded={theme?.themeRounded.default}
        >
          <Box className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        </Block>
      );
    };

    // Choose content hooks based on variant
    const contentHooks = heroContentHooks[variant as keyof typeof heroContentHooks] || heroContentHooks.media;

    return (
      <SplitBlock
        ref={ref}
        mediaSection={createMediaSection()}
        content={content}
        contentHooks={contentHooks}
        leftMedia={leftMedia}
        splitSection={!useContainer}
        py={py}
        gap={gap}
        className={className}
        slots={slots}
        {...props}
      />
    );
  }
);

SplitHero.displayName = "SplitHero";

// Export template configurations
// media, leftMedia, gallery, withTopButton, security