import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import dataFile from './components/data.json';
import MyForm from './components/form'
import SelectBeast from './components/SelectedBeast';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      data: dataFile,
      show: false,
      title: '',
      image_url: '',
      description: '',
      horns: 0

    }
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  updateSelectedData = (titleM, imageUrlM, descriptionM) => {
    this.setState({
      title: titleM,
      image_url: imageUrlM,
      description: descriptionM
    })
  }

  filterHandler = (event) => {
    event.preventDefault();
    let horns = event.target.value;
    let filteredData = dataFile.filter(item => {
      // if (item.horns === 1) {
      //   return true;
      // } else if (item.horns === 2) {
      //   return true;
      // } else if (item.horns === 3) {
      //   return true;
      // } else {
      //   return true;
      // }
      return (item.horns === Number(horns));

    }
    )

    this.setState({
      data: filteredData
    })
    
  }


  render() {
    return (
      <>
        {/* <SelectBeast/> */}
        <Header />
        <MyForm
          filterHandler={this.filterHandler}
        />
        <Main
          dataFile={dataFile}
          handleShow={this.handleShow}
          updateSelectedData={this.updateSelectedData}
          filterHandler={this.filterHandler}

        />
        <SelectBeast
          show={this.state.show}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          handleClose={this.handleClose}


        />


        <Footer />


      </>

    );
  }
};

export default App;

