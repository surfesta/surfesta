import React from 'react';
import OfflineContent from '../../molecule/eventDetail/OfflineContent';

export default function EventContents() {
  return (
    <div className='eventContents-wrap'>
      <div className='content'>
        2019년 6월 MAU 280만 → 2020년 6월 MAU 900만 1년 사이에 3배가 넘는 성장을
        했어요! 📈 지금도 당근마켓의 성장 속도는 빨라지고 있지만 더 빠르게
        달리고 싶어서 여러분들께 저희가 하는 일에 대해서 소개하는 자리를
        마련했습니다. 시청하고 계신 여러분들께서 저희와 함께 해주시면 좋겠지만
        어떤 일들을 하고 있는지, 어떤 문화와 어떤 기술로 나아가고 있는지
        모르시는 분들께 저희의 재밌는 프로젝트들과 좋은 동료들을 소개하는 자리를
        방구석에서 드려보고자 해요. 유튜브, 트위치, 페이스북에서 라이브로 진행될
        예정이니 편하신 플랫폼으로 이용해주세요. 😉 그때 그때 생기는 궁금증은
        라이브 채팅으로 이야기 해주시면 해소해드리도록 하겠습니다! 😆
      </div>
      <OfflineContent />
    </div>
  );
}
