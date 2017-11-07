const searchQueryValidator = (search) => {
  const params = new URLSearchParams(search);
  if (!params.get('origin') || !params.get('destination')){
    return {
      status: false,
      message: 'Address missing'
    };
  }

  if (!params.get('dateTime')) {
    return {
      status: false,
      message: 'Moving date or time missing'
    };
  }

  return {
    status: true,
    params
  }
};

export default searchQueryValidator;
