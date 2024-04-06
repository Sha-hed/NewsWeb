import { useParams } from 'react-router-dom';
const Demo = () => {
    const { id } = useParams();
    console.log(id);
    return (

        <div>
            <h3>This is your fucking demo</h3>
        </div>
    );
};

export default Demo;