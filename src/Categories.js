import React from 'react';
import jQuery from 'jquery'
import {Link from} 'react-router'

class Categories extends React.Component {
  contsructor(){
    super();
    this.state = {
      categories: []
    };
  }


  componentDidMount() {
    this.getCategories();
  }

  getCategories(){
    let component = this;
    let url = "https://git.heroku.com/tranquil-dusk-52350.git";
    jQuery.getJSON(url, function(data){
      component.setState({
        categories: data.categories
    });
  });
  }

  render() {
    return (
      <div className="categories">
          <h1>Categories</h1>
          <ul>
          {this.state.categories.map(function(category)}
          return  (

          <li key ={category.id}>{category.name}</li>
          <link to ={'/categories/${category.id}'}>{category.name}</link>
          </ul>
        );
      })}

      </div>

    );
  }
}

export default Categories;
