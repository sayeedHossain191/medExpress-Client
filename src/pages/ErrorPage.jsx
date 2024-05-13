import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className="flex justify-center text-center">
            <Helmet>
                <title>
                    MedExpress | Error Page
                </title>
            </Helmet>

            <div>
                <h1 className="text-7xl">404</h1>
                <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;