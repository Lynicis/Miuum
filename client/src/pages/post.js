import React, {Component} from 'react';
import Axios from 'axios';
import {Container} from 'reactstrap';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            post: [],
            err: null,
            loading: false
        }
    }

    getPost = async () => {
        this.setState({loading: true})
        try {
            const {id} = this.props.match.params;
            const res = await Axios.get(`/getPost/${id}`)
            this.setState({
                post: res.data,
                loading: false
            })
        } catch (err) {
            this.setState({
                err,
                loading: false
            })
        }
    }

    componentDidMount() {
        this.getPost()
    }

    render() {
        const {err, loading, post} = this.state;
        if (err) {
            return (<div className='text-center font-weight-bold'>{err.message}</div>)
        }
        if (loading) {
            return (<div className='text-center font-weight-bold'>Loading...</div>)
        }
        return (
            <Container className='d-flex justify-content-center'>
                {post.length > 0 ?
                    /* why used there map function ?
                        because mapping of in array.
                        if not used map not viewed content
                    */
                    post.map(p => (
                        <div className='col-md-9 col-10 mt-5' key={p.id}>
                            <div className='display-4 mb-3'>{p.title}</div>
                            <p className='text-justify'>{p.content}</p>
                            <small className='text-left'>{p.writer} - {p.date}</small>
                        </div>
                    ))
                    : <p className='text-center font-weight-bold'>Not Found</p>}
            </Container>
        );
    }
}

export default Post;