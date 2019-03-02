import * as http from 'tns-core-modules/http';

const BASE_URL = 'http://localhost:3000/todos';

export const getTodos = () => {
  return http
    .request({
      url: BASE_URL,
      method: 'GET',
    })
    .then(res => res.content.toJSON())
    .catch(err => console.error(err));
};

export const createTodo = todo => {
  return http
    .request({
      url: BASE_URL,
      method: 'POST',
      content: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.content.toJSON())
    .catch(err => console.error(err));
};

export const removeTodo = todoId => {
  return http
    .request({
      url: `${BASE_URL}/${todoId}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.content.toJSON())
    .catch(err => console.error(err));
};
