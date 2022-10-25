import React from 'react'
import MaterialTable from 'material-table'

export const Table = ()=>{
    const data=[
        {name: 'divaka', age:12},
        {name: 'tharinda', age:12},
        {name: 'perera', age:12}
    ]

    const columns=[
        {title: 'Name', field:'name'},
        {title: 'Age' , field:'age'}
    ]
    return (<div>
        <MaterialTable title="Users"
            data = {data}
            columns = {columns}
        />
    </div>)
}