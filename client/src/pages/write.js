import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Axios from 'axios';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

class Write extends Component {
    constructor() {
        super();
        this.state = {
            created: false,
            err: null,
            loading: false
        }
        this.getValue = this.getValue.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    getValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    sendData = async () => {
        const {writer, title, content} = this.state;

        const data = {
            writer,
            title,
            content
        };

        this.setState({loading: true});

        try {
            await Axios.post('/addPost', data);
            this.setState({
                created: true,
                loading: false
            });
        } catch (err) {
            this.setState({
                err,
                loading: false
            })
        }
    };

    render() {
        const {created, err, loading} = this.state;
        if (created) return (<Redirect from='/write' to='/created'/>)
        if (err) return (<div className='text-center font-weight-bold'>{err.message}</div>);
        if (loading) return (<div className='text-center font-weight-bold'>Loading...</div>)
        return (
            <Form className='col-md-8 col-12 mx-auto mt-5'>
                <FormGroup>
                    <Label for='writerName'>Username:</Label>
                    <Input type='text' name='writer' id='writerName' placeholder="Please enter username."
                           onChange={this.getValue}/>
                </FormGroup>
                <FormGroup>
                    <Label for='postTitle'>Title:</Label>
                    <Input type='text' name='title' id='postTitle' placeholder='Please enter title.'
                           onChange={this.getValue}/>
                </FormGroup>
                <FormGroup>
                    <Label for='content'>Content:</Label>
                    <Input type='text' name='content' id='content' placeholder="Please enter content."
                           onChange={this.getValue}/>
                </FormGroup>
                <Button onClick={this.sendData}>Submit</Button>
            </Form>
        );
    }
}

export default Write;