import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Posts = () => {
    const params = useParams();
    const { id } = params;
    const [ queryString ] = useSearchParams();

    return(
        <div>
            <h1>Posts {`Para id: ${id}`} - {`QueryString: ${queryString.get('page')}`}</h1>
            <Outlet />
        </div>
    );
};