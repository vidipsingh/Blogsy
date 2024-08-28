import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {

    let { blog_id } = useParams()

    const [blog, setBlog] = useState(null);

    const fetchBlog = () => {
        axios.post('http://localhost:3000/get-blog', { blog_id })
        .then(({ data: { blog } }) => {
            // setBlog(blog);
            console.log(blog);
            
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    useEffect(() => {
        fetchBlog();
    }, [])

    return(
        <>
        <h1>this is a BlogPage for - {blog_id}</h1>
        {/* <h2>{blog.title}</h2> */}
        </>
    )
}

export default BlogPage;