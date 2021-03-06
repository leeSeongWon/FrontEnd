import React, { ReactNode, useEffect } from 'react';
import AppHeader from '../../components/common/layout/AppHeader';
import AppFooter from '../../components/common/layout/AppFooter';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../models/saga/reducers/auth';
import WithAuth from '../../models/hook/providers/auth/WithAuth';
import styled from 'styled-components';
import WithWrite from '../../models/hook/providers/write/WithWrite';

interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser.request({}));
  }, [dispatch]);

  return (
    <>
      {/* 로그아웃, 로그인에 관한 Higher order component */}
      <WithAuth>
        <WithWrite>
          <S.StyledSection>
            <AppHeader />
            <S.StyledArticle>{children}</S.StyledArticle>
            <AppFooter />
          </S.StyledSection>
        </WithWrite>
      </WithAuth>
    </>
  );
};

const S: any = {};

S.StyledSection = styled.section`
  min-width: 1130px;
  margin: 0 auto;
`;

S.StyledArticle = styled.article`
  padding: 2rem;
`;

export default AppLayout;
