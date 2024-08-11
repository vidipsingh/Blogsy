import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import BlogEditor from "../components/blog-editor.component";
import PublishForm from "../components/publish-form.component";

const Editor = () => {

    const [editorState, setEditorState] = useState("editor");

    // destructuring access token
    let { userAuth: { access_token } } = useContext(UserContext) 

    return(
        // for checking if user is logged in then only they can access the editor page
        access_token === null ? <Navigate to="/signin" />
        : editorState == "editor" ? <BlogEditor /> : <PublishForm />
    )
}

export default Editor;