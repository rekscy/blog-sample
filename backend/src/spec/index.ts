import basicInfo from "./global/basic-info.spec";
import servers from "./global/servers.spec";
import components from "./global/components.spec";
import tags from "./global/tags.spec";
import blogPosts from "./blog-posts/blog-posts.spec";

export default {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...blogPosts
};
