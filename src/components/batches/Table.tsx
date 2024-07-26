import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import Batch1 from "../../assets/Batch1.png";
import Batch2 from "../../assets/Batch2.png";
import Batch3 from "../../assets/Batch3.png";
import '../../index.css'; // Import the CSS file

interface Course {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    price: string;
    validity: string;
    status: string;
    image: string;
}

const data: Course[] = [
    {
        id: 1,
        title: "SQL Basics To Advanced Mastery Course",
        startDate: "20 Jul 2024",
        endDate: "28 Jul 2024",
        price: "₹ 0",
        validity: "180 days",
        status: "Published",
        image: Batch1
    },
    {
        id: 2,
        title: "30 Days Of Javascript Challenge",
        startDate: "13 Jul 2024",
        endDate: "12 Aug 2024",
        price: "₹ 0",
        validity: "33 days",
        status: "Unpublished",
        image: Batch2
    },
    {
        id: 3,
        title: "Interview Preparation With Javascript 2.0",
        startDate: "02 Aug 2024",
        endDate: "15 Sep 2024",
        price: "₹ 10,000",
        validity: "365 days",
        status: "Published",
        image: Batch3
    }
];

const columns: TableColumn<Course>[] = [
    {
        name: 'Title',
        selector: row => (
            <div className="table-title-cell">
                <img src={row.image} alt={row.title} />
                <a href="#" className="title-text">{row.title}</a>
            </div>
        ),
        sortable: true,
        grow: 2,
    },
    { name: 'Start Date', selector: row => row.startDate, sortable: true },
    { name: 'End Date', selector: row => row.endDate, sortable: true },
    { name: 'Price', selector: row => row.price, sortable: true },
    { name: 'Validity/Expiry', selector: row => row.validity, sortable: true },
    {
        name: 'Status', selector: row => (
            <span className={`status ${row.status.toLowerCase()}`}>{row.status}</span>
        ), sortable: true
    }
];

const MyTable: React.FC = () => {
    const [filterText, setFilterText] = useState('');
    const [searchText, setSearchText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const handleSearch = () => {
        setFilterText(searchText);
        setResetPaginationToggle(!resetPaginationToggle);
    };

    const filteredItems = data.filter(item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponentMemo = React.useMemo(() => {
        return (
            <div className="search-container mb-5 gap-5">
                <input
                    type="text"
                    placeholder="Search by Title"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    className="p-2 w-72 border rounded-md border-gray-200"
                />
                <button onClick={handleSearch} className="bg-[#6C6BAF] py-2 px-8 text-white text-xl rounded-md ml-2 ">Search</button>
            </div>
        );
    }, [searchText]);

    return (
        <div className="main-container">
            {subHeaderComponentMemo}
            <div className="table-container">
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    persistTableHead
                    customStyles={{
                        header: {
                            style: {
                                minHeight: '56px',
                                backgroundColor: '#f9f9f9',
                                fontWeight: 'bold',
                                borderLeft: "1px solid #ddd"
                            },
                        },
                        rows: {
                            style: {
                                minHeight: '72px',
                                borderBottom: '0px solid #ddd',
                                borderLeft: "1px solid #ddd",
                                '&:hover': {
                                    backgroundColor: '#f1f1f1',
                                },
                            },
                        },
                        headCells: {
                            style: {
                                backgroundColor: '#f9f9f9',
                                border: "1px solid #ddd",
                                borderRight: "0.5px solid #ddd",
                                borderLeft: "0.5px solid #ddd",
                                fontSize: '14px',
                                fontWeight: 'bold',
                            },
                        },
                        cells: {
                            style: {
                                padding: '16px',
                                borderRight: "1px solid #ddd",
                                borderBottom: "none",
                                borderTop: "none",
                                fontSize: "1rem"

                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default MyTable;
