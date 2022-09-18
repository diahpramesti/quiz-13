import { useEffect, useState } from "react";
import { API } from "../convig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        const getPosts = async () => {
            try {
                const { data } = await axios.get(`${API}posts`)
                setPosts(data)
                console.log('data', data)
            } catch (e) {
                //
            }
        }
        getPosts();
    }, [])
    return (
        <div className="container" style={{marginTop: 30}}>
            <h1 style={{marginBottom: 20}}>Home Page for Posts</h1>
            <ul>
                {posts?.map((posts) => (
                    <li>
                        <Card style={{marginBottom: 20}}> 
                            <Card.Body>
                                <Card.Title>{posts.title}</Card.Title>
                                <Card.Text>{posts.body}</Card.Text>
                                <Button variant="primary" onClick={() => navigate(`${posts.id}`)}>Show Detail</Button>
                            </Card.Body>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage;