import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";
import Loader from "../components/loader.component";
import { getDay } from "../common/date";

// banner to be included
export const blogStructure = {
    title: '',
    des: '',
    content: [],
    tags: [],
    author: { personal_info: { } },
    publishedAt: ''
}

const BlogPage = () => {
  const { blog_id } = useParams();
  const [blog, setBlog] = useState(blogStructure);
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
    fetchBlog();
  }, [blog_id]);

  return (
    <>
      <AnimationWrapper>
        {
            loading ? <Loader />
            : 
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
            </div>
        }
      </AnimationWrapper>
    </>
  );
};

export default BlogPage;