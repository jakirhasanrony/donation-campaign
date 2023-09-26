import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Legend, Tooltip, Label, LabelList  } from 'recharts';

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.8;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
        <text
            x={x}
            y={y}
            fill="black"
            fontSize={14}
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {name === "Donation Item" ? `${(percent * 100).toFixed(0)}%` : null}
        </text>
    );
};

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

    const donatedCardsPercentage = (donatedCardsCount / totalCardsCount) * 100;
    const remainingCardsPercentage = (remainingCardsCount / totalCardsCount) * 100;



    const pieChartData = [
        { name: "Your Donation", value: donatedCardsPercentage },
        { name: "Remaining Cards", value: remainingCardsPercentage },
    ];


    const COLORS = ["#00C49F", "#FF8042"];



    return (
        <div>

            statistic page
            <div>Total Cards: {totalCardsCount}</div>
            <div>Donated Cards: {donatedCardsCount}</div>
            <div>Remaining Cards: {remainingCardsCount}</div>

            <PieChart width={400} height={400}>
                <Pie
                    data={pieChartData}
                    cx={200}
                    cy={200}
                    startAngle={0}
                    endAngle={360}
                    innerRadius={0} // Set innerRadius to 0
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    labelLine={false} // Disable label lines
                >
                    {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <LabelList
                        dataKey="name"
                        position="outside"
                        content={(props) => <CustomPieLabel {...props} />}
                    />
                </Pie>
                <Tooltip />
                <Legend formatter={(value, entry) => entry.name === "Donation Item" ? `${(entry.payload.value).toFixed(0)}%` : value} />
            </PieChart>
        </div>
    );
};

export default Statistics;