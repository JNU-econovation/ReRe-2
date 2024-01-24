import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardBookContainer = styled.div`
  display: flex;
`;

const ImageField = styled.img`
  width: 132px;
  height: 191.5px;
  margin-top: 80px;
  border-bottom: #007af3 1px solid;
  border-top: #007af3 1px solid;
  border-left: #007af3 1px solid;
`;

const ButtonField = styled.button`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 192.5px;
  border-radius: 0px 4px 4px 0px;
  border: #007af3 1px solid;
  margin-top: 80px;
`;

const CardBook = ({ data, cardbookId, imageUrl }) => {
  let bookImage;

  bookImage = import.meta.env.VITE_API_KEY + imageUrl;

  return (
    <CardBookContainer>
      <Link to={`/cardbook/${cardbookId}/themes`}>
        <ImageField src={bookImage} alt="book cover" />
      </Link>
      <Link to={`/cardbook/${cardbookId}/themes`}>
        <ButtonField>
          <div style={{ color: "#007af3", fontSize: 17 }}>{data.name}</div>
          <div style={{ marginTop: 10, fontSize: 17 }}>{data.writer}</div>
          <div style={{ marginTop: 30, fontSize: 17 }}>{data.updateDate}</div>
        </ButtonField>
      </Link>
    </CardBookContainer>
  );
};

export default CardBook;
