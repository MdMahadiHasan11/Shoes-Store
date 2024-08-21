import React, { useState, useEffect } from 'react';

const Products = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(response => response.json())
            .then(data => {
                setAllData(data); // Use the state setter function
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [setAllData]); // Dependency should be the state setter or an empty array
    console.log(allData.length)






    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <p data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white"> Craft Items</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {
                        ccrafts.map(craft => <AllCard key={craft._id}
                            craft={craft}></AllCard>)
                    }

                </div>

            </div>
        </div>
    );
}

export default Products;
