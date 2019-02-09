import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Pedro Renan',
        avatar: 'https://avatars3.githubusercontent.com/u/923983?s=400&v=4',
        time: 'há 3 min',
        body:
          'Para improvisar é preciso estar preparado',
      },
      {
        id: 2,
        name: 'Gabriel Buzzi',
        avatar: 'https://avatars1.githubusercontent.com/u/9993834?s=400&v=4',
        time: 'há 5 min',
        body:
          'Faaaaalaaaaaa Galeeeeraaaa Beleeeezaaaaaaaaaaa?',
      },
      {
        id: 3,
        name: 'Allysson Silva',
        avatar: 'https://avatars3.githubusercontent.com/u/41745648?s=400&v=4',
        time: 'há 10 min',
        body:
          'Eaeeee ta baum?',
      },
      {
        id: 4,
        name: 'Thiago',
        avatar: 'https://avatars0.githubusercontent.com/u/37192076?s=400&v=4',
        time: 'há 15 min',
        body:
          'Tá na Disney é?',
      },
      {
        id: 2,
        name: '@cryptor',
        avatar: 'https://avatars2.githubusercontent.com/u/19333594?s=400&v=4',
        time: 'há 20 min',
        body:
          'Bora hackear tudo pessoal!!',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
