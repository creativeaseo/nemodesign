import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
const MainContactContents = ({ scrollIndex }) => {
  // refs
  // const contactFormRef = useRef(null);
  const policyAcceptRef = useRef(null);
  const formleftContentsRef = useRef(null);
  const formRightContentsRef = useRef(null);

  // 개언정보 수집이용 동의 checkbox
  const [policyAcceptCheckbox, setPolicyAcceptCheckbox] = useState(false);

  // input 항목 입력 state (회사명, 담당자명, 연락처, 이메일, 문의내용)
  const [formValue, setFormValue] = useState({
    project: [],
    budget: [],
    company: '',
    name: '',
    phone: '',
    email: '',
    site: '',
    site02: '',
  });

  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleValidation = (e) => {
    const { name, value } = e.target;
    if (!e.target.value) {
      e.target.classList.remove('acitve_input');
    } else {
      e.target.className = 'acitve_input';
    }

    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!policyAcceptRef === false) {
      // alert('개인정보 수집이용 동의를 선택해주세요.');
      // setPolicyAcceptCheckbox(true);
    }

    setFormError(vaildationForm(formValue));
    setIsSubmit(true);

    if (Object.keys(formError).length === 0 && isSubmit) {
      alert('문의접수가 완료되었습니다. 확인 후 신속히 답변드리겠습니다.');

      console.log(formValue);
      setProjectSelectChecked([]);
      SetBudgetSelectChecked([]);

      setFormValue({
        project: [],
        budget: [],
        company: '',
        name: '',
        phone: '',
        email: '',
        site: '',
        site02: '',
      });
    }
  };

  const vaildationForm = (value) => {
    const errors = {};
    const emailRegExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const phoneRegExp = /^\d/;
    if (!value.company) {
      errors.company = '회사명을 입력해주세요.';
    }
    if (!value.name) {
      errors.name = '담당자명을 입력해주세요.';
    }
    if (!value.phone) {
      errors.phone = '연락처을 입력해주세요.';
    } else if (!phoneRegExp.test(value.phone)) {
      errors.phone = '숫자만 입력해주세요.';
    }
    if (!value.email) {
      errors.email = '이메일을 입력해주세요.';
    } else if (!emailRegExp.test(value.email)) {
      errors.email = '메일 형식이 맞이 않습니다.';
    }

    return errors;
  };

  // project 항목 선택 state
  const projectSelectOption = [
    '기업홈페이지',
    '쇼핑몰홈페이지',
    '브랜딩홈페이지',
    '기타',
  ];

  const [projectSelectChecked, setProjectSelectChecked] = useState([]);

  const projetSelectUpdate = (e) => {
    const { checked, value, name } = e.target;
    if (checked) {
      setProjectSelectChecked([...projectSelectChecked, value]);
      setFormValue({ ...formValue, [name]: projectSelectChecked });
      console.log(formValue);
    } else {
      setProjectSelectChecked(
        projectSelectChecked.filter((el) => el !== value)
      );
      setFormValue({ ...formValue, [name]: projectSelectChecked });
    }
  };

  // const ProjectSelectElement = () => {
  //   return ;
  // };

  // select 항목 제작예산 선택 state
  const budgetSelectOption = [
    '500만원 이하',
    '500만원 ~ 2천만원 이하',
    '2천만원 ~ 5천만원 이하',
    '5천만원 이상',
  ];

  const [budgetSelectChecked, SetBudgetSelectChecked] = useState([]);

  const budgetSelectUpdate = (e) => {
    const { checked, value, name } = e.target;
    if (checked) {
      SetBudgetSelectChecked(value);
      setFormValue({ ...formValue, [name]: budgetSelectChecked });
    } else {
      SetBudgetSelectChecked(budgetSelectChecked.filter((el) => el !== value));
      setFormValue({ ...formValue, [name]: budgetSelectChecked });
    }
  };

  // 개인정보처리방침 drop-down
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  // Gsap Animation
  useEffect(() => {
    if (scrollIndex === 3) {
      gsap.fromTo(
        formleftContentsRef.current,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          duration: 1.5,
          delay: 0.6,
          y: 0,
          ease: 'power3.easeOut',
        }
      );
      gsap.fromTo(
        formRightContentsRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          duration: 1.5,
          delay: 0.6,
          y: 0,
          ease: 'power3.easeOut',
        }
      );
    } else {
      // gsap.fromTo(
      //   formleftContentsRef.current,
      //   {
      //     opacity: 0,
      //     y: 0,
      //   },
      //   {
      //     opacity: 0,
      //     duration: 0,
      //     delay: 0,
      //     y: 0,
      //     ease: 'power3.easeOut',
      //   }
      // );
      // gsap.fromTo(
      //   // formRightContentsRef.current,
      //   // {
      //   //   opacity: 0,
      //   //   y: 0,
      //   // },
      //   // {
      //   //   opacity: 0,
      //   //   duration: 0,
      //   //   delay: 0,
      //   //   y: 0,
      //   //   ease: 'power3.easeOut',
      //   // }
      // );
    }
  }, [scrollIndex]);

  return (
    <MainContactkWrap>
      <div className='main_contact_wrap'>
        <div ref={formleftContentsRef} className='form_left_item'>
          <h2 className='form_title'>CONTACT</h2>
          <p className='form_explan_text'>
            프로젝트 유형, 구축예산, 상세내용에 대한
            <br /> 간략한 설명을 보내주시면 확인 후<br /> 빠르게
            답변드리겠습니다.
          </p>
          <div className='contact_info_wrap'>
            <p className='contact_info_item'>
              <span>address.</span>3402, Bando 8th, 73,
              <br /> Dongtan Gwangyeok Hwanseung-ro,
              <br /> Hwaseong-si, Gyeonggi-do
            </p>
            <p className='contact_info_item'>
              <span>Email.</span>smilekimyh@naver.com
            </p>
            <p className='contact_info_item'>
              <span>kakao.</span>Funace
            </p>
          </div>
        </div>
        <div ref={formRightContentsRef} className='form_right_item'>
          <div>
            <form onSubmit={handleSubmit}>
              {/* 프로젝트 유형 선택  */}
              <div className='form_service_item'>
                <p className='form_type'>01.Project</p>
                <p className='form_type_desc'>
                  제작하고 싶은 프로젝트 유형을 선택해주세요.
                  <span>(중복선택가능)</span>
                </p>
                <div className='input_checkbox_contents'>
                  {projectSelectOption.map((item) => (
                    <p key={item} className='input_checkbox_contents_inner'>
                      <input
                        type='checkbox'
                        id={item}
                        name='project'
                        value={item}
                        onChange={projetSelectUpdate}
                        className='input_checkbox'
                        checked={
                          projectSelectChecked.includes(item) ? true : false
                        }
                      />
                      <label className='input_checkbox_label' htmlFor={item}>
                        <span>{item}</span>
                      </label>
                    </p>
                  ))}
                </div>
              </div>
              {/* 프로젝트 가격 선택  */}
              <div className='form_service_item'>
                <p className='form_type'>02.Budget</p>
                <p className='form_type_desc'>
                  프로젝트 제작예산을 선택해주세요.
                </p>
                <div className='input_checkbox_contents'>
                  {budgetSelectOption.map((item) => (
                    <p key={item} className='input_checkbox_contents_inner'>
                      <input
                        type='checkbox'
                        name='budget'
                        value={item || ''}
                        id={item}
                        onChange={budgetSelectUpdate}
                        className='input_checkbox'
                        checked={
                          budgetSelectChecked.includes(item) ? true : false
                        }
                      />
                      <label className='input_checkbox_label' htmlFor={item}>
                        <span>{item}</span>
                      </label>
                    </p>
                  ))}
                </div>
              </div>
              <div className='form_service_item form_service_item02'>
                <p className='form_type'>02.Budget</p>
                <p className='form_type_desc'>
                  프로젝트 제작예산을 선택해주세요.
                </p>
                <div className='form_input_item'>
                  <div>
                    <div className='form_item'>
                      <input
                        id='form_company'
                        type='text'
                        name='company'
                        value={formValue.company}
                        onChange={handleValidation}
                        className=''
                      />
                      <span className='form_name'>
                        회사명 <span className='necessary_write'>(필수)</span>
                      </span>
                      <span className='form_line'></span>
                    </div>
                    <span className='text_danger'>{formError.company}</span>
                  </div>
                  <div>
                    <div className='form_item'>
                      <div>
                        <input
                          id='form_name'
                          type='text'
                          name='name'
                          value={formValue.name}
                          onChange={handleValidation}
                          className=''
                        />
                        <span className='form_name'>
                          담당자명{' '}
                          <span className='necessary_write'>(필수)</span>
                        </span>
                        <span className='form_line'></span>
                      </div>
                    </div>
                    <span className='text_danger'>{formError.name}</span>
                  </div>
                  <div>
                    <div className='form_item'>
                      <div>
                        <input
                          id='form_phone'
                          type='text'
                          name='phone'
                          value={formValue.phone}
                          onChange={handleValidation}
                          className=''
                        />
                        <span className='form_name' htmlFor='form_company'>
                          연락처 <span className='necessary_write'>(필수)</span>
                        </span>
                        <span className='form_line'></span>
                      </div>
                    </div>
                    <span className='text_danger'>{formError.phone}</span>
                  </div>
                  <div>
                    <div className='form_item'>
                      <input
                        id='form_email'
                        type='text'
                        name='email'
                        value={formValue.email}
                        onChange={handleValidation}
                        className=''
                      />
                      <span className='form_name' htmlFor='form_company'>
                        이메일 <span className='necessary_write'>(필수)</span>
                      </span>
                      <span className='form_line'></span>
                    </div>
                    <span className='text_danger'>{formError.email}</span>
                  </div>
                  <div>
                    <div className='form_item'>
                      <input
                        type='text'
                        name='site'
                        value={formValue.site}
                        onChange={handleValidation}
                        className=''
                      />
                      <span className='form_name' htmlFor='form_company'>
                        참고사이트 1
                      </span>
                      <span className='form_line'></span>
                    </div>
                  </div>
                  <div>
                    <div className='form_item'>
                      <input
                        type='text'
                        name='site02'
                        value={formValue.site02}
                        onChange={handleValidation}
                        className=''
                      />
                      <span className='form_name' htmlFor='form_company'>
                        참고사이트 2
                      </span>
                      <span className='form_line'></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form_item form_item_text_area'>
                <textarea
                  name='memo'
                  value={formValue.memo}
                  onChange={handleValidation}
                  className=''
                ></textarea>
                <span className='form_name' htmlFor='form_company'>
                  문의 내용
                </span>
                <span className='form_line'></span>
              </div>
              <div>
                <div className='policy_accept'>
                  <input
                    ref={policyAcceptRef}
                    id='form_label'
                    type='checkbox'
                    onChange={setPolicyAcceptCheckbox}
                  />
                  <label htmlFor='form_label'>
                    <span>개인정보 수집이용 동의</span>
                  </label>
                  <button
                    type='button'
                    onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
                    className='policy_popup_show'
                  >
                    전체 내용 보기
                  </button>
                </div>
                {dropdownVisibility ? (
                  <div className='policy_popup_desc'>
                    <p>
                      네모디자인(이하 '회사' 이라 함)은 귀하의 개인정보보호를
                      매우 중요시하며, 『개인정보보호법』을 준수하고 있습니다.
                      <br />
                      회사는 개인정보처리방침을 통하여 귀하께서 제공하시는
                      개인정보가 어떠한 용도와 방식으로 이용되고 있으며
                      개인정보보호를 위해 어떠한 조치가 취해지고 있는지
                      알려드립니다.
                      <br />
                      이 개인정보처리방침의 순서는 다음과 같습니다.
                      <br />
                      <br />
                      제 1장
                      <br />
                      수집하는 개인정보 항목 및 수집방법 회사는 온라인 상담
                      서비스 이용을 위해 필요한 최소한의 개인정보만을
                      수집합니다.
                      <br />
                      개인정보의 수집 내용은 아래와 같습니다.
                      <br />
                      가. 수집항목 이름, 전화번호, 이메일, 접속 IP 정보
                      <br />
                      <br />
                      제2장
                      <br />
                      개인정보의 수집 및 이용목적 이용자가 제공한 모든 정보는
                      하기 목적에 필요한 용도 이외로는 사용되지 않으며 이용
                      목적이 변경될 시에는 사전 동의를 구할 것입니다.
                      <br />
                      <br />
                      가. 개인정보 홈페이지를 통한 온라인상담 서비스 제공.
                      <br />
                      <br />
                      제3장 <br /> <br />
                      개인정보의 보유 및 이용기간​ 회사는 개인정보의 수집목적
                      또는 제공받은 목적이 달성된 때에는 귀하의 개인정보를 지체
                      없이 파기합니다. <br />
                      제4장​ <br /> <br />
                      개인정보의 파기절차 및 그 방법 회사는 『개인정보의 수집 및
                      이용목적』이 달성된 후에는 즉시 파기합니다. 파기절차 및
                      방법은 다음과 같습니다. <br />
                      가. 파기절차 이용자가 온라인상담 등을 위해 입력한 정보는
                      목적이 달성된 후 파기방법에 의하여 즉시 파기합니다.
                      <br />
                      나. 파기방법 전자적 파일형태로 저장된 개인정보는 기록을
                      재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에
                      출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
                      ​
                      <br /> <br />
                      제5장 개인정보 제공 및 공유 (해당하는 경우만) ​ 회사는
                      귀하의 동의가 있거나 관련법령의 규정에 의한 경우를
                      제외하고는 어떠한 경우에도 『개인정보의 수집 및
                      이용목적』에서 고지한 범위를 넘어 귀하의 개인정보를
                      이용하거나 타인 또는 타기업ㆍ기관에 제공하지 않습니다.{' '}
                      <br /> <br />
                      제6장 수집한 개인정보의 취급위탁 (해당하는 경우만) 회사는
                      고객님의 동의없이 고객님의 개인정보 취급을 외부 업체에
                      위탁하지 않습니다. <br /> 향후 그러한 필요가 생길 경우,
                      위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고
                      필요한 경우 사전 동의를 받도록 하겠습니다. <br />​ 제7장
                      동의철회 귀하는 온라인상담 시 개인정보의 수집ㆍ이용 및
                      제공에 대해 동의하신 내용을 언제든지 철회하실 수 있습니다.
                      회원탈퇴는 회사 홈페이지 마이페이지의 『회원탈퇴』를
                      클릭하여 본인 확인 절차를 거치신 후 직접 회원탈퇴를
                      하시거나, 개인정보관리책임자로 서면, 전화 또는 Fax 등으로
                      연락하시면 지체 없이 귀하의 개인정보를 파기하는 등 필요한
                      조치를 하겠습니다. <br /> <br />
                      제8장​ 개인정보 자동 수집 장치의 설치/운영 및 그 거부에
                      관한 사항 ​ 회사는 귀하의 정보를 수시로 저장하고 찾아내는
                      '쿠키(cookie)'를 운용합니다. <br />
                      쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의
                      브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터
                      하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해
                      쿠키를 사용합니다. 귀하는 쿠키 설치에 대한 선택권을 가지고
                      있습니다. 따라서, 귀하는 웹 브라우저에서 옵션을
                      설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다
                      확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도
                      있습니다. 회원님께서 쿠키 설치를 거부하셨을 경우 일부
                      서비스 제공에 어려움이 있습니다. <br /> <br />
                      제9장 <br />​ 개인정보관리책임자 귀하의 개인정보를
                      보호하고 개인정보와 관련한 불만을 처리하기 위하여 회사는
                      아래와 같이 개인정보관리책임자를 두고 있습니다. <br />
                      개인정보 관리책임자 <br /> 책임자: 이유정 <br /> 전화번호:
                      070-7619-1002 <br />
                      E-mail: l952018@naver.com <br />
                      기타 개인정보침해에 대한 신고나 상담이 필요한 경우에는
                      아래 기관에 문의하시기 바랍니다. <br />
                      개인분쟁조정위원회: www.kopico.go.kr / 1833-6972 <br />
                      정보보호마크인증위원회: www.eprivacy.or.kr / 1899-4134
                      <br />
                      대검찰청 사이버범죄수사단: www.spo.go.kr / 국번없이 1301
                      <br />
                      경찰청 사이버테러대응센터: www.cyber.go.kr / 국번없이 182
                      ​
                      <br />
                      <br /> 제10장​
                      <br />
                      개인정보의 안전성 확보조치 ​ 회사는 이용자의
                      개인정보보호를 위한 기술적 대책으로서 여러 보안장치를
                      마련하고 있습니다. 이용자께서 보내시는 모든 정보는
                      방화벽장치에 의해 보호되는 보안시스템에 안전하게
                      보관/관리되고 있습니다. <br />
                      또한 회사는 이용자의 개인정보보호를 위한 관리적 대책으로서
                      이용자의 개인정보에 대한 접근 및 관리에 필요한 절차를
                      마련하고, 이용자의 개인정보를 처리하는 인원을 최소한으로
                      제한하여 지속적인 보안교육을 실시하고 있습니다.
                      <br /> 또한 개인정보를 처리하는 시스템의 사용자를 지정하여
                      사용자 비밀번호를 부여하고 이를 정기적으로 갱신하겠습니다.
                      ​
                      <br />
                      제11장​ 정책 변경에 따른 공지의무​ 이 개인정보처리방침은
                      2014년 12월 01일에 제정되었으며 법령ㆍ정책 또는 보안기술의
                      변경에 따라 내용의 추가ㆍ삭제 및 수정이 있을 시에는
                      변경되는 개인정보처리방침을 시행하기 최소 7일전에 회사
                      홈페이지를 통해 변경이유 및 내용 등을 공지하도록
                      하겠습니다. ​<br />
                      시행일자: 2016년 12월 01일
                      <br /> 최종변경일자: 2022년 5월 1일
                    </p>
                  </div>
                ) : null}
              </div>
              <button className='form_submit_btn' type='submit'>
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainContactkWrap>
  );
};

