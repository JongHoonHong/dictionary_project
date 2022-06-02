import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  loadDictionaryFB,
  deleteDictionaryFB,
} from "./redux/modules/dictionary";
import { useDispatch } from "react-redux";

const Home = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const word_list = useSelector((state) => state.dictionary.list);

  console.log(word_list);
  useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);
  return (
    <>
      <CardTemplate>
        <CardTitle>MY DICTIONARY</CardTitle>
        {word_list.map((list, index) => {
          return (
            <CardList key={index} id={list.id}>
              <CardItem>
                <WordBox>
                  <Category>단어</Category>
                  <Word>{list.word}</Word>
                </WordBox>
                <WordBox>
                  <Category>설명</Category>
                  <Explanation>{list.explanation}</Explanation>
                </WordBox>
                <WordBox>
                  <Category>예시</Category>
                  <Example>{list.example}</Example>
                </WordBox>
                <DeleteBtn
                  onClick={() => {
                    dispatch(deleteDictionaryFB(list.id));
                    history.push("/");
                  }}
                >
                  삭제버튼
                </DeleteBtn>
              </CardItem>
            </CardList>
          );
        })}

        <AddBtn
          onClick={() => {
            history.push("/FormPage");
          }}
        >
          +
        </AddBtn>
      </CardTemplate>
    </>
  );
};

const Category = styled.p`
  margin: 0;
  text-decoration: underline;
`;

const Word = styled.p`
  margin: 0;
  font-size: 20px;
`;

const Explanation = styled.p`
  margin: 0;
  font-size: 20px;
`;

const Example = styled.p`
  margin: 0;
  font-size: 20px;
`;

const WordBox = styled.div`
  margin-bottom: 30px;
`;

const CardTemplate = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: #eafff1;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  overflow-y: auto;
  overflow-x: hidden;
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
  border-bottom: 1px solid #e9ecef;
`;

const CardList = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;

  margin: auto;
  margin-bottom: 20px;
`;

const CardItem = styled.div`
  width: 400px;
  height: 200px;
  padding: 20px;
  background-color: white;
  margin: auto;
  margin-bottom: 40px;
`;

const AddBtn = styled.button`
  width: 80px;
  height: 80px;
  font-size: 80px;
  color: white;
  background-color: #00de99;
  border: 0px;
  border-radius: 60px;
  margin-bottom: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const DeleteBtn = styled.button`
  font-size: 20px;
`;
export default Home;
