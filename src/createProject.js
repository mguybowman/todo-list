const createProject = (title) => {
  const color = 'gray';
  const tasks = [];
  const completed = [];
  return {
    title, color, tasks, completed,
  };
};

export default createProject;
