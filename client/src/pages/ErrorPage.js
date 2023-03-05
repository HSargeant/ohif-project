// error oage 

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	return (
		<main id="error-page">
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
			Return to the <a href="/">homepage</a>
			</p>
		</main>
	)
}