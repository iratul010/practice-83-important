import { useRouteError } from "react-router-dom";

 

const ErrorPage = () => {
  const error = useRouteError();
 const strfy = (JSON.stringify({age:27,name:'ratul'}));
 console.log(JSON.parse(strfy) );
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
export default ErrorPage;