import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h3 className="text-red-400 font-bold">Header Details jante ashcho tumi ? {id}</h3>
        </div>
    );
};

export default NewsDetails;