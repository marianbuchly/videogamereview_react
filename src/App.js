import React from 'react';

class App extends React.Component {
    render() {
        return (
          <div className="container">
            <h1>VideoGame Reviews</h1>

            {this.props.children}
          </div>

        );
    }
}

export default App;
