import React from 'react';
import HornedBeastParent from './HornedBeastParent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
    render() {
        console.log(this.props.dataFile);
        return (
            <>
                <Row xs={1} md={3} className="g-4">
                    {this.props.dataFile.map((item) => {
                        return (
                            <HornedBeastParent
                                titleM={item.title}
                                imageUrlM={item.image_url}
                                descriptionM={item.description}
                                handleShow={this.props.handleShow}
                                updateSelectedData={this.props.updateSelectedData}
                                // filterHandler={this.props.filterHandler}
                            />


                        )
                    })}


                </Row>

            </>
        )

    }
};

export default Main;

