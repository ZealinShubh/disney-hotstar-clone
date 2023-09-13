import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from "../firebase";
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/users/userSlice';

const Home = () =>{
    const dispatch =useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        let isMounted = true; // Add this variable to track component mount status

        const unsubscribe = db.collection('movies').onSnapshot((snapshot) => {
            const tempRecommends = [];
            const tempNewDisneys = [];
            const tempOriginals = [];
            const tempTrending = [];

            snapshot.docs.forEach((doc) => {
                switch(doc.data().type) {
                    case "recommend":
                        tempRecommends.push({ id: doc.id, ...doc.data() });
                        break;

                    case "new":
                        tempNewDisneys.push({ id: doc.id, ...doc.data() });
                        break;

                    case "original":
                        tempOriginals.push({ id: doc.id, ...doc.data() });
                        break;

                    case "trending":
                        tempTrending.push({ id: doc.id, ...doc.data() });
                        break;
                }
            });

            if (isMounted) {
                dispatch(
                    setMovies({
                        recommend: tempRecommends,
                        newDisney: tempNewDisneys,
                        original: tempOriginals,
                        trending: tempTrending,
                    })
                );
            }
        });

        // Cleanup function
        return () => {
            isMounted = false; // Set isMounted to false when component is unmounted
            unsubscribe(); // Unsubscribe from the snapshot listener
        };
    }, [userName]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
};

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px)
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

&:after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`;

export default Home;
