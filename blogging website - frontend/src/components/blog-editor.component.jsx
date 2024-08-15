import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
import AnimationWrapper from "../common/page-animation";
import defaultBanner from '../imgs/blog banner.png'
import { useContext, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { EditorContext } from "../pages/editor.pages";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./tools.component";

const BlogEditor = () => {

    let { blog, blog: { title, banner, content, tags, des }, setBlog, textEditor, setTextEditor, setEditorState } = useContext(EditorContext)

    // useEffect
    useEffect(() => {
      setTextEditor(new EditorJS({
        holderId: "textEditor",
        data: content,
        tools: tools,
        placeholder: "Write a masterpiece!"
      }))
    }, [])
    

    const handleTitleKeyDown = (e) => {
        console.log(e);
        if(e.keyCode == 13 ) {
            e.preventDefault();
        }
        
    }

    const handleTitleChange = (e) => {
        let input = e.target;
        
        input.style.height = 'auto';
        input.style.height = input.scrollHeight + "px";

        setBlog({ ...blog, title: input.value })

    }

    const handleBannerUpload = (e) => {
        // console.log(e);
        // let blogBannerRef = useRef();
        let img = e.target.files[0];

        let loadingToast = toast.loading("Uploading...")
        console.log(img);

        toast.dismiss(loadingToast);
        toast.success("Uploaded :)");

        setBlog({ ...blog, banner: img })
        
        // if(img) {
        //     blogBannerRef.current.src
        // }
        
    }

    const handleError = (e) => {
        let img = e.target;
        
        img.src = defaultBanner;
        
    }

    const handlePublishEvent = () => {

        // if(!banner.length) {
        //     return toast.error("Upload a blog banner to publish it");
        // }

        // if(!title.length) {
        //     return toast.error("Write blog title to publish it");
        // }

        if(textEditor.isReady) {
            textEditor.save().then(data => {
                if(data.blocks.length) {
                    setBlog({ ...blog, content: data });
                    setEditorState("publish")
                } else {
                    toast.error("Write something in your blog to publish it")
                }
            })
            .catch((err) => {
                console.log(err);
                
            } )
        }

    }

    return (
        <>
        <nav className="navbar">
            <Link to="/" className="flex-none w-10 ">
                <img src={Logo} alt="" />
            </Link>

            <p className="max-md:hidden text-black line-clamp-1 w-full ">
                { title.length ? title : "New Blog" }
            </p>

            <div className="flex gap-4 ml-auto">
                <button className="btn-dark py-2" onClick={handlePublishEvent} >
                    Publish
                </button>
                <button className="btn-light py-2">
                    Save Draft
                </button>
            </div>

        </nav>
        <Toaster/>
        <AnimationWrapper>
            <section>
                <div className="mx-auto max-w-[900px] w-full ">

                    <div className="relative aspect-video hover:opacity-80 bg-white border-4 border-grey ">
                        <label htmlFor="uploadBanner" >
                            <img 
                            src={banner} alt="" className="z-20" onError={handleError} />
                            <input id="uploadBanner" type="file" accept=".png, .jpg, .jpeg" hidden onChange={handleBannerUpload} />
                        </label>
                    </div>

                    <textarea defaultValue={title} placeholder="Blog Title" className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40 " onKeyDown={handleTitleKeyDown} onChange={handleTitleChange} >

                    </textarea>

                    <hr className="w-full opacity-10 my-5"/>

                    <div id="textEditor" className="font-gelasio">

                    </div>

                </div>
            </section>
        </AnimationWrapper>

        </>
    )
}

export default BlogEditor;