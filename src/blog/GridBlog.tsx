import { forwardRef } from "react";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import {
  Stack,
  Group,
  Title,
  Text,
  Badge,
  Button,
  Card,
  Image,
  Icon,
  Box
} from "@ui8kit/core";
import { skyOSTheme } from "@ui8kit/core";
import type { VariantSpacingProps, VariantGridProps } from "@ui8kit/core";

const currentTheme = skyOSTheme;

const theme = {
  theme: currentTheme,
  themeRounded: currentTheme.rounded,
  themeButtonSize: currentTheme.buttonSize
}

import {
  LayoutBlock,
  createLayoutContentHook
} from "@ui8kit/core";

// Blog post interface
interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  image?: {
    src: string;
    alt: string;
  };
  category: string;
  categoryId?: string;
}

// Blog data interface
export interface GridBlogData {
  badge?: string;
  title: string;
  description: string;
  buttonText?: string;
  categories?: Array<{
    id: string;
    name: string;
  }>;
  posts: BlogPost[];
}

interface GridBlogProps {
  content: GridBlogData;
  variant?: "cards" | "postsGrid" | "filtered" | "compact" | "featured";
  cols?: VariantGridProps["cols"];
  gap?: VariantGridProps["gap"];
  useContainer?: boolean;
  py?: VariantSpacingProps["py"];
  _showFilters?: boolean;
  className?: string;
}

