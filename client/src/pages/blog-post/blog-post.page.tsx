import './blog-post-list.style.css';
import {useParams} from "react-router";

const BlogPost = () => {
  let { slug } = useParams<{slug: string}>();
  return <div>Now showing post {slug}</div>;
}

export default BlogPost;
