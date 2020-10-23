import logo from './logo.svg';
import './App.css';
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/index';
import { DataGrid } from '@material-ui/data-grid';
import ReactTable from "react-table";
import { Button } from 'react';
import { withRouter } from 'react-router-dom';
const MyContext = React.createContext();

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: 1,
    }
  }

  render() {
    return (
      <Fragment>

        <ReactTable
          showPagination={true}
          NoDataComponent={() => null}
          data={this.state.data}
          columns=
          {[
            {
              Header: "Ticketkategorie",
              //id: "lastName",
              accessor: "categoryName",
              // Cell: this.renderEditable
            },
            {
              Header: "Beschreibung",
              //id: "lastName",
              accessor: "descriptionText",
              // Cell: this.renderEditable
              //accessor: d => d.lastName
            },
            {
              Header: "Preis",
              //id: "lastName",
              accessor: "price",
              // Cell: this.renderEditable
              //accessor: d => d.lastName
            },
            {
              Header: 'actions',
              width: 100,
              Cell: row => (
                <div>
                  <Button style={{ boxSizing: "border-box", padding: "4px 4px 2px 6px" }} className="btn-margin5" color="warning"
                    onClick={() => {
                      this.setState({ updateCategory: row.original })
                      this.props.updateEventTicketCategory(row.original)
                    }}>
                    <i style={{ fontSize: "large" }} className="pe-7s-note btn-icon-wrapper" />
                  </Button>

                  <Button style={{ boxSizing: "border-box", padding: "4px 5px 2px 5px" }} color="danger" onClick={() => this.askDelete(row.original)}>
                    <i style={{ fontSize: "large" }} className="pe-7s-trash btn-icon-wrapper" />
                  </Button>
                </div>
              )
            }
          ]}
          resizable={false}
          defaultPageSize={4}
          style={{
            height: "228px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight -fixed"
        />
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    state: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: (page_number) => dispatch(fetchData(page_number))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)