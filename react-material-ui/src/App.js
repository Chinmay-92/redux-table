import logo from './logo.svg';
import './App.css';
import { DataGrid } from '@material-ui/data-grid';
import React, { useState, useEffect } from "react";
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { fetchData } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import axios from "axios";
import { Row, Col, Card } from 'reactstrap';

const App = (props) => {
  var { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  let [dset, setDset] = useState([]);

  const dataSet = dset.map((item, index) => {
    return (
      <li key={item.id}>
        <h3>
          {item.title}
        </h3>
        {item.url}
        <div>{item.thumbnailUrl}</div>
      </li>
    )
  })

  useEffect(() => {
    //props.fetchData()
    axios.get("http://jsonplaceholder.typicode.com/photos").then((response) => {
      if (dset.length !== response.length) {
        console.log("found changes")
        dset = response.data;
        console.log(dset);
        setDset(dset);
        console.log(data);
      }
    })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1> React redux table </h1>
      <DataGrid maxColumns={4} columns={[
        { field: 'id', width: 90 },
        { field: 'title', width: 230 },
        { field: 'url', width: 220 },
        { field: 'thumbnailUrl', width: 230 }]}
        rows={dset} resizable={true}
        pageSize={5} />
    </div>
  );
}

//export default App;
const mapStateToProps = (state) => ({
  state: state,
  data: state.data
})

const mapDispatchToProps = {
  fetchData
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
