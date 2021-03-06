import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

class App extends Component {
  handlerClick() {
    alert('Botão clicado');
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Nivaldo Neto</h1>
        <Button
          onClick={() => {
            alert('Botão 1');
          }}
        />
        <Button onClick={this.handlerClick}>EnviarNovo</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
