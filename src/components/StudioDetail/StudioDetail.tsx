import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { API } from '../../constants/api';

interface StudioDetailProps {
    id: string;
    score: number;
    votes: number;
    title: string;
    rated: string;
    released: string;
    runtime: number;
    genres: String[];
    plot: string;
    poster: string;
}

const StudioDetail = () => {
    const [individualDetail, setIndividualDetail] = useState<StudioDetailProps>({
        id: '',
        score: 0,
        votes: 0,
        title: '',
        rated: '',
        released: '',
        runtime: 0,
        genres: [],
        plot: '',
        poster: '',
      });

      const getStudioListDropDown = () => {
        axios.get(`${API.studioDetail}/tt0114709`).then((data) => {
            setIndividualDetail(data?.data);
          });
      }
    
      useEffect(() => {
        getStudioListDropDown();
      }, []);
  return (
    <div>{individualDetail?.title}</div>
  )
}

export { StudioDetail }