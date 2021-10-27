module.exports = (error, request, response, next) => {
  console.log('#### Error Handler');
  console.log(error);
  response.status(500).send();
};
