import { Box, Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IndividualTweet from '../Components/IndividualTweet';
import Navbar from '../Components/Navbar';
import { useActions } from '../Hooks/useActions';
import { useData } from '../Hooks/useData';
import { getTweetDetails } from '../config';

const IndividualPage = () => {
    const { id } = useParams();
    const { username, password } = useData();
    const { handleLoading } = useActions();
    const [data, setData] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        handleLoading(true);
        let res = await getTweetDetails(id, username, password);
        setData(res.data);
        handleLoading(false);
    }
    return (
        <>
            <Navbar />
            <Container pt={20} maxW={["95%", "95%", "90%"]}>
                {data && <IndividualTweet {...data} />}
            </Container>
        </>
    )
}

export default IndividualPage
