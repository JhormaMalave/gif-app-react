import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Game of Thrones']);
    /*
    const handleAddCategory = () => {
        const category = 'Attact on Titan';
        setCategories([...categories, category]);

    }
    */



    return (
        <>
            <h2 className="primary-color">GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />

            <ul>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category}/>
                    })
                }
            </ul>
        </>
    );
}

export default GifExpertApp;
