import styled from 'styled-components';

export const TopPanelSC = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 10px 20px 10px;

    & > .canvas-button {
        width: 50px;
        height: 20px;
        border: 2px solid blue;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
            max-width: 100%;
            max-height: 100%;
        }
    }
`