import { useEffect, useState } from "react"
import { API_URL } from "../constants/constants";
import moment from 'moment';
import { Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    date: string;
    time: string;
    type: string;
    action: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
    },
];

interface Event {
    createdAt: string;
    sensor: string;
    action: string;
}
export const TabEvents = () => {
    // const [events, setEvents] = useState<Event[]>([]);
    const [allDatas, setAllDatas] = useState<DataType[]>([]);
    const [datas, setDatas] = useState<DataType[]>([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
        filterData(event.target.value);
    };
    const filterData = (sensorName: string) => {
        const _eventList = allDatas.filter((ele) => ele.type.toLowerCase() === sensorName.toLowerCase());
        setDatas(_eventList);
    }

    useEffect(() => {
        fetch(API_URL+ "/event/"+ String(import.meta.env.VITE_ACCOUNT_ID), {
            method: 'GET',
            headers: new Headers({
                "Content-type": "application/x-www-form-urlencoded",
            })
        })
            .then(response => response.json())
            .then((data: { payload: Event[] }) => {
            const listData: DataType[] = [];
            data.payload.forEach((ele: Event) => {
                const dateObject = moment(ele.createdAt);
                listData.push({
                    date: dateObject.format("YYYY-MM-DD"),
                    time: dateObject.format("HH:mm:ss.SSS"),
                    type: ele.sensor,
                    action: ele.action
                });
            });
            setAllDatas(listData);
            setDatas(listData);

            // setEvents(data.payload);
        })
            .catch(error => {
                console.error('Error', error);
            });
    },[]);
    return (
        <section className="container px-4 mx-auto">
            <div className="sm:flex sm:justify-between">
                <input type="date"/>
                <select
                value={selectedOption} onChange={handleSelectChange}>
                    <option key= "1" value="Ventilator">Ventilator</option>
                    <option key= "2" value="Sound">Sound</option>
                    <option key= "3" value="Temperature">Temperature</option>
                    <option key= "4" value="CO2">CO2</option>
                </select>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200">
                        <Table columns={columns} dataSource={datas} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}