import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

class Created extends Component {
    render() {
        return (
            <div className='text-center mt-5'>
                <p className='display-4'>Has been successfully created</p>
                    <Link to='/'>
                        <Button outline>Go Home</Button>
                    </Link>
            </div>
        );
    }
}

export default Created;