// Custom content hooks for different blog variants
const gridBlogContentHooks = {
  // Blog cards variant
  cards: createLayoutContentHook({
    item: (post: BlogPost) => (
      <Card key={post.id} p="lg" rounded={theme?.themeRounded.default} shadow="sm" bg="card" className="hover:shadow-md transition-shadow">
        <Stack gap="md" align="start">
          {post.image && (
            <Box className="relative overflow-hidden rounded-md">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width="100%"
                height="200px"
                fit="cover"
                rounded={theme?.themeRounded.default}
              />

              <Box
                p="xs"
                bg="primary"
                rounded={theme?.themeRounded.default}
                data-class="category-badge"
                className="absolute top-3 left-3"
              >
                <Text size="xs" c="primary-foreground" fw="medium">
                  {post.category}
                </Text>
              </Box>
            </Box>
          )}

          <Stack gap="md" className="flex-1">
            <Title order={3} size="lg" fw="semibold" className="line-clamp-2">
              {post.title}
            </Title>

            <Text c="secondary-foreground" className="line-clamp-3">
              {post.description}
            </Text>
          </Stack>

          <Group gap="md" align="center" className="w-full text-xs text-muted-foreground">
            <Group gap="sm" align="center">
              <Icon size="lg" lucideIcon={User} />
              <Text size="xs" c="secondary-foreground">
                {post.author.name}
              </Text>
            </Group>

            <Group gap="sm" align="center">
              <Icon size="lg" lucideIcon={Calendar} />
              <Text size="xs" c="secondary-foreground">
                {post.date}
              </Text>
            </Group>

            <Group gap="sm" align="center">
              <Icon size="lg" lucideIcon={Clock} />
              <Text size="xs" c="secondary-foreground">
                {post.readTime}
              </Text>
            </Group>
          </Group>
        </Stack>
      </Card>
    )
  }),

  // Posts grid variant
  postsGrid: createLayoutContentHook({
    beforeItems: (content: GridBlogData) => (
      content.buttonText ? (
        <Group justify="between" align="center" className="w-full">
          <Box /> {/* Spacer */}
          <Button
            variant="outline"
            rounded={theme?.themeRounded.default}
            size={theme?.themeButtonSize.default}
            rightSection={
              <Icon lucideIcon={ArrowRight} />
            }>
            {content.buttonText}
          </Button>
        </Group>
      ) : null
    ),
    item: (post: BlogPost) => (
      <Card key={post.id} p="lg" rounded={theme?.themeRounded.default} shadow="sm" bg="card" className="hover:shadow-md transition-shadow">
        <Stack gap="md" align="start">
          {post.image && (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width="100%"
              height="180px"
              fit="cover"
              rounded={theme?.themeRounded.default}
            />
          )}

          <Stack gap="xs" className="flex-1">
            <Badge variant="secondary" size={theme?.themeButtonSize.badge} rounded={theme?.themeRounded.badge} className="max-w-fit">
              {post.category}
            </Badge>

            <Title order={3} size="md" fw="semibold" className="line-clamp-2">
              {post.title}
            </Title>

            <Text c="secondary-foreground" className="line-clamp-2">
              {post.description}
            </Text>
          </Stack>

          <Group gap="md" align="center" justify="between" className="w-full">
            <Group gap="sm" align="center">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width="24px"
                  height="24px"
                  fit="cover"
                  rounded="full"
                  className="w-10 h-10"
                />
              )}
              <Text size="xs" c="secondary-foreground">
                {post.author.name}
              </Text>
            </Group>

            <Group gap="md" align="center">
              <Text size="xs" c="secondary-foreground">
                {post.date}
              </Text>
              <Text size="xs" c="secondary-foreground">
                {post.readTime}
              </Text>
            </Group>
          </Group>
        </Stack>
      </Card>
    )
  }),

  // Filtered variant - Note: State management should be handled at component level
  filtered: createLayoutContentHook({
    beforeItems: (content: GridBlogData) => {
      return content.categories ? (
        <Group gap="md" align="center" justify="center" className="flex-wrap">
          <Button
            variant="default"
            rounded={theme?.themeRounded.default}
            size={theme?.themeButtonSize.default}
          >
            All
          </Button>
          {content.categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              rounded={theme?.themeRounded.default}
              size={theme?.themeButtonSize.default}
            >
              {category.name}
            </Button>
          ))}
        </Group>
      ) : null;
    },
    item: (post: BlogPost, _index: number) => (
      <Card key={post.id} p="md" rounded={theme?.themeRounded.default} shadow="sm" bg="card" className="hover:shadow-md transition-shadow">
        <Stack gap="md" align="start">
          {post.image && (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width="100%"
              height="160px"
              fit="cover"
              rounded={theme?.themeRounded.default}
            />
          )}

          <Stack gap="xs" className="flex-1">
            <Group gap="xs" align="center">
              <Icon lucideIcon={Tag} c="primary" />
              <Text size="xs" c="primary" fw="medium">
                {post.category}
              </Text>
            </Group>

            <Title order={4} size="sm" fw="semibold" className="line-clamp-2">
              {post.title}
            </Title>

            <Text size="xs" c="secondary-foreground" className="line-clamp-2">
              {post.description}
            </Text>
          </Stack>

          <Group gap="md" align="center" className="w-full text-xs">
            <Text size="xs" c="secondary-foreground">
              {post.author.name}
            </Text>
            <Text size="xs" c="secondary-foreground">
              •
            </Text>
            <Text size="xs" c="secondary-foreground">
              {post.readTime}
            </Text>
          </Group>
        </Stack>
      </Card>
    )
  }),

  // Compact variant
  compact: createLayoutContentHook({
    item: (post: BlogPost) => (
      <Card key={post.id} p="sm" rounded={theme?.themeRounded.default} shadow="sm" bg="card" className="hover:shadow-md transition-shadow">
        <Group gap="md" align="start">
          {post.image && (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width="80px"
              height="80px"
              fit="cover"
              rounded="full"
              className="w-10 h-10"
            />
          )}

          <Stack gap="xs" className="flex-1">
            <Badge variant="outline" size={theme?.themeButtonSize.badge} rounded={theme?.themeRounded.badge} className="max-w-fit">
              {post.category}
            </Badge>

            <Title order={4} size="sm" fw="semibold" className="line-clamp-2">
              {post.title}
            </Title>

            <Group gap="md" align="center" className="text-xs">
              <Text size="xs" c="secondary-foreground">
                {post.author.name}
              </Text>
              <Text size="xs" c="secondary-foreground">
                •
              </Text>
              <Text size="xs" c="secondary-foreground">
                {post.date}
              </Text>
            </Group>
          </Stack>
        </Group>
      </Card>
    )
  }),

  // Featured variant
  featured: createLayoutContentHook({
    item: (post: BlogPost, index: number) => {
      const isFeatured = index === 0;

      return (
        <Card
          key={post.id}
          p={isFeatured ? "xl" : "lg"}
          rounded={theme?.themeRounded.default}
          shadow={isFeatured ? "md" : "sm"}
          bg="card"
          className={`hover:shadow-lg transition-shadow ${isFeatured ? "col-span-2 row-span-2" : ""}`}
        >
          <Stack gap={isFeatured ? "lg" : "md"} align="start">
            {post.image && (
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width="100%"
                height={isFeatured ? "300px" : "200px"}
                fit="cover"
                rounded={theme?.themeRounded.default}
              />
            )}

            <Stack gap="md" className="flex-1">
              <Badge variant="secondary" size={theme?.themeButtonSize.badge} rounded={theme?.themeRounded.badge} className="max-w-fit">
                {post.category}
              </Badge>

              <Title
                order={isFeatured ? 2 : 3}
                size={isFeatured ? "xl" : "lg"}
                fw="bold"
                className="line-clamp-2"
              >
                {post.title}
              </Title>

              <Text
                size={isFeatured ? "md" : "sm"}
                c="secondary-foreground"
                className={isFeatured ? "line-clamp-4" : "line-clamp-2"}
              >
                {post.description}
              </Text>
            </Stack>

            <Group gap="md" align="center" justify="between" className="w-full">
              <Group gap="md" align="center">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={isFeatured ? "32px" : "24px"}
                    height={isFeatured ? "32px" : "24px"}
                    fit="cover"
                    rounded="full"
                    className="w-10 h-10"
                  />
                )}
                <Stack gap="none">
                  <Text size={isFeatured ? "sm" : "xs"} fw="medium">
                    {post.author.name}
                  </Text>
                  <Group gap="xs" align="center">
                    <Text size="xs" c="secondary-foreground">
                      {post.date}
                    </Text>
                    <Text size="xs" c="secondary-foreground">
                      •
                    </Text>
                    <Text size="xs" c="secondary-foreground">
                      {post.readTime}
                    </Text>
                  </Group>
                </Stack>
              </Group>

              {isFeatured && (
                <Button rounded={theme?.themeRounded.default} variant="outline" size={theme?.themeButtonSize.default} rightSection={
                  <Icon lucideIcon={ArrowRight} />
                }>
                  Read More
                </Button>
              )}
            </Group>
          </Stack>
        </Card>
      );
    }
  })
};

