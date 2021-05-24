import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TablaPersonaje({ data }) {

    let columns=[];
    columns = data[0] && Object.keys(data[0]);
    if(columns){
        columns = columns.filter((c)=>c!=="img");
        columns = columns.filter((c)=>c!=="better_call_saul_appearance");
        
    }

    return (
       
            <table className="table table-striped" cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr>
                        {columns.map((column) => (
                        <td>{row[column]}</td>
                        ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        
             );
}
