import MockAdapter from 'axios-mock-adapter';

export default axios => {
  const mock = new MockAdapter(axios);

  mock
    .onGet('/')
    .reply(200, {
      msg: 'Hi'
    });

};
