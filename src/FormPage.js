import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDictionaryFB } from "./redux/modules/dictionary";

const FormPage = () => {
  const word = React.useRef(null);
  const explanation = React.useRef(null);
  const example = React.useRef(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const addDictionary = () => {
    dispatch(
      addDictionaryFB({
        word: word.current.value,
        explanation: explanation.current.value,
        example: example.current.value,
      })
    );
    history.push("/");
  };
  return (
    <>
      <CardTemplate>
        <CardTitle>단어 추가하기</CardTitle>
        <FormList>
          <WordItem>
            <WordBox>단어</WordBox>
            <InputText ref={word} />
          </WordItem>
          <WordItem>
            <WordBox>설명</WordBox>
            <InputText ref={explanation} />
          </WordItem>
          <WordItem>
            <WordBox>예시</WordBox>
            <InputText ref={example} />
          </WordItem>
        </FormList>
        <AddWordBtn onClick={addDictionary}>추가하기</AddWordBtn>
      </CardTemplate>
    </>
  );
};

const CardTemplate = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: #eafff1;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
`;

const WordItem = styled.div`
  width: 400px;
  height: 100px;
  padding: 20px;
  background-color: white;
  margin: auto;
  margin-bottom: 40px;
`;

const WordBox = styled.div`
  text-decoration: underline;
  margin-bottom: 20px;
`;

const FormList = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  margin: auto;
  margin-bottom: 20px;
`;

const InputText = styled.input`
  width: 380px;
  height: 60px;
  margin-left: 5px;
`;

const AddWordBtn = styled.button`
  width: 400px;
  font-size: 30px;
  margin-bottom: 10px;
  color: white;
  background-color: #00de99;
`;
export default FormPage;
