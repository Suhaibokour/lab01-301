import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
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

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.votesOnClickNumber} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            ❤️ : {this.state.numOfVotes}
                        </Card.Text>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>


                {/* 
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={this.props.imageUrl} onClick={this.votesOnClickNumber} />
                                <Card.Body>
                                    <Card.Title>{this.props.title}</Card.Title>
                                    <Card.Text>
                                        ❤️ : {this.state.numOfVotes}
                                    </Card.Text>
                                    <Card.Text>
                                        {this.props.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row> */}

{/* 
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={this.props.imageUrl} onClick={this.votesOnClickNumber} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                ❤️ : {this.state.numOfVotes}
                            </Card.Text>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={this.props.imageUrl} onClick={this.votesOnClickNumber} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                ❤️ : {this.state.numOfVotes}
                            </Card.Text>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={this.props.imageUrl} onClick={this.votesOnClickNumber} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                ❤️ : {this.state.numOfVotes}
                            </Card.Text>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup> */}
            </>
        )
    }
};

export default HornedBeastParent;