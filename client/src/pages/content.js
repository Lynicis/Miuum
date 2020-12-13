import React, {Component} from "react";
import Axios from 'axios';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    Button,

} from 'reactstrap';
import {Link} from "react-router-dom";

class Content extends Component{
    constructor() {
        super();
        this.state = {
            posts: [],
            err: null,
            loading: false
        };
    }

    getPosts = async () =>{
        this.setState({loading: true});
        try {
            const res = await Axios.get('/getPosts');
            this.setState({
                posts: res.data,
                loading: false
            })
        }catch (err) {
            this.setState({
               err,
               loading: false
            });
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        const {posts, err, loading} = this.state;
        if(err) return(<p className='text-center font-weight-bold'>{err.message}</p>);
        if(loading) return(<p className='text-center font-weight-bold'>Loading...</p>);
        return(
            <div>
                {posts.length > 0 ?
                    posts.map(u=>(
                        <Card key={u.id} className='col-12 col-md-8 mx-auto mt-3'>
                            <CardBody>
                                <CardTitle tag='h2'>{u.title}</CardTitle>
                                <CardSubtitle className='text-muted'>{u.writer} - {u.date}</CardSubtitle>
                                <CardText className='text-truncate'>{u.content}</CardText>
                                <Link to={`/post/${u.id}`} target={Content}>
                                    <Button>Read More...</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    )) : <p className='text-center font-weight-bold'>Still not added post</p>
                }
            </div>
        );
    }
}

export default Content;