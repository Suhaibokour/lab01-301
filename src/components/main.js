import React from 'react';
import HornedBeastParent from './HornedBeastParent';
// import data from './data.json';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Row from 'react-bootstrap/Row';


class Main extends React.Component {
    render() {
        return (
            <>

                <HornedBeastParent
                    titleM={this.props.title}
                    imageUrlM={this.props.imageUrl}
                    descriptionM={this.props.description}
                />

            </>
        )
    }
};

export default Main;