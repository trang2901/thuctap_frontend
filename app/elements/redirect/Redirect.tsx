import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface AppProps {
	to: string;
}

const Redirect = ({ to }: AppProps) => {
	const router = useRouter();
	
	const { data: session, status } = useSession();
 	const isLoading = status === "loading";

	React.useEffect(() => {
		router.push(to);
	}, [to, session]);
	return null;
};

export default Redirect;