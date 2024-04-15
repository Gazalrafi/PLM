import React from 'react';
import styles from '../style.module.css';

const Details = () => {
  return (
    <div className='details'>
      <table>
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Supplier Type</th>
            <th>Number</th>
            <th>Name</th>
            <th>Version</th>
            <th>Iteration</th>
            <th>Created By</th>
            <th>Created Date</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Medtronic</td>
            <td>Manufacturer</td>
            <td>000091</td>
            <td>SCRW</td>
            <td>A</td>
            <td>1</td>
            <td>STEPHEN</td>
            <td>01-01-2024</td>
            <td>Open ＠</td>
          </tr>
          <tr>
            <td>Medtronic</td>
            <td>Manufacturer</td>
            <td>000091</td>
            <td>SCRW</td>
            <td>A</td>
            <td>1</td>
            <td>STEPHEN</td>
            <td>01-01-2024</td>
            <td>Open ＠</td>
          </tr>
          <tr>
            <td>Medtronic</td>
            <td>Manufacturer</td>
            <td>000091</td>
            <td>SCRW</td>
            <td>A</td>
            <td>1</td>
            <td>STEPHEN</td>
            <td>01-01-2024</td>
            <td>Open ＠</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
