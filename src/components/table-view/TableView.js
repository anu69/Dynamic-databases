import React, { useRef } from "react";
import ReactDataGrid from "react-data-grid";
import { connect } from "react-redux";
import { render } from "react-dom"
import { useReactToPrint } from "react-to-print";

import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

import "../table-entry/TableEntry.css";

class TableView extends React.Component {
  state = { rows: this.props.rows.rowsData };

  restructureTable = () => {
    window.location.assign("/");
  };

  render() {
    const { rowsData } = this.props.rows;
    const { columnsData } = this.props.columns;

    const columns = columnsData.map((columnData, index) => {
      return {
        key: columnData.columnName.replace(" ", ""),
        name: `${columnData.columnName} (${columnData.columnType})`,
        editable: false,
      };
    });

    return (
      <>
        <div className = "data">
          <ReactDataGrid
            columns={columns}
            rowGetter={(i) => this.state.rows[i]}
            rowsCount={20}
            enableCellSelect={true}
            minHeight={800}
          />
        </div>  
        <div className="table-entry-button-wrapper">
          <button
            type="button"
            className="btn btn-warning ml-2"
            onClick={() => this.props.history.push("/table-entry")}
          >
            Go back to table entry
          </button>
          <button
            type="button"
            className="btn btn-danger ml-3"
            onClick={this.restructureTable}
          >
            Restructure table
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-warning ml-2"
          >
            Download table
          </button>
        </div>
        <br />
        <p className="font-italic text-muted text-right">
          All your data will be erased if you restructure table
        </p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  columns: state.columns,
  rows: state.rows,
});

export default connect(mapStateToProps, {})(TableView);
