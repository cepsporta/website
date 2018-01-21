import React from "react";
import reactStringReplace from "react-string-replace";

export default (props) => (
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th align="center" className="HeadShedule" colSpan={props.data.length}>
                        {
                            reactStringReplace(props.BoardName, /\[+([^\][]+)]+/g, (match, i) => (
                                <span key={i}>{match}</span>
                            ))
                        }
                    </th>
                </tr>
                <tr className="border">
                    {props.data.map((headName, i) => (
                        <th key={i} >{headName}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.data2.map((rowData, j) => {
                    return (<tr key={j}>{
                        (Array.isArray(rowData)) ?
                            rowData.map((colData, p) => (<td key={p}>{colData}</td>))
                            : <td colSpan={props.data.length}>{
                                reactStringReplace(rowData, /\[+([^\][]+)]+/g, (match, i) => (
                                    <div key={i} className="ScoreBoardHighlight" key={i}>{match}</div>
                                ))

                            }</td>}
                    </tr>);
                })}
            </tbody>
        </table>
    </div>
);