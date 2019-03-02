import * as http from 'tns-core-modules/http';

const BASE_URL = 'http://localhost:3000/projects';

export const getProjects = () => {
  return http
    .request({
      url: BASE_URL,
      method: 'GET',
    })
    .then(res => res.content.toJSON())
    .catch(err => console.error(err));
};

export const createProject = projectName => {
  return http
    .request({
      url: BASE_URL,
      method: 'POST',
      content: JSON.stringify(projectName),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.content.toJSON())
    .catch(err => console.error(err));
};
