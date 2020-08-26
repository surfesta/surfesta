import React from 'react';
import Card from '../organism/Card';
import './MainTemplate.scss';
import SearchInput from '../molecule/main/SearchInput';

export default function MainTemplate() {
  return (
    <main className='main'>
      <h2>이벤트 검색</h2>

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
