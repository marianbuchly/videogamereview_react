import React from 'react';
import jQuery from 'jquery'

class Categories extends React.Component {

  componentDidMount() {
    
  }
  getCategories(){
    let url = "https://git.heroku.com/tranquil-dusk-52350.git"
    jQuery.getJSON(url, function(data){
      console.log(data);
    });
  }

  render() {
    return (

    <h1>Categories</h1>


    );
  }
}

export default Categories;
