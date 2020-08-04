import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainCategory from './MainCategory';
import MainCard from './MainCard';
import { Carousel } from 'antd';
// import { useTheme } from '../../../models/hook/providers/theme/ThemeProvider';
import { useDispatch } from 'react-redux';
import {
  getHotIssue,
  getNew,
  getCommingSoon,
} from '../../../models/saga/reducers/theme';
import store from '../../../models/configure';

const Main = () => {
  const [hotIssue, setHotIssue] = useState<object>({ data: [], error: '' });
  const [news, setnews] = useState<object>({ data: [], error: '' });
  const [commingSoon, setCommingSoon] = useState<object>({
    data: [],
    error: '',
  });

  const page = 0;
  const size = 4;
  const dispatch = useDispatch();

  store.subscribe(() => {
    setHotIssue(store.getState().theme.hotIssue);
    setnews(store.getState().theme.news);
    setCommingSoon(store.getState().theme.commingSoon);
  });

  useEffect(() => {
    dispatch(getHotIssue.request({ page, size }));
    dispatch(getNew.request({ page, size }));
    dispatch(getCommingSoon.request({ page, size }));
  }, [dispatch]);

  return (
    <>
      <MainLayout>
        <OverCarousel>
          <CarouselImg />
          <CarouselImg />
          <CarouselImg />
          <CarouselImg />
          <CarouselImg />
        </OverCarousel>

        <MainCategory />

        <MainCard types={'핫이슈 공연'} data={hotIssue} />
        <MainCard types={'신규 공연'} data={news} />
        <MainCard types={'comming soon'} data={commingSoon} />
      </MainLayout>
    </>
  );
};

const MainLayout = styled.div`
  text-align: center;
  margin-top: 15px;
  max-width: 1130px;
  margin: 0 auto;
`;

const OverCarousel = styled(Carousel)`
  text-align: center;
  height: 300px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
  width: 65%;
  margin: 0 auto;
`;

const CarouselImg = styled.div`
  height: 24rem;
  width: 25rem;
  border-radius: 5px;
  background: url(https://source.unsplash.com/random);
  background-position: 50% 50%;
  background-size: cover;
`;

export default Main;
