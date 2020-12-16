export default class ExceptionUtils {
  FormatException = (error) => {
    const {response} = error || {
      response: {
        data: 'Ocorreu um erro',
      },
    };

    return response.data;
  };
}
