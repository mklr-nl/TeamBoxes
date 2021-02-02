// Charts
if(window.Chart){
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '';
}
// Global Options


function chart() {
    let subChart = document.getElementById('Subscribers__chart')
    if(!subChart){
        return;
    }
    let subChartCtx = subChart.getContext('2d');
    let sub = new Chart(subChartCtx, {
        type: 'line', //bar, horizontalBar, pie, line, doughnut, pie,  radar, polarArea, bubble, scatter, area mixed
        data:{
            labels:['Jan', 'Feb', 'Mrt', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            datasets: [{
                label: 'Subscribers',
                data: [
                    862,
                    1581,
                    3537,
                    5352,
                    9862,
                    11581,
                    15537,
                    14420,
                    13862,
                    18581,
                    22537,
                    24352,
                ],
                backgroundColor: '#23257e', 
                borderWidth: 1,
                borderColor: 'grey',
                hoverBorderWidth: 3,
                hoverBorderColor: 'black'
            }]
        },
        options:{
            title: {
                display:true,
                text:'Subscribers Charttrace',
                fontSize: 24
            },
            legend:{
                display: false,
                position: 'right',
                labels:{
                    // fontColor: 'black'
                }
            },
            layout:{
                padding:{
                    left:5,
                    right:5,
                    bottom:5,
                    top:5
                }
            },
            tooltips: {
                enabled:true
            }
        }
    });
} 

function mmrChart(){
    let mmrChart = document.querySelector('#Mmr__chart');
    if(!mmrChart){
        return;
    }
    let mmrChartCtx = mmrChart.getContext('2d');
    let mmr = new Chart(mmrChartCtx, {
        type: 'line', //bar, horizontalBar, pie, line, donut, radar, polarArea
        data:{
            labels:['Jan', 'Feb', 'Mrt', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            datasets: [{
                label: 'MMR',
                data: [
                    146,
                    2810,
                    5378,
                    8528,
                    9536,
                    14435,
                    14943,
                    15273,
                    30938,
                    36394,
                    52125,
                    61904
            
                ],
                backgroundColor: '#F64C72', 
                borderWidth: 1,
                borderColor: 'grey',
                hoverBorderWidth: 3,
                hoverBorderColor: 'black'
            }]
        },
        options:{
            title: {
                display:true,
                text:'MMR Charttrace',
                fontSize: 24
            },
            legend:{
                display: false,
                position: 'right',
                labels:{
                    fontColor: 'black'
                }
            },
            layout:{
                padding:{
                    left:5,
                    right:5,
                    bottom:5,
                    top:5
                }
            },
            tooltips: {
                enabled:true
            }
        }
    }); 
}

chart();
mmrChart();
