import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../convig";
import { Container } from "react-bootstrap";

const PostDetailPage = () => {
    const [posts, setPosts] = useState(null)
    const params = useParams()

    useEffect(() => {
        const getPosts = async () => {
            try {
                const { data } = await axios.get(`${API}posts/${params?.id}`)
                console.log('data', data)
                setPosts(data)
            } catch(e) {
                //
            }
        }
        getPosts()
    }, [])
    return(
        <Container style={{marginTop: 30}}>
            <h1 style={{marginBottom: 20}}>
                Ini Post Detail {params.id}
            </h1>

            <div>
                User: {posts?.userId}
            </div>
            <div>
                Title: {posts?.title}
            </div>
            <div>
                Body: {posts?.body}
            </div>
        </Container>
    )
}

export default PostDetailPage