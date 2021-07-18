import { LoadingContainer } from './style';
import loadingGif from '../../images/loading.gif';

export default function Loading(): JSX.Element {
    return (
        <LoadingContainer>
            <img src={loadingGif} alt="loading gif" />
        </LoadingContainer>
    );
}