export default MainContactContents;

const MainContactkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #000;
  background-size: cover;
  /* :before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: url('./images/svg/sampleSvg.svg') center center no-repeat;
    background-size: cover;
    opacity: 0.1;
  } */
  .main_contact_wrap {
    display: flex;
    max-width: 1460px;
    width: 100%;
    .form_left_item {
      flex: 4.5;
      .form_title {
        color: #fff;
        font-size: 4rem;
        font-weight: 600;
      }
      .form_explan_text {
        color: #fff;
        font-size: 1.1rem;
        margin-top: 30px;
        font-weight: 300;
      }
      .contact_info_wrap {
        margin-top: 100px;
        .contact_info_item {
          position: relative;
          color: #fff;
          font-size: 1rem;
          padding-left: 140px;
          margin-bottom: 30px;
          font-weight: 300;
          span {
            position: absolute;
            left: 0px;
            top: 0px;
            opacity: 0.5;
            font-weight: 400;
          }
        }
      }
    }
    .form_right_item {
      position: relative;
      height: 100%;
      flex: 5.5;
      width: 100%;
      margin-right: 50px;
      > div {
        position: relative;
        height: 60vh;
        overflow-y: scroll;
        padding-right: 10px;

        /* 길이 변경 */
        ::-webkit-scrollbar {
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 7px;
          border-radius: 5px;
        }

        /* 트랙 (Track) */
        ::-webkit-scrollbar-track {
          background: transparent;
        }

        /* 핸들 (Handle) */
        ::-webkit-scrollbar-thumb {
          background: rgb(230, 24, 45, 0.5);
          border-radius: 10px;
          height: 100px;
        }

        ::-webkit-scrollbar {
          display: block;
        }
      }
      .form_service_item {
        position: relative;
        margin-bottom: 80px;
        .form_type {
          color: #fff;
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.4;
        }
        .form_type_desc {
          font-size: 1.4rem;
          color: #fff;
          margin-top: 10px;
          display: flex;
          align-items: center;
          span {
            font-size: 0.7rem;
            opacity: 0.4;
            margin-left: 15px;
          }
        }
      }
      .form_service_item02 {
        margin-bottom: 0px;
      }
      .form_input_item {
        display: flex;
        width: 100%;
        flex: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        > div {
          display: block;
          min-height: 80px;
          width: 50%;
          padding-right: 30px;
        }
      }
      .form_item {
        position: relative;
        /* margin-bottom: 30px; */
        min-height: 40px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        margin-bottom: 5px;
      }
      .form_item_text_area {
        position: relative;
        margin-top: 3px;
        height: 160px;
        width: 96%;
      }

      .form_name {
        position: absolute;
        top: 0px;
        left: 0px;
        display: block;
        color: rgba(255, 255, 255, 0.5);
        transition: 0.3s;
        pointer-events: none;
        font-size: 1rem;
        font-weight: 300;
        .necessary_write {
          color: rgb(230, 24, 45, 0.8);
          font-weight: 200;
          font-size: 0.8rem;
        }
      }
      input:focus + .form_name,
      .acitve_input + .form_name,
      textarea:focus + .form_name {
        top: -15px;
        left: 8px;
        font-size: 0.8rem;
      }

      .input_checkbox_contents {
        display: flex;
        margin-top: 20px;
        padding-right: 26px;
      }

      .input_checkbox_contents_inner {
        flex: 1;
        margin-right: 8px;
      }

      .input_checkbox_contents_inner label span {
        color: #fff;
        font-size: 0.9rem;
      }

      .input_checkbox {
        position: absolute;
        display: none;
        left: 0px;
        top: 0px;
      }

      .input_checkbox_label {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        height: 60px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        cursor: pointer;
        transition: 0.5s;
      }

      .input_checkbox:checked ~ .input_checkbox_label {
        background: #fff;
      }

      .input_checkbox:checked ~ .input_checkbox_label span {
        color: #000;
      }

      input[type='text'] {
        position: absolute;
        height: 100%;
        background-color: transparent;
        border: 0px;
        width: 100%;
        color: #fff !important;
        padding: 10px;
        box-shadow: none;
        outline: none;
        z-index: 1;
      }
      textarea {
        position: absolute;
        height: 100%;
        background-color: transparent;
        border: 0px;
        width: 100%;
        color: #fff;
        padding: 4% 10px 10px 10px;
        font-size: 0.9rem;
        box-shadow: none;
        outline: none;
        z-index: 1;
        font-weight: 300;
      }
      .form_line {
        position: absolute;
        bottom: -1px;
        left: 0px;
        display: block;
        width: 0px;
        transition: 0.2s;
        pointer-events: none;
        height: 1px;
      }

      input:focus {
        border: 1px solid red;
      }

      input:focus ~ .form_line {
        width: 100%;
        background: rgb(230, 24, 45, 1);
      }
      textarea:focus ~ .form_line {
        border-bottom: 1px solid #ff0000;
        width: 100%;
        height: 90%;
        background: transparent;
      }

      .form_submit_btn {
        color: #fff;
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 20px 80px;
        margin-top: 50px;
      }
      .text_danger {
        color: #fff;
        display: block;
        font-size: 1rem;
        margin-top: 0px;
        color: rgb(230, 24, 45);
        font-size: 0.8rem;
        font-weight: 400;
      }
      .policy_accept {
        display: flex;
        align-items: center;
        color: #fff;
        margin-top: 20px;
        input {
          margin-right: 7px;
          width: 18px;
          height: 18px;
        }
        span {
          opacity: 0.5;
          font-size: 0.8rem;
          font-weight: 200 !important;
        }
        .policy_popup_show {
          padding-top: 2px;
          display: block;
          margin-left: 15px;
          border: 0px;
          background: none;
          color: #fff;
          font-size: 0.6rem;
          font-weight: 400;
          text-decoration: underline;
          opacity: 0.9;
          cursor: pointer;
        }
      }
      .policy_popup_desc {
        color: #fff;
        margin-top: 10px;
        padding: 10px;
        background: rgba(255, 255, 255, 0.2);
        margin-right: 27px;
        font-size: 0.8rem;
        font-weight: 300;
        p {
          word-break: keep-all;
          position: relative;
          padding: 0 10px;
          overflow-y: scroll;
          height: 240px;

          /* 길이 변경 */
          ::-webkit-scrollbar {
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 7px;
            border-radius: 5px;
          }

          /* 트랙 (Track) */
          ::-webkit-scrollbar-track {
            background: transparent;
          }

          /* 핸들 (Handle) */
          ::-webkit-scrollbar-thumb {
            background: rgb(0, 0, 0, 0.5);
            border-radius: 10px;
            height: 50px;
          }

          ::-webkit-scrollbar {
            display: block;
          }
        }
      }
    }
  }
`;
