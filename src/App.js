import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import data from './components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Row xs={1} md={3} className="g-4">
                    {
                        data.map((item) => {
                            return (
                                <Main
                                title={item.title}
                                imageUrl={item.image_url}
                                description={item.description} 
                                />

                            )
                        })
                    };
                </Row>
        <Footer />


      </>

    );
  }
};

export default App;

