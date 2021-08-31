import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import CardGroup from 'react-bootstrap/CardGroup'

class HornedBeastParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numOfVotes: 0
        }
    }


    votesOnClickNumber = () => {
        this.setState({
            numOfVotes: this.state.numOfVotes + 1
        })
    }

    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.imageUrlM} onClick={this.votesOnClickNumber} />
                        <Card.Body>
                            <Card.Title>{this.props.titleM}</Card.Title>
                            <Card.Text>
                                ❤️ : {this.state.numOfVotes}
                            </Card.Text>
                            <Card.Text>
                                {this.props.descriptionM}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </>
        )
    }
};

export default HornedBeastParent;