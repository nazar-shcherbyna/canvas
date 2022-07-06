import styled, { css } from 'styled-components';

export const ManagePanelSC = styled.aside`
    width: 200px;
    flex-shrink: 0;
    background-color: #2876fe;

    & > .manage-panel__h2 {
        margin: 0;
        padding: 10px;
        color: #fff;
        text-align: center;
    }

    & .manage-panel__buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
`

export const ManageButtonSC = styled.div<{selected: boolean}>`
    height: 30px;
    background-color: #a1fe28;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    ${p => p.selected && css`
        border: 2px solid #f85050;
    `}
`