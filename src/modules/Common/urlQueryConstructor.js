const urlQueryConstructor = (params) => {
  return params.reduce(
    (prev, current) => {
      if(current.value) {
        return `${prev}&${current.label}=${current.value}`;
      } return prev;
    }
    ,'?');
};

export default urlQueryConstructor;
