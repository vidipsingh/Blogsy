import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";
import Loader from "../components/loader.component";
import { getDay } from "../common/date";
import BlogInteraction from "../components/blog-interaction.component";
import BlogPostCard from "../components/blog-post.component";

// banner to be included
export const blogStructure = {
    title: '',
    des: '',
    content: [],
    author: { personal_info: { } },
    publishedAt: ''
}

export const BlogContext = createContext({ });

const BlogPage = () => {
  const { blog_id } = useParams();
  const [blog, setBlog] = useState(blogStructure);
  const [similarBlogs, setSimilarBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

//   banner to be included
  let { title, content, author: { personal_info: { fullname, username: author_username, profile_img } }, publishedAt } = blog;

  const fetchBlog = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`http://localhost:3000/get-blog`, {
        blog_id, // Send blog_id in the request body
      });

      const response2 = await axios.post(`http://localhost:3000/search-blogs`, { limit: 6, eliminate_blog: blog_id });
      // console.log(tags);
      
      setSimilarBlogs(response2.data.blogs); // Correctly setting the similar blogs from response2
      console.log(response2.data.blogs); // Logging the similar blogs


      setBlog(response.data.blog);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching blog:", err);
      setError(err);
      setLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {

    resetStates();

    fetchBlog();
  }, [blog_id]);

  const resetStates = () => {
    setBlog(blogStructure);
    setSimilarBlogs(null);
    setLoading(true);
  }

  return (
    <>
      <AnimationWrapper>
        {
            loading ? <Loader />
            : 
            <BlogContext.Provider value={{ blog, setBlog }}>
                <div className="max-w-[900px] center py-10 max-lg:px-[5vw] ">
                    {/* banner to be included */}
                    <img src="" alt="" className="aspect-video " />

                    <div className="mt-12">
                        <h2>{title}</h2>

                        <div className="flex max-sm:flex-col justify-between my-8">
                            <div className="flex gap-5 items-start">
                                <img src={profile_img} alt="" className="w-12 h-12 rounded-full" />

                                <p className="capitalize">
                                    {fullname}
                                    <br />
                                    @
                                    <Link to={`/user/${author_username}`} className="underline">{author_username}</Link>
                                </p>
                            </div>
                            <p className="text-dark-grey opacity-75 max-sm:mt-6 max-sm:ml-12 max-sm:pl-5">Published on {getDay(publishedAt)}</p>
                        </div>
                    </div>

                    <BlogInteraction />
                      {/* Blog content */}

                    <BlogInteraction />


                        {
                          similarBlogs != null && similarBlogs.length ? 
                          <>
                            <h1 className="text-2xl mt14 mb10 font-medium">Similar Blogs</h1>

                            {
                              similarBlogs.map((blog, i) => {
                                let { author: { personal_info } } = blog;

                                return <AnimationWrapper keyValue={i} transition={{ duration: 1, delay: i*0.8 }} >
                                    <BlogPostCard content={blog} author={personal_info}/>
                                </AnimationWrapper>
                              })
                            }
                          </>
                          : " "
                        }


                </div>
            </BlogContext.Provider>
        }
      </AnimationWrapper>
    </>
  );
};

export default BlogPage;