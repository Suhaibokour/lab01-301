import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class MyForm extends React.Component {
    render() {
        return (

            <Form style={{ padding: 20 }}>
                <Form.Group className="mb-3" controlId="horns">
                    <Form.Select style={{ width: '18rem' }} onChange={this.props.filterHandler} aria-label="Default select example" name="horns" id="horns">
                        <option>Filter based on hornes number</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">woow</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        )
    }
}


export default MyForm;