/* eslint-disable no-console */
const axios = require('axios');

const getMyProjects = async () => {
  try {
    const {
      data: { projects },
    } = await axios.get('https://gitconnected.com/v1/portfolio/qu4k3r');

    // const { projects } = response;

    return projects.map(({
      images, url, displayName, summary, githubUrl,
    }) => ({
      images,
      url,
      displayName,
      summary,
      githubUrl,
    }));
  } catch (error) {
    return error.message;
  }
};

export default getMyProjects;

// images: [{}, {}, ...]
// url: string
// displayName: string
// summary: string
// githubUrl: string
