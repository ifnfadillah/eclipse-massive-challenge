import React from 'react'
import { Link } from 'react-router-dom';
import SearchForm from '@/admin/components/SearchForm';
import Button from '@/admin/components/Button';
import TableKomunitas from '../components/TableKomunitas';


function ListKomunitas() {

    const data = [
    ];


    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h1 className="text-2xl font-primary font-medium mb-3 md:mb-0">
                    Data Komunitas
                </h1>
                <div className="flex items-center space-x-5">
                    <SearchForm placeholder="Masukkan Nama Komunitas" />
                    <Button
                        classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-green-500 hover:bg-green-600 text-white"
                        type="search"
                        name="search">
                        Cari
                    </Button>
                    <Button
                        classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-sky-500 hover:bg-sky-700 text-white"
                        type="add"
                        name="tambah">
                        <Link to="/data-komunitas/add">Tambah</Link>
                    </Button>
                </div>
            </div>
            <TableKomunitas data={data} />
        </>
    )
}

export default ListKomunitas