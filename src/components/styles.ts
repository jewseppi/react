import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const BodyDetails = styled.div`
  font-weight: 500;
  font-family: monospace;
  padding: 8px 0 0;
`;

export const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: auto;
  gap: 10px;
  text-align: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;  
  flex-grow: 1;
  border: 1px solid lightgrey;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  
  :active {    
    background: rgba(175, 238, 238, 0.2);
    border-radius: 8px;
    box-shadow: none;
  }

  :hover {
    cursor: pointer;
  }
}`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;  
  width: 100%;
}`;

export const DetailsHeader = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;

  img {
    border: 0;
  }
`;

export const DetailsTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  background: rgba(155, 221, 255, 0.8);
  border-top: 1px solid grey;
  padding: 8px;
  height: 100%;
  width: 100%;

  h2 {
    margin-bottom: 0;
  }

  h3 {
    margin-top: auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-grow: 0;

  p:first-child {
    margin: auto 0 auto auto;
  }

  p:last-child {
    margin: auto auto auto 0;
  }
`;

export const Image = styled.img`
  border: 1px solid lightgrey;
  display: flex;
  margin: auto;
  width: 150px;
  height: 150px;
`;

export const Title = styled.div<any>`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  background: ${(props) =>
    props.type === "track"
      ? "rgba(175, 238, 238, 0.8)"
      : "rgba(255, 160, 122, 0.8)"};
  border-bottom: 1px solid lightgrey;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 8px;

  h2 {
    margin-bottom: 0;
  }

  h3 {
    margin-top: auto;
  }
`;
