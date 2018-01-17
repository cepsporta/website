import React from "react";
export default (props) => (
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th align="center" class="HeadShedule" colspan="6">
                        {props.BoardName}
                    </th>
                </tr>
                <tr class="border">
                    {props.data.map((headName, i) => (
                        <th key={i} >{headName}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.data2.map((rowData, j) => {
                    return (<tr key={j}>{
                        rowData.map((colData, p) => (
                            <td key={p}>{colData}</td>)
                        )}
                    </tr>);
                })}
            </tbody>
        </table>
    </div>
);