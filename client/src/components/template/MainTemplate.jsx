import React from 'react';
import Card from '../organism/Card';
import './MainTemplate.scss';
import Search from '../organism/Search';

export default function MainTemplate() {
  return (
    <main className='main'>
      <h2>이벤트 검색</h2>
      <Search />
      <section className='cards'>
        <h2>이벤트 리스트</h2>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
