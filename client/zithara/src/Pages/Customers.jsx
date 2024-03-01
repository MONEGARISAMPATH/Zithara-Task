import React, { useEffect, useState } from "react";
import axios from "axios";
import "./customer.css";
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [status, setStatus] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [dateOrder, setDateOrder] = useState("asc");
  const [timeOrder, setTimeOrder] = useState("asc");
  const [sort, setSort] = useState("none");
  const [sortedData,setSortedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getAllCustomers = async () => {
    try {
      const res = await fetch(
        `https://zithara-task.onrender.com/customers?page=${pageNumber}&pageSize=${limit}`
      );
      const response = await res.json();
      if (res.status === 200) {
        setCustomers(response.data);
        setSortedData(response.data);
        console.log(response.data);
        setStatus(response.message);
        setTotalPages(Math.ceil(response.totalCount / limit));
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  const handleNextClick = () => {
    if (pageNumber < totalPages) {
      setPageNumber((prevPageNumber) => {
        console.log(prevPageNumber + 1);
        return prevPageNumber + 1;
      });
    }
  };
  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPageNumber) => {
        console.log(prevPageNumber - 1);
        return prevPageNumber - 1;
      });
    }
  };
  const handleDateSortButtonClick = () => {
    const sorted = [...sortedData];

    sorted.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      const formattedDateA = dateA.toISOString().split("T")[0];
      const formattedDateB = dateB.toISOString().split("T")[0];

      return dateOrder==="asc"
        ? formattedDateA.localeCompare(formattedDateB)
        : formattedDateB.localeCompare(formattedDateA);
    });
    console.log(sorted,"datesorted")
    setSortedData(sorted);
    setDateOrder("dsc");
  };

  const handleTimeSortButtonClick = () => {
    const sorted = [...sortedData];

    sorted.sort((a, b) => {
      const timeA = new Date(a.createdAt).toLocaleTimeString();
      const timeB = new Date(b.createdAt).toLocaleTimeString();

      return timeOrder==="asc"
        ? timeA.localeCompare(timeB)
        : timeB.localeCompare(timeA);
    });
    
    console.log(sorted,"timesorted")
    setSortedData(sorted);
    setTimeOrder("dsc");
  };
  const getAllCustomersBySearch = async (e) => {
    e.preventDefault();
    console.log("searchValue",searchValue)
    try {
      const res = await fetch(
        `https://zithara-task.onrender.com/customers/search/${searchValue}`
      );
      const response = await res.json();
      if (res.status === 200) {
        setCustomers(response.data);
        setSortedData(response.data);
        console.log(response.message);
        setStatus(response.message);
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  }

  useEffect(() => {
    getAllCustomers();
  }, [pageNumber]);

  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-around" }}>
        <h1>Student Name: Sampath Monegari</h1>
        <h1>Customer Details</h1>
        <h2>Zithara Task</h2>
      </header>

      <div className="customersTable">
        <div>
          <h1>
            {status !== "error" ? (
              <span style={{ color: "green" }}>{status}</span>
            ) : (
              <span style={{ color: "red" }}>{status}</span>
            )}
          </h1>
          <div className="formSearch">
            <button onClick={getAllCustomers}>Home</button>
            <div className="formDiv">
              <form onSubmit={getAllCustomersBySearch}>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  required
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
        <table>
          <th className="customerRow">
            <td className="customerColumn">Customer ID</td>
            <td className="customerColumn">Name</td>
            <td className="customerColumn">Age</td>
            <td className="customerColumn">Phone</td>
            <td className="customerColumn">Location</td>
            <td className="customerColumn">
              Created Date{" "}
              <i
                style={{ color: "red", marginLeft: "5px", cursor: "pointer" }}
                onClick={() => {
                  setSort("date");
                  console.log("date");
                  console.log(dateOrder);
                  setDateOrder(dateOrder === "asc" ? "dsc" : "asc");
                  handleDateSortButtonClick();
                }}
              >
                Sort
              </i>
            </td>
            <td className="customerColumn">
              Created Time{" "}
              <i
                style={{ color: "red", marginLeft: "5px", cursor: "pointer" }}
                onClick={() => {
                  setSort("time");
                  console.log("time");
                  console.log(timeOrder);
                  setTimeOrder(timeOrder === "asc" ? "dsc" : "asc");
                  handleTimeSortButtonClick();
                }}
              >
                Sort
              </i>
            </td>
          </th>
          <tbody>
            {sortedData?.map((customer) => {
              const dateTime = new Date(customer.createdAt);

              const date = `${dateTime.getFullYear()}-${(
                dateTime.getMonth() + 1
              )
                .toString()
                .padStart(2, "0")}-${dateTime
                .getDate()
                .toString()
                .padStart(2, "0")}`;
              const time = `${dateTime
                .getHours()
                .toString()
                .padStart(2, "0")}:${dateTime
                .getMinutes()
                .toString()
                .padStart(2, "0")}:${dateTime
                .getSeconds()
                .toString()
                .padStart(2, "0")}`;

              return (
                <tr className="customerRow" key={customer.id}>
                  <td className="customerColumn">{customer.id}</td>
                  <td className="customerColumn">{customer.name}</td>
                  <td className="customerColumn">{customer.age}</td>
                  <td className="customerColumn">{customer.phone}</td>
                  <td className="customerColumn">{customer.location}</td>
                  <td className="customerColumn">{date}</td>
                  <td className="customerColumn">{time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagenation">
        <button onClick={handlePrevClick}>prev</button>
        {/* <div>{Array.from({length: totalPages}, (_, index) => index + 1)}</div> */}
        <div className="pagenumber"> {pageNumber} </div>
        <button onClick={handleNextClick}>next</button>
      </div>
    </div>
  );
};

export default Customers;
