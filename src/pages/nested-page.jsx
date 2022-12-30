import { useParams } from 'react-router-dom';

export default function NestedPage() {
	const params = useParams();
	return <h2>Id that came from URL is {params.pageId}</h2>;
}
