import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/select", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/odd-numbers", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/even-numbers", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/prime-numbers", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/contributors",
    priority: 0.7,
    changeFrequency: "weekly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
