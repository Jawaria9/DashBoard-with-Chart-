import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend} from 'recharts';


function Chart(){

    const pdata = [
        {
          name: 'Sunday',
          student: 13,
          fees: 10
        },
        {
          name: 'Monday',
          student: 15,
          fees: 12
        },
        {
          name: 'Tuesday',
          student: 5,
          fees: 10
        },
        {
          name: 'Wednesday',
          student: 10,
          fees: 5
        },
        {
          name: 'Thursday',
          student: 9,
          fees: 4
        },
        {
          name: 'Friday',
          student: 10,
          fees: 8
        },
        {
          name: 'Saturday',
          student: 10,
          fees: 8
        },
      ];

    return (

        <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={500} height={300} margin={{top:5, right:40,left:2,bottom:5}}>
          <CartesianGrid/>
          <XAxis dataKey="name" interval={'preserveStartEnd'}/>
          <YAxis/>
          <Line dataKey="student" strokeWidth={3} stroke=" #0d6efd"/>
        </LineChart>
      </ResponsiveContainer>
    )
    }

    export default Chart