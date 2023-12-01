import { months } from "@component/helper/Util";

const labels = months({ count: 7 });

export const lineChartData = {
    labels: months({ count: 12 }),
    datasets: [
        {
            label: "Transaction",
            data: [65,59,80,81,56,55,60,49,112,72,52,43],
            fill: false,
            borderColor: "rgb(75,192,192)",
            ension: 0.1
        }
    ],
};

export const doubtnutChartData = {
    labels: ["Red","Blue","Yellow"],
    datasets:[
        {
            label: "Transaction Dataset",
            data: [300,50,100],
            backgroundColor:[
                "rgb(255,92,132)",
                "rgb(54,162,235)",
                "rgb(255,205,86,)"
            ],
            hoverOffset:4
        }
    ]
}