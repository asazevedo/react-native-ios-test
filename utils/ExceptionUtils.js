export default class ExceptionUtils {
  FormatException = (error) => {
    const {response} = error;
    const respErr = response || { data: error }
 
    return respErr.data;
  };
}
