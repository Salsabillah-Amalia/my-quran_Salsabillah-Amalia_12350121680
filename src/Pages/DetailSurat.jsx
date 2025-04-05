import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import parse from "html-react-parser";

const DetailSurat = ( ) => {
    const {id} = useParams(); //ambil parameter dari URL
    const [surat, setsurat] = useState ([]);
    const [loading, setLoading] = useState(true);

    const getDataFromAPI = (idsurat) => {
        fetch(`https://equran.id/api/v2/surat/$(idSurat)`)
        .then((res) => res.json())
        .then ((data) => {
            setsurat(data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("error fetching data:", error);
            setLoading(false);
        });
    };

    useEffect(() => {
        getDataFromAPI(id);
    
    }, [id]); //jalankan unEffect setiap `id` berubah

    if (loading) return <p>loading...</p>;

    return(
        <>
        <div className="vh-100 overflow-auto">
            <h2>
                <p>Jumlah Ayat: {surat.jumlahAyat}</p>
                <p>Arti: {surat.arti}</p>
                <p>Deskripsi: {parse(surat.deskripsi)}</p>
                <div>
                    <ul className="list-group">
                        {surat.ayat.map((ayat) => (
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center"
                                key={ayat.nomorAyat}
                            >
                                {ayat.teksArab}
                                <span className="badge text-bg-primary rounded-pill">{ayat.nomorAyat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </h2>
        </div>
        </>
    );
};
export default DetailSurat;