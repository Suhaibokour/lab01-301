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
    let filteredData;
    if(event.target.value==='all'){
       filteredData=dataFile;
    }else{
       filteredData = dataFile.filter(item => {
      
        return (item.horns === parseInt(event.target.value));
  
      }
      )
  
      

    }
    
    this.setState({
      data: filteredData
    })
   console.log(filteredData)
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
          dataFile={this.state.data}
          handleShow={this.handleShow}
          updateSelectedData={this.updateSelectedData}
          // filterHandler={this.filterHandler}

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

