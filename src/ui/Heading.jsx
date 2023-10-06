import styled, { css } from "styled-components";

const Heading = styled.h1`
    ${(props) =>
        props.as === "h1" &&
        css`
        font-size: 40px;
        font-weight: 600;
        color: #18184a;
        
    ` }

    ${(props) =>
        props.as === "h2" &&
        css`
        font-size: 24px;
        font-weight: 500;
        color: #18184a;
        
    ` }
    ${(props) =>
        props.as === "h3" &&
        css`
        font-size: 18px;
        font-weight: 500;
        color: #18184a;
        
    ` }
`;

export default Heading;