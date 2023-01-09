import { useParams } from 'react-router-dom';
import './style.css';

export const Post = () => {
    const params = useParams();
    const { id } = params;
    return(
        <div>
            <h1>Posts {id}</h1>
        </div>
    );
};