export const UseTypeDataChart = (type, data) => {
    let processData = {};
    switch (type) {
        case 'car-brands':
            let labels = [];
            let datalabels = [];
            data.map((v, index) => {
                labels.push(v._id);
                datalabels.push(v.count);
            })
            processData = {
                labels,
                datasets: [
                    {
                        label: '# of Votes',
                        data: datalabels,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(120, 99, 132, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(80, 99, 132, 1)',

                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(120, 99, 132, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(80, 99, 132, 1)',

                        ],
                        borderWidth: 1,
                    },
                ],


            }
            break;

        case 'car-years':
            let labelscaryears = [];
            let datalabelscaryears = [];
            data.map((v, index) => {
                labelscaryears.push(v._id);
                datalabelscaryears.push(v.count);
            })
            processData = {
                labels: labelscaryears,
                datasets: [
                    {
                        label: '# of Votes',
                        data: datalabelscaryears,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 159, 64, 0.5)',
                            'rgba(80, 99, 132, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(120, 99, 132, 0.5)',


                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(80, 99, 132, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(120, 99, 132, 1)',


                        ],
                        borderWidth: 1,
                    },
                ],
            }
            break;
        default:
    }

    return processData;
}