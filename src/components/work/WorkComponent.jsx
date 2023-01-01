import styled from 'styled-components';
import gsap from 'gsap';

const workData = [
  {
    id: 1,
    img: './images/work/new_img01.jpg',
    name: 'EX HealthCare',
    url: 'http://exhealthcare.com/',
  },
  {
    id: 2,
    img: './images/work/new_img02.jpg',
    name: 'Pluglink',
    url: 'https://www.pluglink.kr/',
  },
  {
    id: 3,
    img: './images/work/new_img03.jpg',
    name: 'In The Forest',
    url: 'https://itforest.net/',
  },
  {
    id: 4,
    img: './images/work/new_img04.jpg',
    name: 'CULLAD',
    url: 'https://cullad.com/',
  },
  {
    id: 5,
    img: './images/work/new_img05.jpg',
    name: 'KO JUNG A CLINIC',
    url: 'http://kjaclinic.com/',
  },
  {
    id: 6,
    img: './images/work/new_img06.jpg',
    name: 'SATURN BATH',
    url: 'https://www.saturn.co.kr/',
  },
  {
    id: 7,
    img: './images/work/new_img11.jpg',
    name: 'HENZY',
    url: 'http://www.henzy.kr/',
  },
  {
    id: 8,
    img: './images/work/new_img12.jpg',
    name: 'YAKSON',
    url: 'https://yaksonhouse.com/',
  },
  {
    id: 9,
    img: './images/work/new_img09.jpg',
    name: 'Uahn Anti-aging Clinic',
    url: 'http://www.uahn.co.kr/',
  },
  {
    id: 10,
    img: './images/work/new_img10.jpg',
    name: 'FENDA',
    url: 'https://www.fenda.co.kr/',
  },
];

const WorkComponent = () => {
  return (
    <WorkStyleWrap>
      <ul className='work_ul'>
        {workData.map((item) => (
          <a href={item.url} target='_blank' rel='noreferrer'>
            <li key={item.id}>
              <p className='img'>
                <img src={item.img} alt='' />
              </p>
              <p className='title'>{item.name}</p>
            </li>
          </a>
        ))}
      </ul>
    </WorkStyleWrap>
  );
};

export default WorkComponent;

const WorkStyleWrap = styled.div`
  /* 트랙 (Track) */
  ::-webkit-scrollbar {
    background: rgb(255, 255, 255, 0.3);
    display: block !important;
    border-radius: 0px;
    width: 15px;
  }
  /* 트랙 (Track) */
  ::-webkit-scrollbar-track {
    background: rgb(255, 255, 255, 0.3);
    border-radius: 0px;
  }

  /* 핸들 (Handle) */
  ::-webkit-scrollbar-thumb {
    background: rgb(0, 0, 0, 0.5);
    border-radius: 0px;
  }
  position: relative;
  width: 100vw;
  min-height: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: #000;
  padding: 200px 0px 200px 0px;

  .work_ul {
    position: relative;
    height: 100%;
    display: grid;
    max-width: 1400px;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
    column-gap: 30px;
    li {
    }
    .img img {
      width: 100%;
    }
    .title {
      font-size: 1.3rem;
      font-weight: 600;
      color: #fff;
      text-align: center;
      margin-top: 10px;
    }
  }
`;
