import React, { useState, useEffect } from 'react';
import AllCard from './AllCard';

const Products = () => {
    const [allDatas, setAllDatas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(response => response.json())
            .then(data => {
                setAllDatas(data); // Use the state setter function
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [setAllDatas]); // Dependency should be the state setter or an empty array
    console.log(allDatas.length)



    // pagi
    // const [allMedicines, , refetch] = useAllMedicines()

    // pagination
    // const [allData, setAllData] = useState(allDatas);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(9);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const totalPage = Math.ceil(allDatas.length / postPerPage);

    // console.log('totallll pagination', totalPage)

    // console.log(allData.length)
    const currentPosts = (allDatas.slice(firstPostIndex, lastPostIndex))
    console.log(currentPosts.length)
    const handleChange = (event) => {
        setCurrentPage(event.target.value);
        // console.log('current:', currentPage)
    };

    const pageNumber = [];
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(
            <input
                key={i}
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label={i.toString()}
                value={i.toString()}
                checked={currentPage === i.toString() || (i === 1 && currentPage === 1)}
                onChange={handleChange}
            />
        );
    }


    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <p data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white"> Shoes Items</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {
                        currentPosts.map(craft => <AllCard key={craft._id}
                            craft={craft}></AllCard>)
                    }

                </div>
                {/* pagination */}
                <div className="flex mb-10 mt-10 justify-center items-center">
                    {pageNumber}
                </div>
            </div>
        </div>
    );
}

export default Products;
