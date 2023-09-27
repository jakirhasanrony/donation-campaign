import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {
    const cards = useLoaderData();
    const [donatedItem, setDonatedItem] = useState([]);
    const [notFound, setNotFound] = useState(false);


    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donated'));
        if (donatedItems) {
            setDonatedItem(donatedItems)
        }
        else {

            setNotFound('No Data Found')
        }

    }, []);

    const totalCardsCount = cards.length;
    const donatedCardsCount = donatedItem.length;
    const remainingCardsCount = totalCardsCount - donatedCardsCount;
    const data = [
        { name: "Your Donation", value: donatedCardsCount },
        { name: "Remaining Cards", value: remainingCardsCount },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div >
            <div className='flex justify-center items-center mb-16 mt-16'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='flex items-center justify-center gap-14'>
                <div className='flex items-center justify-center gap-4'>
                    <h2 className='font-medium'>Your Donation</h2>
                    <div className='w-28 h-3 bg-[#00C49F] rounded'></div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <h2 className='font-medium'>Total Donation</h2>
                    <div className='w-28 h-3 bg-[#FF444A] rounded'></div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