export const GridBlog = forwardRef<HTMLElement, GridBlogProps>(
  ({
    content,
    variant = "cards",
    cols = "1-2-3",
    py = "lg",
    gap = "xl",
    useContainer = true,
    _showFilters = false,
    className,
    ...props
  }, ref) => {

    // Choose content hooks and layout settings based on variant
    const getVariantConfig = () => {
      switch (variant) {
        case "cards":
          return {
            contentHooks: gridBlogContentHooks.cards,
            cols: "1-2-3" as const,
            gap: "xl" as const
          };

        case "postsGrid":
          return {
            contentHooks: gridBlogContentHooks.postsGrid,
            cols: "1-2-3" as const,
            gap: "lg" as const
          };

        case "filtered":
          return {
            contentHooks: gridBlogContentHooks.filtered,
            cols: "1-2-3" as const,
            gap: "lg" as const
          };

        case "compact":
          return {
            contentHooks: gridBlogContentHooks.compact,
            cols: "1" as const,
            gap: "sm" as const
          };

        case "featured":
          return {
            contentHooks: gridBlogContentHooks.featured,
            cols: "1-2-4" as const,
            gap: "lg" as const
          };

        default:
          return {
            contentHooks: gridBlogContentHooks.cards,
            cols: "1-2-3" as const,
            gap: "lg" as const
          };
      }
    };

    const config = getVariantConfig();

    // Transform posts to items for LayoutBlock
    const layoutContent = {
      ...content,
      items: content.posts
    };

    return (
      <LayoutBlock
        ref={ref}
        layout="grid"
        useContainer={useContainer}
        py={py}
        cols={cols as any || config.cols}
        gap={gap as any || config.gap}
        content={layoutContent}
        contentHooks={config.contentHooks}
        className={className}
        {...props}
      />
    );
  }
);

GridBlog.displayName = "GridBlog";

// Export template configurations
// cards, postsGrid, filtered, compact, featured